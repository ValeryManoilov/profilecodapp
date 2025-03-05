import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FF7373;
    box-sizing: border-box;
`


export const StadyContainer = styled.div`
    width: 100%;
    height: 100vh;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.stady == "wait" ? "yellow" : "#FF7373")};
`

export const StadyTextContainer = styled.h1`
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.stady == "wait" ? "yellow" : "#FF7373")};
    font-size: 1.5em;
`


const StadyAppPage = (props) => 
{
    return(
        <Container>
            {
                props.stady == "Wait"
                ?
                <StadyContainer stady="wait">
                    <StadyTextContainer stady="wait">
                        Ваша заявка на проверке
                    </StadyTextContainer>
                </StadyContainer>
                :
                <StadyContainer stady="reject">
                    <StadyTextContainer stady="reject">
                        Ваша заявка отклонена
                    </StadyTextContainer>
                </StadyContainer>
            }
        </Container>
    )
}

export default StadyAppPage;