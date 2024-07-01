import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 525px;
  min-height: 670px;
  margin: auto;
  position: relative;
  background: url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, .9);
  border-radius: 10px;
  color: #fff;
`;

export const warrap = styled.div`

`;

export const SignUpField = styled.div`
  margin-bottom: 15px;
  flex-direction: column;
  display:
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 14px;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, .1);
  color: #fff;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, .2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  background: #1161ee;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #0e4eaa;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
