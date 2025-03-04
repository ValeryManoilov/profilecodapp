import styled from 'styled-components';

const Label= styled.button`
  background-color: transparent;
  border: 1px solid #2384E3; 
  color: #2384E3; 
  padding: 8px 16px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px; 
  cursor: pointer;
  border-radius: 20px; 
  transition: background-color 0.3s ease, color 0.3s ease; 
  font-weight: Semi Bold;


  &:hover {
    background-color:rgb(108, 183, 233);
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(173, 216, 230, 0.5); 
  }
`;


export default Label;

