export const renderProfiles = (profiles) => {
  const profilesList = document.getElementById('players-list');

  if (profiles.length === 0) {
    profilesList.innerHTML = '<p class="text-gray-500 text-center">Aucun profil créé pour le moment.</p>';
    return}

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
        <div class="flex flex-wrap items-center gap-2">         
        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">0 parties</span>
          <button class="play-btn text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700" data-id="${player.id}">
            Jouer
          </button>
          <button class="edit-btn text xs bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600" data-id="${player.id}">
          modifier
          </button>
          <button class="delete-btn text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" data-id="${player.id}">
          Supprimer
          </button>
        </div>
      </div>`;
  });
}
export function showsection(sectionName) {
  const sections = {
    profiles : document.getElementById('section-profiles'),
    game : document.getElementById('section-game'),
    history : document.getElementById('section-history')
  }
  const button = {
    profiles : document.getElementById('nav-profiles'),
    game : document.getElementById('nav-game'),
    history : document.getElementById('nav-history')
  }
object.keys(sections).forEach((key) => {
    if (key === sectionName) {
      sections[key].classList.remove('hidden');
    }else{
      section[key].classList.add('hidden')
    }
  })}