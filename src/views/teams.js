import React, { useEffect, useState } from 'react';
import { getTeams } from '../services/fetchteams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      console.log('teams data', data);
    };
    fetchData();
  }, []);
  return <div>Teams</div>;
}
