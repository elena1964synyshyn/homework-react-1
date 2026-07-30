import { useState } from 'react';

const TodoForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      checked: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '12px' }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Заголовок"
        style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Опис"
        style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
      />
      <div>
        <button type="submit">Додати</button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={{ marginLeft: '8px' }}>
            Скасувати
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
