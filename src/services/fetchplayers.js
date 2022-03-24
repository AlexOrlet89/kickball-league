import { checkError, client } from './client';

export async function getPlayers() {
  const response = await client.from('players').select('*');
  console.log(response);
  return checkError(response);
}
