import { useNavigate } from 'react-router-dom';

import styles from './prevent.module.scss';
import nextButton from '../assets/play.png';

interface Section {
    title: string;
    description: string;
}

interface PreventProps {
    sections: Section[];
    destination: string;
}

const Prevent = ({ sections, destination }: PreventProps) => {
    const navigate = useNavigate();

    return (
        <div className={ styles.container }>
            <h1>Message de prévention</h1>
            <div className={ styles.sectionContainer }>
                { sections.map((section, index) => (
                    <div key={ index }>
                        <div>
                            <h2 style={{ marginBottom: '10px' }}>{ section.title }</h2>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{ section.description }</p>
                        </div>
                    </div>
                )) }
            </div>
            <button onClick={() => navigate(destination)}>
                <img src={ nextButton }/>
            </button>
        </div>
    );
};

export default Prevent;
