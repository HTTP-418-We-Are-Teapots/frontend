import React, { useState, useEffect } from 'react';
import Card from './Card';
import './MemoryGame.css'; // Make sure to create and link your CSS file

type MemoryCard = {
    id: number;
    name: string;
    flipped: boolean;
};

const MemoryGame: React.FC = () => {
    const initialCards: MemoryCard[] = [
        { id: 1, name: 'Émissions de CO2', flipped: false },
    { id: 1, name: 'Énergies renouvelables', flipped: false },
    { id: 2, name: 'Déforestation', flipped: false },
    { id: 2, name: 'Reforestation', flipped: false },
    { id: 3, name: 'Surconsommation', flipped: false },
    { id: 3, name: 'Consommation responsable', flipped: false },
    { id: 4, name: 'Pollution plastique', flipped: false },
    { id: 4, name: 'Recyclage', flipped: false },
    { id: 5, name: 'Perte de biodiversité', flipped: false },
    { id: 5, name: 'Conservation des espèces', flipped: false },
    { id: 6, name: 'Gaspillage alimentaire', flipped: false },
    { id: 6, name: 'Compostage', flipped: false },
    ];

    const [cards, setCards] = useState<MemoryCard[]>([]);
    const [selectedCard, setSelectedCard] = useState<MemoryCard | null>(null);
    const [canFlip, setCanFlip] = useState<boolean>(true);
    const [matchedPairs, setMatchedPairs] = useState<number>(0);

    useEffect(() => {
        setCards(shuffleCards([...initialCards]));
    }, []);

    useEffect(() => {
        console.log(matchedPairs)
        if (matchedPairs === initialCards.length / 2) {
            alert('Congratulations! You have won!');
        }
    }, [matchedPairs]);


    const shuffleCards = (cards: MemoryCard[]): MemoryCard[] => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    };

    const flipCard = (cardToFlip: MemoryCard) => {
        if (!canFlip || cardToFlip.flipped) return;

        const newCards = cards.map(card => 
            card.id === cardToFlip.id && card.name === cardToFlip.name
                ? { ...card, flipped: true }
                : card
        );
        setCards(newCards);

        if (!selectedCard) {
            setSelectedCard(cardToFlip);
        } else {
            
            setCanFlip(false);
            setTimeout(() => checkMatch(cardToFlip, selectedCard), 1000);
        }
    };

    const checkMatch = (cardToCheck: MemoryCard, previousCard: MemoryCard) => {
        if (cardToCheck.id === previousCard.id && cardToCheck.name !== previousCard.name) {
            setMatchedPairs(current => current + 1);
            setCanFlip(true);

        } else {
            const newCards = cards.map(card =>
                card.id === cardToCheck.id || card.id === previousCard.id 
                ? { ...card, flipped: false }
                : card
                );
                setCards(newCards);
            setCanFlip(true);
        }
        setSelectedCard(null);
    };

    return (
        <div id="memory-board">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    card={card}
                    flipCard={() => flipCard(card)}
                />
            ))}
        </div>
    );
};

export default MemoryGame;
