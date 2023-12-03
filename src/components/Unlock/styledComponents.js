import styled from 'styled-components'

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
  font-family: 'Roboto';
`
export const LockImage = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const LockParagraph = styled.p`
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const Button = styled.button`
  height: 32px;
  background-size: cover;
  padding: 5px;
  background-color: #06b6d4;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
  color: #e2e8f0;
  font-size: 12px;
  width: 70px;
  @media screen and (min-width: 768px) {
    height: 42px;
    padding: 12px;
    width: 100px;
    font-size: 16px;
  }
`
