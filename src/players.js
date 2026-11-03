export const createProfile = (nicknameValue, avatarValue) => {
    const newProfile = {
        id: "p_" + Date.now(),
        nickname: nicknameValue,
        avatar: avatarValue,
        createdAt: new Date().toISOString().split('T')[0]
    }
    return newProfile}
export const deleteProfile = (profiles, id) => {
  return profiles.filter((p) => p.id !== id);
};
export const updateProfile = (profiles, id, nickname, avatar) => {
  return profiles.map((p) => (p.id === id ? { ...p, nickname, avatar } : p));
};