import styled from 'styled-components';

const Button = styled.button`
  background-color: #2384E3;
  border: none;
  color: white;
  padding: 12px 24px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    display: block; 
  font-size: 16px;
  margin: 0 auto;

  cursor: pointer;
  border-radius: 24px; 
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: rgb(85, 181, 245); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
  }
`;


export default Button;

