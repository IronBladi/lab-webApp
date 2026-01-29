import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../components/ProgressBar';

export default function Dashboard({ userId }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios.get(`/api/progress/${userId}`).then(res => setProgress(res.data));
  }, [userId]);

  return (
    <div>
      <h1>Mi progreso</h1>
      {progress.map(p => (
        <div key={p.course}>
          <h3>{p.course}</h3>
          <ProgressBar progress={p.progress} />
        </div>
      ))}
    </div>
  );
}
