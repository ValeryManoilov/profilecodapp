import H2 from './UI/H2';
import Button from './UI/Button';
import Label from './UI/Label';
import styled from 'styled-components';
import Homework from "./Homework";
import Scores  from "./Scores";
import Achive from "./Achieve";
import Article from "./Article"


const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
const SkillsColumn = styled.div`
 
`;
const GroupColumn = styled.div`
`
const GroupDiv= styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;  
`;



const SkillsListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SkillsListLI = styled.li`
  margin: 5px;
`;

const SkillsList = () => {
  const skills = ['React', 'Git', 'Figma', 'JavaScript', 'ML', 'UI дизайн', 'UX дизайн', 'GameDev', 'Lending Page', 'Photoshop', 'HTML', 'Unity', 'CSS', 'Python', 'C#'];

  return (
    <SkillsColumn>
      <H2>Мои навыки</H2>
      <SkillsListUL>
        {skills.map((skill, index) => (
          <SkillsListLI key={index}>
            <Label>{skill}</Label>
          </SkillsListLI>
        ))}
      </SkillsListUL>
    </SkillsColumn>
  );
};

const GroupsList = () => {
  return (
    <GroupColumn>

      <H2>Мои группы</H2>
      <GroupDiv>
      <Label>Backend ПН-СР 17:00</Label> <br/>
      <Label>Frontend ВТ-ЧТ 18:00</Label>
      </GroupDiv>
      <Button>Перейти к расписанию</Button>
    </GroupColumn>
  );
};

const MainContainer = () => {
  return (
    <TwoColumnContainer>
      <SkillsList/>
      <GroupsList/>
        <Homework />
        <Scores />
        <Article/>
        <Achive/>
    </TwoColumnContainer>
  );
};

export default MainContainer;