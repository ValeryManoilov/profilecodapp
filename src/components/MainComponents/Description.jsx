import userStore from '../../stores/UserStore';
import H2 from './UI/H2';
import styled from 'styled-components';

const P = styled.p`
  font-size: 16px;
  color: #393837;
  width: 80%;
  line-height: 150%;
   @media (max-width: 900px) {
    font-size: 16px;
  }
      @media (max-width: 500px) {
    font-size: 14px}
`
const Description = ({  infa }) => {
  return (
    <>
    <H2>Обо мне</H2>
    <P>{userStore.user.aboutMe}</P>
    
    </>
  );
};

export default Description;