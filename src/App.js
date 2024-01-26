import './App.css';
import { Courses } from './components/Courses/Courses';
import { Info } from './components/Info/Info';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Info />
      <Courses />
    </div>
  );
}

export default App;
