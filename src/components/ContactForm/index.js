import * as React from 'react';
import { Link } from 'gatsby';
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';
import FormInput from '../FormInput';
import FormError from '../FormError';
import Cta from '../Cta';
import * as S from './styles';

export interface IProps {
  body?: string;
  tel?: { code: string; number: string };
  termsLink: string;
  title?: string;
  successText: string;
}

class ContactForm extends React.Component<IProps, {}> {
  public readonly state = {
    name: '',
    email: '',
    phone: '',
    terms: true,
    isNameError: false,
    isEmailError: false,
    isPhoneError: false,
    isTermsError: false,
    isContactError: false,
    isLoading: false,
    isSubmitted: false,
    response: ''
  };

  public render() {
    const { tel, title, termsLink, body } = this.props;
    const {
      name,
      email,
      phone,
      terms,
      isNameError,
      isEmailError,
      isPhoneError,
      isTermsError,
      isContactError,
      isLoading,
      isSubmitted,
      response
    } = this.state;

    return (
      <S.ContactForm id="contact-us">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="body">
            {body}
            {tel && <S.Tel>{tel.number}</S.Tel>}
          </p>
        </div>

        <S.Form name="contact" onSubmit={this.handleFormSubmit}>
          <S.Fieldset disabled={isSubmitted || isLoading} aria-busy={isLoading}>
            <FormInput
              errorMessage="Required field"
              hasError={isNameError}
              isRequired={true}
              label="Your Name"
              minLength={1}
              name="name"
              onChange={this.onChange}
              onBlur={this.onBlur}
              type="text"
              value={name}
            />
            <FormInput
              errorMessage="Please enter a valid email address"
              hasError={isEmailError}
              isRequired={false}
              label="Email"
              name="email"
              onChange={this.onChange}
              onBlur={this.onBlur}
              type="email"
              value={email}
            />

            <FormInput
              errorMessage="Please enter a valid phone number"
              hasError={isPhoneError}
              isRequired={false}
              label="Or, your phone number"
              minLength={1}
              name="phone"
              onChange={this.onChange}
              onBlur={this.onBlur}
              type="tel"
              value={phone}
              pattern={'((\\+?' + '44' + ')?7[0-9]{9})|(0[0-9]{10})'}
            />

            <FormInput
              errorMessage="Please agree"
              hasError={isTermsError}
              isRequired={true}
              name="terms"
              onChange={this.onChange}
              onBlur={this.onBlur}
              type="checkbox"
              value={terms}
            >
              I accept the{' '}
              <Link to={termsLink} className="termsLink">
                terms &amp; conditions
              </Link>
            </FormInput>
            <FormError
              isActive={isContactError}
              errorMessage="Please enter either a phone number or email"
            />

            {isSubmitted ? (
              <S.Success>{response}</S.Success>
            ) : (
              <div className="submit">
                <Cta
                  disabled={isLoading}
                  style="solid"
                  tag="button"
                  type="submit"
                >
                  {isLoading ? 'Loading...' : 'Please contact me'}
                </Cta>
                <FormError
                  isActive={Boolean(response)}
                  errorMessage={response}
                />
              </div>
            )}
          </S.Fieldset>
        </S.Form>
      </S.ContactForm>
    );
  }

  // Toggle errors
  private onBlur = e => {
    this.validate(e);
  };

  // Set state
  private onChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;

    // Set state value
    if (type === 'checkbox') {
      this.setState({
        [name]: e.target.checked
      });
      this.setState({ isTermsError: !e.target.checked });
    } else {
      this.setState({
        [name]: val
      });
    }
  };

  private validate = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;

    switch (name) {
      case 'name':
        this.setState({ isNameError: val.length === 0 });
        break;
      case 'email':
        this.setState({ isEmailError: val.length && !isEmail(val) });
        break;
      case 'phone':
        this.setState({ isPhoneError: val.length && !isNumeric(val) });
        break;
      case 'terms':
        this.setState({ isTermsError: !e.target.checked });
        break;
      default:
        break;
    }
  };

  private checkForErrors = () => {
    // Accept either a telephone or email
    const isNameError = !this.state.name || this.state.isNameError;
    const isEmailError = this.state.isEmailError || !this.state.email;
    const isPhoneError = this.state.isPhoneError || !this.state.phone;
    const isContactError = isEmailError && isPhoneError;
    this.setState({
      isNameError,
      isContactError
    });
  };

  private handleFormSubmit = e => {
    e.preventDefault();

    this.checkForErrors();

    if (this.state.isContactError || this.state.isNameError) {
      return;
    }

    this.setState({
      isLoading: true
    });

    const myThis = this;

    const data = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    });

    fetch('https://api.staging.liftedcare.com/v1/contact/', {
      method: 'POST',
      body: data,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          myThis.setState({
            isLoading: false,
            isSubmitted: true,
            response: myThis.props.successText
          });
          return res;
        } else {
          myThis.setState({
            isLoading: false,
            response: `Sorry, there was an error sending the message. Please try again.`
          });
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch(err => console.error('Caught error: ', err));
  };
}

export default ContactForm;
