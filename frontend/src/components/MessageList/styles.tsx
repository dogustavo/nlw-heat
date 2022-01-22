import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }
`
export const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1;
`

export const MessageItem = styled.li`
  max-width: 440px;

  &:nth-child(2) {
    margin-left: 80px;
  }
`

export const Profile = styled.div`
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
  gap: 12px;

  span {
    font-size: 1rem;
  }
`

export const User = styled.div`
  padding: 2px;
  background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #121214;
  }
`
