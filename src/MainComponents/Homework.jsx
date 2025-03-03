import H2 from './UI/H2';
import Button from './UI/Button';
import styled from 'styled-components';

const Label= styled.button`
  background-color: transparent;
  border: 1px solid #2384E3; 
  padding: 2rem; 

  cursor: pointer;
  border-radius: 20px; 
 @media (max-width: 768px) {
    padding: 3% 4%;
  }
`

const HomeworkComponent = styled.div`
  flex: 1;

  
`;
const P = styled.p`
    text-align:start;
     color: #393837;
   font-size: 16px;
   margin: 4% 0%;
   line-height: 140%;
  
`;
const P1 = styled.p`
  
    color: #2384E3;
    font-size: 18px;
     font-weight: Semi bold;
     
`;
const De = styled.p`
    text-align:start;
     color: #393837;
     font-size: 16px;
`;
     
const No = styled.p`
  color: #AEAEAE;

`;

const Flex = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
 
  
`;

const Homework = () => {
    return (
    <>
    <HomeworkComponent>
        <H2>Домашние задания</H2>
        <Label>
            <Flex>
        <P1>Frontend</P1>
        <No>Не выполнено</No>
            </Flex>
        <P>Создайте простое React-приложение с двумя страницами: "Главная" и "Профиль пользователя".  Используйте lazy для ленивой загрузки компонента "Профиль пользователя".</P>
        <De>Дедлайн до 29.04.2025</De>
        
        </Label>
        <Button>Смотреть все</Button>
      </HomeworkComponent>
      </>
    );
  };
  export default Homework;