export const cards = {
    EMPEREUR : 'EMPEREUR',
    CITOYEN : 'CITOYEN',
    ESCLAVE : 'ESCLAVE',
}
export function duel(playerCard, computerCard){
    if (playerCard === computerCard) {
    return 'egalite';
    }
    if (
        (playerCard === cards.EMPEREUR && computerCard === cards.CITOYEN) ||
        (playerCard === cards.CITOYEN && computerCard === cards.ESCLAVE) ||
        (playerCard === cards.ESCLAVE && computerCard === cards.EMPEREUR))
    {return 'victoire';}
    return 'defaite';
}

export function createHand(camp) {
    if (camp === 'EMPEREUR') {
        return [cards.CITOYEN, cards.CITOYEN, cards.CITOYEN, cards.CITOYEN, cards.EMPEREUR];
    }else{
        return [cards.CITOYEN, cards.CITOYEN, cards.CITOYEN, cards.CITOYEN, cards.ESCLAVE];
    }
}
export function getRandomCard(hand) {
    const randomIndex = Math.floor(Math.random() * hand.length)
    return {
        card: hand[randomIndex],
        index: randomIndex}
}
export function calculatePoints(result, camp) {
    if (result !== 'victoire') return 0
    return camp === 'EMPEREUR' ? 1 : 5
}