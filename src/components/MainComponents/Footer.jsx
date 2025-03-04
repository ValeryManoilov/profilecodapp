import styled from 'styled-components';
import tg from "../../assets/group 1.svg"
import vk from "../../assets/Vector.svg"
import yt from "../../assets/YouTube.svg"

const Footerdiv = styled.div`
background-color: #393837;
    width: 60%;
    margin: 0 auto;
    padding: 2% 2%;
    box-sizing: border-box;
      display: flex;
      font-size: 14px;

     
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    background-color: #2384E3;
        width: 100%; 
        padding: 5% 5%;
    }
  

`;

const P = styled.p`
color: white;
`;





const Div1 = styled.div`
  display: flex;
flex-direction: column;
gap: 8px;

`;



const Div2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
     
`;
const Link = styled.a`
  text-decoration:none;
     color: white;
`;

const Footer = () => {
  return (
    <Footerdiv>
        <Div1>
            
            
            
            <P><Link href="https://code-edu.ru/"> Сайт проекта </Link></P>

            <P>kodprog@russianleader.org</P>
            <P>8 (981)-193-03-96</P>
            <P> © 2025 </P>
        </Div1>
        <Div2>
            <Link href="https://t.me/kod_puzzle"><Img src={tg}/></Link>
            <Link href="https://vk.com/kodprog"><Img src={vk}/></Link>
            <Link href="https://vk.com/away.php?to=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCDBChulBwtvOj3_ckO8P7sw"><Img src={yt}/> </Link>
        </Div2>
    </Footerdiv>   
  );
};

export default Footer;