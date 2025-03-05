import styled from "styled-components";

export const StadyContainer = styled.div`
    width: 100%;
    background-color: #2384E3;
    
`

export const FirstRect = styled.div`
    width: 60vw;
    height: 60vh;
    opacity: 0.4;
    background-color: ${(props) => (props.stady == "wait" ? "yellow" : "red")};
`

export const StadyTextContainer = styled.div`
    width: 30vw;
    height: 30vh;
    opacity: 0.7;
    background-color: ${(props) => (props.stady == "wait" ? "yellow" : "red")};
`


const StadyAppPage = (props) => 
{
    return(
        <div>
            {
                props.stady == "Wait"
                ?
                <StadyContainer stady="wait">
                    <FirstRect stady="wait">
                        <StadyTextContainer stady="wait">
                            Заявка на проверке
                        </StadyTextContainer>
                    </FirstRect>
                </StadyContainer>
                :
                <StadyContainer stady="reject">
                    <FirstRect stady="reject">
                        <StadyTextContainer stady="reject">
                            Заявка на проверке
                        </StadyTextContainer>
                    </FirstRect>
                </StadyContainer>
            }
        </div>
    )
}

export default StadyAppPage;