    function initializeDeck(){
    const deck=[];
    const suits = ['hearts','diamonds','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for(let value of values.split(',')) {
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }

    }
    return deck;
} 

const myDeck = {
    deck:[],
    drawnCards: [],
    suits:['hearts','diamonds','spades','clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const {
            suits,
            values,
            deck
        } = this;
        for (suit of suits) { 
            for(value of values.split(',')) {
                deck.push({
                    suit,
                    value
                })

            }
        }
    },
    drawCard() {
        const card =this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for(let i = 0;i<numCards;i++ ){
           cards.push(this.drawCard());
        }
        return cards;
    }
    
        }
    
    



