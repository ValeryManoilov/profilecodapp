import styled from 'styled-components';
import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import five from "../../assets/5.jpg"
import six from "../../assets/6.jpg"
import seven from "../../assets/7.jpg"
import eight from "../../assets/8.jpg"
import H2 from './UI/H2';  
import Button from './UI/Button'; 


const AchievementsContainer = styled.div`
 

    margin-bottom: 15%
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 ;
  display: flex;
  flex-wrap: wrap;
 
  gap: 10px;
 @media (max-width: 1000px) {
        justify-content: center; 
    }

`;

const AchievementItem = styled.li`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const AchievementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Achieve = () => {
  const achievementsImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
  ];

  return (
    <AchievementsContainer>
      <H2>Мои достижения</H2>
      <AchievementsList>
        {achievementsImages.map((imageUrl, index) => (
          <AchievementItem key={index}>
            <AchievementImage src={imageUrl} alt={`Achievement ${index + 1}`} />
          </AchievementItem>
        ))}
      </AchievementsList>
      <Button>Смотреть все</Button>
    </AchievementsContainer>
  );
};

export default Achieve;