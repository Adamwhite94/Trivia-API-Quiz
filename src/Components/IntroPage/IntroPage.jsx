import React, {useState, useMemo} from "react";
import {
  IntroPageContainer,
  IntroPageElements,
  IntroPageForm,
  IntroPageTitle,
  IntroPageButton,
  IntroPageSelect,
  IntroLabel,

} from "./IntroPageStyles";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useNavigate } from "react-router-dom";


function IntroPage() {
    let navigate = useNavigate();
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    
  const changeHandler = value => {
    setValue(value);
  }

  const clickHandler = (e)=>{
    e.preventDefault();
    navigate('/quiz');
  }

  return (
    <IntroPageContainer>
      <IntroPageElements>
  
        <IntroPageForm>
          <IntroPageTitle>QuizSmash</IntroPageTitle>
          <IntroLabel htmlFor="category">Which Category?</IntroLabel>
          <IntroPageSelect id = 'Category'>
            <option>Arts & Literature</option>
            <option>Film & TV</option>
            <option>Food & Drink</option>
            <option>General Knowledge</option>
            <option>Geography</option>
            <option>History</option>
            <option>Music</option>
            <option>Science</option>
            <option>Society & Culture</option>
            <option>Sport & Leisure</option>
          </IntroPageSelect>
          <IntroLabel htmlFor="difficulty">Select Your Difficulty</IntroLabel>
          <IntroPageSelect id = 'difficulty'>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </IntroPageSelect>
          <IntroLabel id="questionsnum">How Many Questions? (Max 20)</IntroLabel>
          <IntroPageSelect id = 'questionsnum'>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </IntroPageSelect>
          <IntroLabel htmlFor="region">What Region Are You From?</IntroLabel>
          <Select options = {options} value = {value} onChange = {changeHandler} id = 'region' />
          <IntroPageButton onClick = {(e)=>clickHandler(e)}type="submit">Start The Quiz</IntroPageButton>
        </IntroPageForm>
 
      </IntroPageElements>
    </IntroPageContainer>
  );
}

export default IntroPage;
