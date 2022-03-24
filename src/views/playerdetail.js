import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayersById } from '../services/fetchplayers';

export default function PlayerDetail() {
  const params = useParams();
  const [player, setPlayerDetail] = useState(null);
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(params.id);
      setPlayerDetail(data);
    };
    fetchData();
  }, []);

  console.log(player);

  return (
    <div>
      <h3>{player.name}</h3>
      <h2>{player.position}</h2>
      <h3>
        {player.teams.name} from {player.teams.city}, {player.teams.state}
      </h3>
    </div>
  );
}
