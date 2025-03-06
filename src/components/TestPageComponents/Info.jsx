import styled from 'styled-components';
import avatarka from "../../assets/avatarka.jpg"
import frontend from "../../assets/frontend.png"
import backend from "../../assets/backend.png"

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

const ActionImage1 = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
     @media (max-width: 500px) {
     width: 12px;
  height: 15px;
  }
`;
const ActionImage2 = styled.div`
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
                              <RankImage src={frontend}/>
                            </Rank>
                            <Rank href={backendLink}target="_blank" rel="noopener noreferrer">
                              <RankImage src={backend}/>
                            </Rank>
                        </ProfileRanks>
                </ProfileInfo>
        </Container1>

     
      <ProfileActions>
        <ActionImage1 alt="Редактировать">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8971 3.10294C19.9598 2.16568 18.4402 2.16568 17.503 3.10294L8.40002 12.2059V15.6H11.7941L20.8971 6.49705C21.8343 5.55979 21.8343 4.0402 20.8971 3.10294Z" fill="#393837"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40002 7.19999C2.40002 5.87451 3.47454 4.79999 4.80002 4.79999H9.60002C10.2628 4.79999 10.8 5.33725 10.8 5.99999C10.8 6.66274 10.2628 7.19999 9.60002 7.19999H4.80002V19.2H16.8V14.4C16.8 13.7373 17.3373 13.2 18 13.2C18.6628 13.2 19.2 13.7373 19.2 14.4V19.2C19.2 20.5255 18.1255 21.6 16.8 21.6H4.80002C3.47454 21.6 2.40002 20.5255 2.40002 19.2V7.19999Z" fill="#393837"/>
          </svg>
        </ActionImage1>

        <ActionImage2 alt="Выйти">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3105 13.5H8.5C7.94772 13.5 7.5 13.0523 7.5 12.5V11.5C7.5 10.9477 7.94772 10.5 8.5 10.5H18.204L17.2821 9.57811C16.8916 9.18758 16.8916 8.55442 17.2821 8.16389L17.9889 7.45711C18.3794 7.06658 19.0126 7.06658 19.4031 7.45711L23.2928 11.3468C23.6834 11.7374 23.6833 12.3706 23.2927 12.7611L19.4031 16.6496C19.0126 17.04 18.3795 17.04 17.989 16.6495L17.2821 15.9426C16.8916 15.5521 16.8916 14.9189 17.2821 14.5284L18.3105 13.5ZM15 5C15 5.55228 14.5523 6 14 6H13C12.4477 6 12 5.55228 12 5V3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H11C11.5523 21 12 20.5523 12 20V19C12 18.4477 12.4477 18 13 18H14C14.5523 18 15 18.4477 15 19V23C15 23.5523 14.5523 24 14 24H1C0.447715 24 0 23.5523 0 23V1C0 0.447716 0.447715 0 1 0H15V5Z" fill="#393837"/>
          </svg>
        </ActionImage2>
      </ProfileActions>

    </ProfileCardWrapper>
  );
};

export default Info;