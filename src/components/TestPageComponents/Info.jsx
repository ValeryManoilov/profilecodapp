import styled from 'styled-components';
import avatarka from "../../assets/avatarka.jpg"

const ProfileCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
box-sizing: border-box;
  margin: 0 auto;
  
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin-right: 20px;

  @media (max-width: 900px) {
     width: 150px;
  height: 150px;
  }
  @media (max-width: 500px) {
     width: 130px;
  height: 130px;
  }
    @media (max-width: 470px) {
       width: 130px;
  height: 150px;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 10px;
box-sizing: border-box;
  @media (max-width: 900px) {
    gap: 5px;
  };
      @media (max-width: 500px) {
    gap: 5px;}
     @media (max-width: 420px) {
    gap: 3px;
  }
  
`;
const Container1 = styled.div`
  display: flex;

`;


const ProfileName = styled.div`
  font-size: 24px;
  font-weight: medium;
  margin-bottom: 5px;
  color: #393837;
  
  @media (max-width: 900px) {
    font-size: 20px;
  }
     @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const ProfileDetails = styled.div`
font-size: 20px;
  margin-bottom: 10px;
  color: #2384E3;
  @media (max-width: 900px) {
    font-size: 16px;
  }
      @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const ProfileBio = styled.div`
  font-size: 16px;
  color: #393837;
   @media (max-width: 900px) {
    font-size: 16px;
  }
      @media (max-width: 500px) {
    font-size: 14px}
`;

const ProfileRanks = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 10px;
  color: #393837;

 
  padding-top: 40px;
  @media (max-width: 1024px) {
    padding-top: 0px;}
`;

const Rank = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #393837;
   margin-bottom: 0px;
   text-decoration: none;
    margin-top: auto;
       @media (max-width: 500px) {
      font-size: 12px;
       
  }

`;

const RankImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
 
      @media (max-width: 500px) {
     width: 15px;
  height: 15px;
  }
`;

const ProfileActions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  
`;

const ActionImage1 = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
     @media (max-width: 500px) {
     width: 12px;
  height: 15px;
  }
`;
const ActionImage2 = styled(ActionImage1)`
  width: 20px;
  height: 20px;
     @media (max-width: 500px) {
     width: 15px;
  height: 15px;
  }
`;

const Info = ({  name, details, bio, frontendRank, backendRank }) => {
    const frontendLink = "https://infogram.com/bally-frontend-3-kurs-fevral-1h0r6rzx8vkgl4e?live";
    const backendLink = "https://infogram.com/bally-backend-3-kurs-fevral-1hnq41oqm5qkp23?live";
  return (
    <ProfileCardWrapper>
        <Container1>
                <ProfileImage src={avatarka} alt="Фото профиля" />
                <ProfileInfo>
                        <ProfileName>{name}</ProfileName>
                        <ProfileDetails>{details}</ProfileDetails>
                        <ProfileBio>{bio}</ProfileBio>
                        <ProfileRanks>
                        <Rank href={frontendLink} target="_blank" rel="noopener noreferrer">
                            {frontendRank}
                            </Rank>
                            <Rank href={backendLink}target="_blank" rel="noopener noreferrer">
                            {backendRank}
                            </Rank>
                        </ProfileRanks>
                </ProfileInfo>
        </Container1>

     
      <ProfileActions>
      </ProfileActions>

    </ProfileCardWrapper>
  );
};

export default Info;