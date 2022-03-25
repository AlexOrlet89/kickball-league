import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamsById } from '../services/fetchteams';

export default function TeamDetail() {
  const params = useParams();
  const [team, setTeamDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamsById(params.id);
      setTeamDetail(data);
    };
    fetchData();
  }, []);
  console.log(team);
  console.log(params.id);
  return <div>teamDetail</div>;
}
