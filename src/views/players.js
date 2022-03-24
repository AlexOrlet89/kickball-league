import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../services/fetchplayers';

export default function Players() {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayer(data);
      console.log('players data', data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>This Years Players </div>
      <div>
        <Link>
          {players.map((player) => (
            <p key={player.id}>{player.name}</p>
          ))}{' '}
        </Link>
      </div>
    </div>
  );
}
