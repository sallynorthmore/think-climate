import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import SEO from '../SEO';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import * as S from './styles';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <SEO description={title} />
        <Hero isSmall headline="Contact"></Hero>
        <S.Main>
          <Content>
            <h2>Thoughts? Questions?</h2>
            <p>Please drop us a line, we'd love to hear from you.</p>
          </Content>
          <S.Form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <S.FormInput>
              <S.Label htmlFor={'name'}>Your name</S.Label>

              <S.Input
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </S.FormInput>
            <S.FormInput>
              <S.Label htmlFor={'email'}>Email</S.Label>

              <S.Input
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
            </S.FormInput>
            <S.FormInput>
              <S.Label htmlFor={'message'}>Message</S.Label>

              <S.TextArea
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
            </S.FormInput>

            <S.Button type="submit">Send</S.Button>
          </S.Form>
        </S.Main>
      </Layout>
    );
  }
}
