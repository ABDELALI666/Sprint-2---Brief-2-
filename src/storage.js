export const getProfiles = () => {
    const data = localStorage.getItem('profiles')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}
export const saveProfiles = (profiles) => {
    localStorage.setItem('profiles', JSON.stringify(profiles))
}
