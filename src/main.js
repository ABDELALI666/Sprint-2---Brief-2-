import { createProfile } from './players.js';
import { getProfiles, saveProfiles } from './storage.js';
import { renderProfiles } from './ui.js';

const profileForm = document.getElementById('profile-form');
const nicknameInput = document.getElementById('nickname');
const avatarSelect = document.getElementById('avatar');
const errorMsg = document.getElementById('error-message');

renderProfiles(getProfiles());

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nickname = nicknameInput.value.trim();
  const avatar = avatarSelect.value;
  const regex = /^[A-Za-z0-9]{3,15}$/;

  if (!regex.test(nickname)) {
    errorMsg.textContent = "desole, doit contenir entre 3 et 15 caractères et pas de symboles.";
    errorMsg.classList.remove('hidden');
    return;}

  const profiles = getProfiles();
  const isDuplicate = profiles.some(
    p => p.nickname.toLowerCase() === nickname.toLowerCase())

  if (isDuplicate) {
    errorMsg.textContent = "desole, ce pseudo est deja pris. Choisis un autre.";
    errorMsg.classList.remove('hidden');
    return;
  }
  errorMsg.classList.add('hidden');

  const newPlayer = createProfile(nickname, avatar);
  profiles.push(newPlayer);
  saveProfiles(profiles);
  renderProfiles(profiles);

  nicknameInput.value = '';
});
