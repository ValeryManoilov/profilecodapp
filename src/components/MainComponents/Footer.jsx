import styled from 'styled-components';
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
            <Link href="https://t.me/kod_puzzle">
            
            </Link>
            <Link href="https://vk.com/kodprog">
              <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m18.31 13.5h-9.8105c-0.55228 0-1-0.4477-1-1v-1c0-0.5523 0.44772-1 1-1h9.704l-0.9219-0.92189c-0.3905-0.39053-0.3905-1.0237 0-1.4142l0.7068-0.70678c0.3905-0.39053 1.0237-0.39053 1.4142 0l3.8897 3.8897c0.3906 0.3906 0.3905 1.0238-1e-4 1.4143l-3.8896 3.8885c-0.3905 0.3904-1.0236 0.3904-1.4141-1e-4l-0.7069-0.7069c-0.3905-0.3905-0.3905-1.0237 0-1.4142l1.0284-1.0284zm-3.3105-8.5c0 0.55228-0.4477 1-1 1h-1c-0.5523 0-1-0.44772-1-1v-2h-8c-0.55228 0-1 0.44772-1 1v16c0 0.5523 0.44772 1 1 1h7c0.5523 0 1-0.4477 1-1v-1c0-0.5523 0.4477-1 1-1h1c0.5523 0 1 0.4477 1 1v4c0 0.5523-0.4477 1-1 1h-13c-0.55228 0-1-0.4477-1-1v-22c0-0.55228 0.44772-1 1-1h14v5z" clip-rule="evenodd" fill="#393837" fill-rule="evenodd"/>
              </svg>
            </Link>
            <Link href="https://vk.com/away.php?to=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCDBChulBwtvOj3_ckO8P7sw">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09943 9.18545L8.09886 3.87294L13.0154 6.53836L8.09943 9.18545ZM18.8946 2.95237C18.8946 2.95237 18.7167 1.6495 18.1713 1.07577C17.4793 0.32241 16.7036 0.318858 16.3482 0.275134C13.8018 0.0836917 9.98222 0.0836945 9.98222 0.0836945H9.97426C9.97426 0.0836945 6.15466 0.0836917 3.60826 0.275134C3.25228 0.318858 2.47722 0.32241 1.7846 1.07577C1.23927 1.6495 1.06185 2.95237 1.06185 2.95237C1.06185 2.95237 0.879883 4.48272 0.879883 6.01248V7.44712C0.879883 8.97747 1.06185 10.5072 1.06185 10.5072C1.06185 10.5072 1.23927 11.8101 1.7846 12.3838C2.47722 13.1372 3.38648 13.1136 3.79136 13.1921C5.24709 13.3375 9.97824 13.3824 9.97824 13.3824C9.97824 13.3824 13.8018 13.3765 16.3482 13.185C16.7036 13.1407 17.4793 13.1372 18.1713 12.3838C18.7167 11.8101 18.8946 10.5072 18.8946 10.5072C18.8946 10.5072 19.0766 8.97747 19.0766 7.44712V6.01248C19.0766 4.48272 18.8946 2.95237 18.8946 2.95237Z" fill="white"/>
              </svg>
            </Link>
        </Div2>
    </Footerdiv>   
  );
};

export default Footer;