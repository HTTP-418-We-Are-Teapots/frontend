// Ensemble des cartes du jeu : id permettant d'identifier les paires
// TODO ajouter d'autres cartes problématiques/solutions
const memoryObjects = [
    { id: 1, name: 'Pollution Numérique' },
    { id: 2, name: 'Actions individuels' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 1, name: 'Reconditionné' },
    { id: 2, name: 'Crédit carbonne' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
  ];
  
  let selectedCards = [];
  let matchedPairs = 0;
  
  const shuffledCards = memoryObjects.sort(() => Math.random() - 0.5); // Mélange des cartes
  
  const memoryBoard = document.getElementById('memory-board'); // Récupération du plateau de jeu 
  
  // Création des cartes après mélange
  shuffledCards.forEach(obj => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = obj.id;
    card.textContent = obj.name;
    card.addEventListener('click', flipCard);
    memoryBoard.appendChild(card);
  });
  
  function flipCard() { // Sélection des cartes
    if (selectedCards.length < 2 && !this.classList.contains('flipped')) {
      this.classList.add('flipped');
      selectedCards.push(this);
  
      if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }
  
  function checkMatch() { // Vérification des paires
    const [card1, card2] = selectedCards;
    const id1 = card1.dataset.id;
    const id2 = card2.dataset.id;
  
    if (id1 === id2) { // Si les cartes ont le même id alors on les laisse retournées 
      card1.removeEventListener('click', flipCard);
      card2.removeEventListener('click', flipCard);
      card1.classList.add('flipped'); 
      card2.classList.add('flipped');
      matchedPairs++;
  
      if (matchedPairs === memoryObjects.length / 2) { // Si on trouve toutes les paires 
        alert('Félicitations, vous avez gagné !');
      }
    } else { // Sinon on les retourne
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }
  
    selectedCards = [];
  }
  