import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../services/fetchteams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      // console.log('teams data', data);
    };
    fetchData();
  }, []);
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
    </div>
  );
}
