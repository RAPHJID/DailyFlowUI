import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createJournal, getJournalById, updateJournal } from '../services/journalService';

function JournalForm() {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadEntry();
    }
  }, [id]);

  const loadEntry = async () => {
    const res = await getJournalById(id);
    setFormData(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateJournal(id, formData);
    } else {
      await createJournal(formData);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Journal' : 'New Journal'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Write your thoughts..."
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        required
      />
      <button type="submit">{id ? 'Update' : 'Save'}</button>
    </form>
  );
}

export default JournalForm;
