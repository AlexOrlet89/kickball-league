import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../services/fetchteams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);

      // console.log('teams data', data);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loader"> Loading Teams...</div>;

  return (
    <div>
      <h2>THE TEAMS</h2>
      <div>
        {' '}
        {teams.map((team) => (
          <Link key={team.id} to={`/team/${team.id}`}>
            <p key={team.id}>{team.name}</p>
          </Link>
        ))}{' '}
      </div>
      <p>
        Click <a href="/player">Here</a> to check out the Players
      </p>
    </div>
  );
}
