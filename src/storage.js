const players_key = 'mce_player'
const active_player_key = 'mce_active_player'
const history_key = 'mce_history'

function getStoredPlayers(){
    const data = localStorage.getItem(players_key)
    return data ?JSON.parse(data): []
}
function savePlayers(players){
    localStorage.setItem(players_key, JSON.stringify(players))
}
function getActivePlayerId(){
    return localStorage.setItem(active_player_key)
}
function saveActivePlayerId(id){
    localStorage.setItem(active_player_key, id)   l
}
function getStoredhistory(){
    const data = localStorage.getItem(history_key)
    return data ? JSON.parse(data):[]
}