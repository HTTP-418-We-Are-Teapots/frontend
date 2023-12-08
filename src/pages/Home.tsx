import { useNavigate } from 'react-router-dom';

import title from '../assets/illustrations/TITRE.png';
import man from '../assets/illustrations/bonhomme_noel_content.png';

import '../assets/style/landing.scss';

const Body = () => {
    const navigate = useNavigate();

    return (
        <div className="body">
            <div className="title_container">
                <img src={ title }/>
            </div>
            <div className="img_man">
                <img src={ man }/>
            </div>
            <div className="buttonsContainer">
                <div className="banquise" onClick={() => navigate('/games/right-price-problem')}>
                    <p>
                        La banquise elle fond et les ours ils meurent parce qu'ils peuvent plus manger et vivre sur leur banquise
                    </p>
                </div>
                <div className="planete" onClick={() => navigate('/games/geoGuessr')}>
                    <p>
                        Y'a pas de planète B
                    </p>
                </div>
                <div className="reflet" onClick={() => navigate('/games/right-price-solution')}>
                    <p>
                        Bientôt, même votre reflet va fondre à cause du réchauffement climatique
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Body;
