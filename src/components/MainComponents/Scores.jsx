import H2 from './UI/H2';
import Label from './UI/Label';
import Button from './UI/Button';
import styled from 'styled-components';



const ScoreComponent = styled.div`
flex: 1;



`;

const Score = styled.div`
 flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3%;


`;
const P = styled.p`
 font-size: 24px;
 font-weight: bold;
 margin: 0;
 padding-bottom: 3px;

`;
const ScoreBlock = styled.div`

  background-color: transparent;
  border: 1px solid #2384E3; 
  color: #2384E3; 
display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  text-align: center;
  text-decoration: none;
  font-size: 14px; 
  cursor: pointer;
  border-radius: 20px; 
  font-weight: Semi Bold;
   width: 120px;  
  height: 90px;
  margin-top: 3%;
`;

const Link = styled.a`
  text-decoration:none;
     color: white;
`;


const Scores = () => {
    return (
      <ScoreComponent>
        <H2>Количество баллов</H2> 
        <Score>
        <ScoreBlock><P>125</P>frontend</ScoreBlock>
        <ScoreBlock><P>146</P>backend</ScoreBlock>
        <ScoreBlock><P>27</P>дополнительная активность</ScoreBlock>
        <ScoreBlock><P>66</P>soft skills</ScoreBlock>
        <ScoreBlock><P>10</P>Дизайн</ScoreBlock>
        </Score>
        <Link href="https://infogram.com/bally-frontend-3-kurs-fevral-1h0r6rzx8vkgl4e?live"><Button>Смотреть рейтинги</Button></Link>
      </ScoreComponent>
    );
  };

  export default Scores;

