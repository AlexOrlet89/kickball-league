import './Teamdetail.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeamsById } from '../services/fetchteams';

export default function TeamDetail() {
  const params = useParams();
  const [team, setTeamDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamsById(params.id);
      setTeamDetail(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <div className="loader"> Loading Team...</div>;

  // console.log(team);
  // console.log(params.id);
  return (
    <div>
      <p>
        Click <a href="/team">Here</a> to return to the Teams
      </p>
      <h2>
        The {team.name} from {team.city}, {team.state}
      </h2>
      <h4>Players</h4>
      <div className="lineup">
        <div className="teamplayers">
          {team.players.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <p key={player.id}>{player.name}</p>
            </Link>
          ))}
        </div>
        <div className="teampositions">
          {team.players.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <p key={player.id}>{player.position}</p>
            </Link>
          ))}
        </div>
      </div>
      <p>
        Click <a href="/team">Here</a> to return to the Teams
      </p>
    </div>
  );
}
