import Header from './components/landing/Header';

import Prevent from './prevention/Prevent';

import './App.css';

function App() {

    const sectionsData = [
        {
            title: 'First Title',
            description: 'This is the first description.',
            image: './assets/react.svg',
        },
        {
            title: 'Second Title',
            description: 'This is the second description.',
            image: './assets/react.svg',
        },
        // Add more sections as needed
    ];
    return (
        <div className="container">
            <Header/>
            <Prevent sections={ sectionsData } destination={ '/games/geoGuessr' }/>
        </div>

    );
}

export default App;
