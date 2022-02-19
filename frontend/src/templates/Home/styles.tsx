import styled, { css } from 'styled-components'

interface IStyled {
  isAuth: boolean
}

export const ContentWrapper = styled.section<IStyled>`
  display: grid;
  grid-template-columns: 1fr 453px;
  gap: 120px;
  position: relative;
  height: 100vh;

  ${({ isAuth }) =>
    isAuth &&
    css`
      &::before {
        content: '';
        height: 100vh;
        width: 420px;
        background-image: url('img/assets/background.svg');
        background-size: cover;
        background-repeat: no-repeat;

        position: absolute;
        right: -200px;
        top: 0;
      }
    `}
`
