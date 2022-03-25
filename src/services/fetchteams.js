import { checkError, client } from './client';

export async function getTeams() {
  const response = await client.from('teams').select('*');
  // console.log(response);
  return checkError(response);
}
export async function getTeamsById(id) {
  const response = await client.from('teams').select(`*, players(*)`).match({ id: id }).single();
  // console.log(response);
  return checkError(response);
}
