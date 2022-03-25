import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayersById } from '../services/fetchplayers';

export default function PlayerDetail() {
  const params = useParams();
  const [player, setPlayerDetail] = useState({});
  const [loading, setLoading] = useState(true);
  //   console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(params.id);
      setPlayerDetail(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h1> Loading Player...</h1>;
  //   console.log(player);

  return (
    <div>
      <p>
        Click <a href="/player">Here</a> to return to the Players
      </p>
      <p>
        Return to the <a href={`/team/${player.teams.id}`}>{player.teams.name}</a>
      </p>
      <h3>{player.name}</h3>
      <h2>{player.position}</h2>
      <h3>
        {player.teams.name} from {player.teams.city}, {player.teams.state}
      </h3>
    </div>
  );
}
