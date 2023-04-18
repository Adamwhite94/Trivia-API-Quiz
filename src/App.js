import IntroPage from "./Components/IntroPage/IntroPage";
import Game from "./Components/Game/Game";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <IntroPage />} />
      <Route path="/quiz" element={<Game />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
