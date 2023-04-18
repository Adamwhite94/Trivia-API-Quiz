import styled from "styled-components";



const IntroPageContainer = styled.div`
  
`;
const IntroPageElements = styled.div`
background-image: url(${require(`../../Assets/Images/quizbg4.jpg`)});
  background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 



`;
const IntroPageForm = styled.form`
display:flex;
flex-direction: column;


height: 100vh;

align-items: center;
justify-content: center;
flex-direction: column;
/* background: #41295a;  
background: -webkit-linear-gradient(to right, #2F0743, #41295a);  
background: linear-gradient(to right, #2F0743, #41295a);  */
background: none;
gap: 0.8rem;


`;

const IntroPageTitle = styled.h1`
color: #fff;
text-align: center;
font-size: 5rem;
height: 5rem;
font-weight: bold;
`;
const IntroPageButton = styled.button`
background-color: black;
color: #fff;
width: 8rem;
height:3rem;
border: none;
margin-top: 2rem;
letter-spacing: 1px;
  font-weight: 500;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
&:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

`;

const IntroPageSelect = styled.select`
width: 25.5rem;
height: 2rem;
`;
const IntroPageOption = styled.option``;


const IntroLabel = styled.label`
color: #fff;
`;




export{
    IntroPageButton,
    IntroPageContainer,
    IntroPageElements,
    IntroPageForm,
    IntroPageTitle,
    IntroPageSelect,
    IntroPageOption,
    IntroLabel,
 

}
