import styles from './prevent.module.scss';
interface Section {
    title: string;
    description: string;
    image : string;
}

interface PreventProps {
    sections: Section[];
}

import nextButton from "../assets/play.png"

const Prevent = ({ sections }: PreventProps) => {
    return (
        <div className = {styles.container}>
            <h1>Message de prévention</h1>
            {sections.map((section, index) => (
                <div key={index}>
                   <div>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                    </div>
                </div>
            ))}
            <button><img src={nextButton} /></button>
        </div>
    );
}

export default Prevent;
