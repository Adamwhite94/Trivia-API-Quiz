import React, { useState, useEffect } from "react";
import {
  GameContainer,
  GameElements,
  GameQuestion,
  GameOptions,
  GameTitleContainer,
  GameOptionsContainer,
  QuestionInfoHeadings,
  QuestionInfoDataTitles,
  QuestionInfoHeadingsContainer,
} from "./GameStyles";

const getQuestions = async () => {
  const response = await fetch(
    "https://the-trivia-api.com/api/questions?limit=10"
  );
  const questions = await response.json();
  return questions;
};

//this needs to be handled based on what is entered from the form

function Game() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const remainingNumberOfQuestions = questions.length - currentQuestionIndex;
  const [game, showGame] = useState(true);
  const [endscore, showEndScore] = useState(false);

  useEffect(() => {
    getQuestions().then((res) => setQuestions(res));
   

  },[]);

  const clickHandler = ()=>{
    setCurrentQuestionIndex(currentQuestionIndex+1);

    if(remainingNumberOfQuestions ===0){
      showGame(false);
      showEndScore(true);
    }
  }

  const clickHandlerCorrect = ()=>{
    setCurrentQuestionIndex(currentQuestionIndex+1);

    if(questions[currentQuestionIndex]?.correctAnswer){
      setScore(score+1);
    }
    if(remainingNumberOfQuestions ===0){
      showGame(false);
      showEndScore(true);
    }
  }

  return (
    <GameContainer>
    {game?  <GameElements>
        <GameTitleContainer>
          <GameQuestion>{questions[currentQuestionIndex]?.question}</GameQuestion>
          <QuestionInfoHeadingsContainer>
          <QuestionInfoHeadings>Total Questions</QuestionInfoHeadings>
          <QuestionInfoDataTitles>{questions.length}</QuestionInfoDataTitles>
          <QuestionInfoHeadings>Current Score</QuestionInfoHeadings>
          <QuestionInfoDataTitles>{score}</QuestionInfoDataTitles>
          <QuestionInfoHeadings>Questions Remaining</QuestionInfoHeadings>
          <QuestionInfoDataTitles>{remainingNumberOfQuestions}</QuestionInfoDataTitles>
          </QuestionInfoHeadingsContainer>
        </GameTitleContainer>

        <GameOptionsContainer>
          {questions[currentQuestionIndex]?.incorrectAnswers.map((question)=>{
            return(
         
              <GameOptions onClick={()=>clickHandler()} key={question.id}>{question}</GameOptions>
           
        
            )
          })}
             <GameOptions onClick={()=>clickHandlerCorrect()}>{questions[currentQuestionIndex]?.correctAnswer}</GameOptions>
        </GameOptionsContainer>
      </GameElements>:null}

          {endscore?
            <GameElements>
                <QuestionInfoHeadings>Your Score is {score}</QuestionInfoHeadings>
            </GameElements>:null}
    </GameContainer>
  );
}

export default Game;
