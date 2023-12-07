
import './App.css'
import Prevent from './prevention/prevent'
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
    <div>
<Prevent sections={sectionsData} />
   

     
    
    </div>
  )
}

export default App
