import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJournalById } from '../services/journalService';

function JournalView() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      const res = await getJournalById(id);
      setEntry(res.data);
    };
    fetchEntry();
  }, [id]);

  if (!entry) return <p>Loading...</p>;

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
      <small>{new Date(entry.dateCreated).toLocaleString()}</small>
      <div>
        <Link to={`/edit/${entry.id}`}>Edit</Link> | <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default JournalView;
