const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export function fetchCharacterList() {
  return fetch(`${BASE_URL}`).then((resp) => resp.json());
}

export async function fetchCharacterInfo(id: string) {
  return fetch(`${BASE_URL}/${id}`).then((resp) => resp.json());
}
