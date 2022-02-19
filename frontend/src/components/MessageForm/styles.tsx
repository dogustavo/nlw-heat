import styled from 'styled-components'

export const FormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`

export const SignOut = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  left: 24px;
  top: 24px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserImage = styled.div`
  padding: 3px;

  background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  > img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 6px solid #121214;
  }
`
export const UserName = styled.strong`
  font-size: 24px;
  line-height: 30px;
  margin-top: 1rem;
`

export const UserGitHub = styled.span`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  color: #c4c4cc;
  gap: 0.5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background-color: #202024;

  label {
    padding: 18px 24px;
    font-size: 20px;
    background-color: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: #e1e1e6;
    font-size: 1rem;
    line-height: 1.2rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button {
    background-color: #ff008e;
    margin: 24px;
    padding: 0 32px;
    height: 40px;
    color: #fff;
    transition: filter 0.3s ease;

    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 16px;

    cursor: pointer;
    align-self: flex-end;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
