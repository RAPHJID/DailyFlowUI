import React, { useEffect, useState } from 'react';
import { getAllJournals, deleteJournal } from '../services/journalService';
import { Link } from 'react-router-dom';

function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    loadJournals();
  }, []);

  const loadJournals = async () => {
    const res = await getAllJournals();
    setJournals(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this entry?")) {
      await deleteJournal(id);
      loadJournals();
    }
  };

  return (
    <div>
      <Link to="/add" className="btn">Add Entry</Link>
      <ul>
        {journals.map((j) => (
          <li key={j.id}>
            <strong>{j.title}</strong> <br />
            <small>{new Date(j.dateCreated).toLocaleDateString()}</small>
            <div>
              <Link to={`/view/${j.id}`}>View</Link> |{" "}
              <Link to={`/edit/${j.id}`}>Edit</Link> |{" "}
              <button onClick={() => handleDelete(j.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalList;
