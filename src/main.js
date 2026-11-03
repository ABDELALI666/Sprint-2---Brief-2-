import { createProfile, deleteProfile, updateProfile } from './players.js';
import { getProfiles, saveProfiles, getCurrentPlayerId, saveCurrentPlayerId } from './storage.js';
import { renderProfiles } from './ui.js';

const profileForm = document.getElementById('profile-form');
const nicknameInput = document.getElementById('nickname');
const avatarSelect = document.getElementById('avatar');
const errorMsg = document.getElementById('error-message');
const playerIdInput = document.getElementById('player-id');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const activePlayerName = document.getElementById('active-player-name');

const showError = (message) => {
  errorMsg.textContent = message;
  errorMsg.classList.remove('hidden');
};

const resetForm = () => {
  profileForm.reset();
  playerIdInput.value = '';
  formTitle.textContent = 'Créer un Profil';
  submitBtn.textContent = 'Créer';
  cancelBtn.classList.add('hidden');
  errorMsg.classList.add('hidden');
};

const showActivePlayer = () => {
  const player = getProfiles().find((p) => p.id === getCurrentPlayerId());
  activePlayerName.textContent = player ? player.nickname : 'Aucun';
};

const showProfiles = (profiles) => {
  renderProfiles(profiles);

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;

      if (!confirm('Supprimer ce profil ?')) return;

      const updated = deleteProfile(getProfiles(), id);
      saveProfiles(updated);
      if (getCurrentPlayerId() === id) saveCurrentPlayerId(null);
      showProfiles(updated);
      if (playerIdInput.value === id) resetForm();
    
    });
  });

  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const profile = getProfiles().find((p) => p.id === button.dataset.id);

      playerIdInput.value = profile.id;
      nicknameInput.value = profile.nickname;
      avatarSelect.value = profile.avatar;

      formTitle.textContent = 'Modifier le profil';
      submitBtn.textContent = 'Enregistrer';
      cancelBtn.classList.remove('hidden');
      errorMsg.classList.add('hidden');
    });
  });

    const playButtons = document.querySelectorAll('.play-btn');
  playButtons.forEach((button) => {
    button.addEventListener('click', () => {
      saveCurrentPlayerId(button.dataset.id);
      showActivePlayer();
    });
  });

  showActivePlayer();
};

showProfiles(getProfiles());
cancelBtn.addEventListener('click', resetForm);

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = playerIdInput.value;
  const nickname = nicknameInput.value.trim();
  const avatar = avatarSelect.value;
  const regex = /^[A-Za-z0-9]{3,15}$/;

  if (!regex.test(nickname)) {
    showError("Désolé, le pseudo doit contenir 3 à 15 caractères, sans symboles.");
    return;
  }

  if (avatar === 'acun') {
    showError("Choisis un avatar dans la liste.");
    return;
  }

  const profiles = getProfiles();
  const isDuplicate = profiles.some(
    (p) => p.id !== id && p.nickname.toLowerCase() === nickname.toLowerCase()
  );

  if (isDuplicate) {
    showError("Désolé, ce pseudo est déjà pris. Choisis-en un autre.");
    return;
  }

  let updated;
  if (id) {
    updated = updateProfile(profiles, id, nickname, avatar);
  } else {
    updated = [...profiles, createProfile(nickname, avatar)];
  }

  saveProfiles(updated);
  showProfiles(updated);
  resetForm();
});