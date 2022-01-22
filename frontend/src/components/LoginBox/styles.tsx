import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #17171a;
  background-image: url('img/assets/banner-girl.png');
  background-repeat: no-repeat;
  background-position: center top;

  padding: 440px 50px 0;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 32px;
    line-height: 36px;
  }
`
export const Signin = styled.a`
  background-color: #ffcd1e;
  margin-top: 32px;
  padding: 0 40px;
  height: 50px;
  color: #09090a;
  transition: filter 0.3s ease;

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;

  &:hover {
    filter: brightness(0.9);
  }
`
