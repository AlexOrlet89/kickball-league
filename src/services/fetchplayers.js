import { checkError, client } from './client';

export async function getPlayers() {
  const response = await client.from('players').select('*');
  // console.log(response);
  return checkError(response);
}
export async function getPlayersById(id) {
  const response = await client.from('players').select(`*, teams(*)`).match({ id: id }).single();
  // console.log(response);
  return checkError(response);
}
