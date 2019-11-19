import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';
import * as S from './styles';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class SubscribeForm extends React.Component {
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
      <S.SubscribeForm>
        <S.Form
          name="subscribe"
          method="post"
          action="/subscribe/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="subscribe" />
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
            <S.Label htmlFor={'email'}>Your email</S.Label>

            <S.Input
              type={'email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
          </S.FormInput>

          <S.FormInput>
            <S.Label htmlFor={'company'}>Your company or department</S.Label>
            <S.Input
              type={'text'}
              name={'company'}
              onChange={this.handleChange}
              id={'company'}
              required={false}
            />
          </S.FormInput>

          <S.FormCheckbox>
            <S.Label htmlFor={'speak'}>
              Are you interested in speaking at our events?
            </S.Label>
            <S.Input
              type={'checkbox'}
              name={'speak'}
              onChange={this.handleChange}
              id={'speak'}
              required={false}
            />
          </S.FormCheckbox>
          <S.FormCheckbox>
            <S.Label htmlFor={'volunteer'}>
              Are you interested in volunteering?
            </S.Label>
            <S.Input
              type={'checkbox'}
              name={'volunteer'}
              onChange={this.handleChange}
              id={'volunteer'}
              required={false}
            />
          </S.FormCheckbox>

          <S.Button type="submit">Subscribe me</S.Button>
        </S.Form>
      </S.SubscribeForm>
    );
  }
}
