export const createProfile = (nicknameValue, avatarValue) => {
    const newProfile = {
        id: "p_" + Date.now(),
        nickname: nicknameValue,
        avatar: avatarValue,
        createdAt: new Date().toISOString().split('T')[0]
    }
    return newProfile
}