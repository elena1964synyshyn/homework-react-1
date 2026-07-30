import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoById, editTodo, clearEditingTodo } from '../store/todosSlice';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const EditTodoModal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const { editingTodo, loading, error } = useSelector(state => state.todos);
  const [localTodo, setLocalTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodoById(id));
    return () => dispatch(clearEditingTodo());
  }, [dispatch, id]);

  useEffect(() => {
    if (editingTodo) setLocalTodo(editingTodo);
  }, [editingTodo]);

  const handleChange = (field, value) => {
    setLocalTodo(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    dispatch(editTodo({ id, todo: localTodo }));
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '400px' }}>
        <h3>Редагувати todo</h3>

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {localTodo && !loading && (
          <>
            <input
              value={localTodo.title || ''}
              onChange={e => handleChange('title', e.target.value)}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <textarea
              value={localTodo.description || ''}
              onChange={e => handleChange('description', e.target.value)}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <label style={{ display: 'block', marginBottom: '12px' }}>
              <input
                type="checkbox"
                checked={Boolean(localTodo.checked)}
                onChange={e => handleChange('checked', e.target.checked)}
              />{' '}
              Виконано
            </label>
            <button onClick={handleSave}>Зберегти</button>
            <button onClick={onClose} style={{ marginLeft: '8px' }}>
              Закрити
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditTodoModal;
