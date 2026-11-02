export const renderProfiles = (profiles) => {
  const profilesList = document.getElementById('players-list');

  if (profiles.length === 0) {
    profilesList.innerHTML = '<p class="text-gray-500 text-center">Aucun profil créé pour le moment.</p>';
    return;
  }

  profilesList.innerHTML = '';

  profiles.forEach((player) => {
    let avatarIcon = '';
    if (player.avatar === 'dragon') avatarIcon = '🐉';
    if (player.avatar === 'knight') avatarIcon = '🛡️';
    if (player.avatar === 'wizard') avatarIcon = '🧙‍♂️';

    profilesList.innerHTML += `
      <div class="flex items-center justify-between bg-white p-3 rounded shadow border border-gray-200">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${avatarIcon}</span>
          <div>
            <h3 class="font-bold text-gray-800">${player.nickname}</h3>
            <p class="text-xs text-gray-500">Date de création : ${player.createdAt}</p>
          </div>
        </div>
        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">0 parties</span>
      </div>
    `;
  });
};