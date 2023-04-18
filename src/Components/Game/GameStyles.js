import styled from "styled-components";
import quizbg from "../../Assets/Images/quizbg.jpg";
const GameContainer = styled.div`
  display: flex;

  justify-content: center;

  background-image: url(${quizbg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  height: 100vh;
`;
const GameElements = styled.div``;
const GameQuestion = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  padding-bottom: 2rem;
  font-weight: bold;
  text-shadow: 2px 0px 1px rgba(51, 51, 51, 1);
  height: 2rem;
`;
const GameOptions = styled.button`
  width:30rem;
  height: 3rem;
  background: none;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid white;
  color: #fff;
  font-size: 1.5rem;

  text-shadow: 2px 0px 1px rgba(51, 51, 51, 1);
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const GameTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const GameOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 1rem;
  gap: 2rem;
`;

const QuestionInfoHeadings = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 0px 1px rgba(51, 51, 51, 1);

  
`;
const QuestionInfoDataTitles = styled.h4`
  color: #fff;
  text-align: center;

  font-weight: bold;
  text-shadow: 2px 0px 1px rgba(51, 51, 51, 1);
 
`;

const QuestionInfoHeadingsContainer = styled.div`
display: flex;
flex-direction:row;
gap: 1rem;
`;

export {
  GameContainer,
  GameElements,
  GameQuestion,
  GameOptions,
  GameTitleContainer,
  GameOptionsContainer,
  QuestionInfoHeadings,
  QuestionInfoDataTitles,
  QuestionInfoHeadingsContainer
};
