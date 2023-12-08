import './App.css';
import Header from "./components/landing/Header.tsx";
import Prevent from './prevention/prevent.tsx';

function App() {

const sectionsData = [
  {
      title: 'First Title',
      description: 'This is the first description.',
      image: "./assets/react.svg"
  },
  {
      title: 'Second Title',
      description: 'This is the second description.',
      image: "./assets/react.svg"
  },
  // Add more sections as needed
];
  return (
    <div className='container'>
        <Header />
        <Prevent sections={sectionsData} />
    </div>

  )
}

export default App
