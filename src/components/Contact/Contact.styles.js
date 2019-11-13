import styled from 'styled-components';

export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  min-height: 40vh;
  padding: 2rem 0 1rem;
  text-align: center;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 2rem 2.5rem;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0 1rem;
`;

export const FormInput = styled.div`
  position: relative;
  text-align: left;
`;

export const Label = styled.label`
  color: var(--coal);
  display: block;
  font: 400 var(--type-1) var(--font-roboto);
  margin: 2rem 0 0;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--coal);
  display: block;
  font: 400 var(--type-1) var(--font-roboto);
  margin: 1rem 0 0;
  outline: none;
  padding: 0.25rem 0;
  width: 100%;

  /* stylelint-disable-next-line selector-no-vendor-prefix */
  &::-ms-input-placeholder {
    color: var(--silver);
  }

  &::placeholder {
    color: var(--silver);
  }

  &:disabled {
    color: var(--silver);
    cursor: not-allowed;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border-color: var(--black);
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid var(--coal);
  display: block;
  font: 400 var(--type-1) var(--font-roboto);
  margin: 1rem 0 0;
  min-height: 8rem;
  outline: none;
  padding: 0.75rem;
  width: 100%;

  /* stylelint-disable-next-line selector-no-vendor-prefix */
  &::-ms-input-placeholder {
    color: var(--silver);
  }

  &::placeholder {
    color: var(--silver);
  }

  &:disabled {
    color: var(--silver);
    cursor: not-allowed;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border-color: var(--black);
  }
`;

export const Checkbox = styled.div`
  align-items: baseline;
  display: flex;

  & ${Label} {
    display: inline-block;
    flex: 1;
    margin: 0;
    transform: none;
  }

  & ${Input} {
    flex: 0 0 2rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: var(--black);
  color: var(--white);
  display: flex;
  font: 400 var(--type-2) var(--font-roboto);
  height: 3rem;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;

  &:focus,
  &:hover {
    background: var(--white);
    border: 1px solid var(--coal);
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.tablet}) {
    display: inline-flex;
    min-width: 10rem;
  }
`;
