export const getProfiles = () => {
    return JSON.parse(localStorage.getItem('profiles')) || [];
}
export const saveProfiles = (profiles) => {
    localStorage.setItem('profiles', JSON.stringify(profiles))
}
export const getCurrentPlayerId = () => {
    return localStorage.getItem('currentPlayerId')
}
export const saveCurrentPlayerId = (id) => {
    if (id) {
        localStorage.setItem('currentPlayerId', id);
    } else {
        localStorage.removeItem('currentPlayerId');
    }
}