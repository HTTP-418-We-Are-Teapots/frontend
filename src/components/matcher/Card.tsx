// Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
    card: {
        id: number;
        name: string;
        flipped: boolean;
    };
    flipCard: () => void;
};

const Card: React.FC<CardProps> = ({ card, flipCard }) => {
    const variants = {
        front: { rotateY: -180 },
        back: { rotateY: 0 },
        hover: { scale: 1.1 } // Define a hover state
    };

    return (
        <motion.div
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={flipCard}
            variants={variants}
            whileHover='hover'
            animate={card.flipped ? 'back' : 'front'}
            transition={{ duration: 0.5 }}
        >
            {card.flipped ? card.name : ''}
        </motion.div>
    );
};

export default Card;
