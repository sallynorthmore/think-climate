import styled from 'styled-components';

export const ContactForm = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 3rem 3rem;
  text-align: center;

  & .title {
    font: 400 var(--type-5) var(--font-ivar-medium);
    margin: 0 auto;
    max-width: 300px;
  }

  & .body {
    font: 400 var(--type-2) var(--font-value-regular);
    margin: 1.5rem auto 0;
    max-width: 420px;
    opacity: 0.8;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
    max-width: 1200px;

    & .content {
      flex: 0 0 50%;
      text-align: left;
    }

    & .title,
    & .body {
      margin-left: 0;
      max-width: 440px;
    }
  }
`;

export const Tel = styled.span`
  color: var(--purple);
  display: block;
  font: 400 var(--type-5) var(--font-value-bold);
  margin: 1.5rem auto 0;
`;

export const Form = styled.form`
  background: var(--white);
  box-shadow: 22px 24px 60px 0 rgba(43, 22, 107, 0.1);
  margin: 3.5rem auto 0;
  padding: 1.75rem 1.75rem 3.25rem;
  text-align: left;

  @media (min-width: ${props => props.theme.desktop}) {
    flex: 0 0 50%;
    margin-top: 0;
    padding: 3rem 3rem 3.25rem;
  }
`;

export const Fieldset = styled.fieldset`
  border: transparent;

  & .submit {
    margin: 1.5rem 0 0;
  }
`;

export const Label = styled.label`
  color: var(--black);
  display: block;
  font: 400 var(--type-1) var(--font-value-regular);
  margin: 2rem 0 0;
`;

export const LabelCheckbox = styled.label`
  align-items: center;
  color: var(--mist);
  display: flex;
  flex-direction: row-reverse;
  font: 400 var(--type-1) var(--font-value-regular);
  justify-content: flex-end;
  margin: 2rem 0 0;
  min-height: 3rem;
  transition: color 0.15s var(--ease-inOut);

  & .termsLink {
    color: var(--mist);
    text-decoration: underline;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: var(--black);
  }

  /* stylelint-disable-next-line */
  & input {
    border: 1px solid var(--grey);
    margin-right: 1rem;
    margin-top: 0;
    position: relative;
    top: -3px;
    width: 1rem;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid var(--grey);
  display: block;
  font: 400 var(--type-1) var(--font-value-regular);
  margin: 1rem 0 0;
  outline: none;
  transition: border-color 0.15s var(--ease-inOut);
  width: 100%;

  /* stylelint-disable-next-line selector-no-vendor-prefix */
  &::-ms-input-placeholder {
    color: var(--grey);
  }

  &::placeholder {
    color: var(--grey);
  }

  &:disabled {
    color: var(--grey);
    cursor: not-allowed;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border-color: var(--black);
  }
`;

export const Error = styled.div`
  display: block;
  margin: 0.5rem 0;

  & .error {
    color: var(--pink);
    font: 400 var(--type--2) var(--font-value-regular);
  }
`;

export const Success = styled.div`
  background: var(--eggshell);
  font: 400 var(--type--1) var(--font-value-regular);
  padding: 1rem 1.5rem;
`;
