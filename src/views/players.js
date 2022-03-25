import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../services/fetchplayers';
import './players.css';

export default function Players() {
  const [players, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayer(data);
      setLoading(false);
      // console.log('players data', data);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loader"> Loading Player...</div>;

  return (
    <div>
      <div>This Years Players </div>
      <div>
        {players.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>
            <p key={player.id}>{player.name}</p>
          </Link>
        ))}{' '}
      </div>
      <p>
        Click <a href="/team">Here</a> to check out the Teams
      </p>
    </div>
  );
}
