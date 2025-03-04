import H2 from './UI/H2';
import Button from './UI/Button';
import styled from 'styled-components';
import imagee from "../../assets/cofe.jpg"
import imagee2 from "../../assets/prog.jpg"

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 

`;

const ArticleList = styled.div`
  display: flex;
  gap: 10px; 
  margin:0 auto ;     
 
`;

const ArticleCard = styled.div`
  width: 100%;  
  height: auto;   
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #2384E3; 
  display: flex;
  flex-direction: column;
  color: #393837;
  padding-bottom: 2%;
   font-size: 16px;
 

  
  text-align: center;
    @media (max-width: 900px) {
   font-size: 14px;
    }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover; 
  border-radius: 8px;
  padding-bottom: 8%;

 
  
`;

const AddArticleCard = styled(ArticleCard)`
  border: 1px dashed #ccc;
  justify-content: center; 
  font-size: 2em;         
  color: #999;
  cursor: pointer;
  font-size: 16px;
     @media (max-width: 900px) {
   font-size: 14px;
    }

`;

const Span = styled.p`
  padding: 3%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Articles = () => {
  const articlesData = [
    {
      imageUrl: imagee2, 
      title: `Что такое JavaScript?`,
    },
    {
      imageUrl: imagee,
      title: 'Сколько кофе выпить, чтобы всю ночь ботать?',
    },
  ];

  return (
    <ArticlesContainer>
      <H2>Мои статьи</H2>
      <ArticleList>
        {articlesData.map((article, index) => (
          <ArticleCard key={index}>
            <ArticleImage src={article.imageUrl} alt={article.title} />
            <Span>{article.title}</Span>
          </ArticleCard>
        ))}
        <AddArticleCard>
          <span>+ Добавить статью</span>
        </AddArticleCard>
      </ArticleList>
      <Button>Смотреть все</Button>
    </ArticlesContainer>
  );
};

export default Articles