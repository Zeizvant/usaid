import './App.css';
import { Courses } from './components/Courses/Courses';
import { Faq } from './components/Faq/Faq';
import { Info } from './components/Info/Info';
import { NavBar } from './components/NavBar/NavBar';
import { MyProvider } from './state/Context';
import {Footer} from './components/Footer/Footer'
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <NavBar />
        <Info />
        <Courses />
        <Slider />
        <Faq />
        <Footer />
      </MyProvider>
    </div>
  );
}

export default App;
