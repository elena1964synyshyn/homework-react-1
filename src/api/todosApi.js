const BASE_URL = 'http://localhost:3000/todos';

export const getTodos = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Не вдалося отримати todo');
  return response.json();
};

export const getTodoById = async id => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Не вдалося отримати todo');
  return response.json();
};

export const addTodo = async todo => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error('Не вдалося створити todo');
  return response.json();
};

export const updateTodo = async (id, todo) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error('Не вдалося оновити todo');
  return response.json();
};

export const deleteTodo = async id => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Не вдалося видалити todo');
  return response.json();
};