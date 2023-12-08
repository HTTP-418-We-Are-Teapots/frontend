import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // If you're using React Router for navigation
import '../assets/style/games.scss';

const Games = () => {
    const navigate = useNavigate();

    const games = [
        { name: 'Card 1', url: '/game1' },
        { name: 'Card 2', url: '/game2' },
        { name: 'Card 3', url: '/game3' },
        { name: 'Card 4', url: '/game4' },
    ];

    const hoverEffect = {
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"
    };

    const handleClick = (url : string) => {
        navigate(url); // Navigate to the game's page
    };

    return (
        <div>
            <div className="cards">
                {games.map(game => (
                    <motion.div 
                        key={game.name}
                        className="card" 
                        whileHover={hoverEffect} 
                        onClick={() => handleClick(game.url)}
                    >
                        <p>
                        {game.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Games;
