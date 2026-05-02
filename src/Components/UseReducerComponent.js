import { useReducer, useState } from 'react';

const initialState = { name: '', lastName: '', birthYear: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'lastName':
      return { ...state, lastName: action.payload };
    case 'birthYear':
      return { ...state, birthYear: action.payload };
    default:
      return state;
  }
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputs, setInputs] = useState({
    name: '',
    lastName: '',
    birthYear: '',
  });

  return (
    <div>
      <h2>Форма</h2>
      <input
        value={inputs.name}
        onChange={e => setInputs({ ...inputs, name: e.target.value })}
        placeholder="Імʼя"
      />
      <button onClick={() => dispatch({ type: 'name', payload: inputs.name })}>
        Імʼя
      </button>
      <br />
      <input
        value={inputs.lastName}
        onChange={e => setInputs({ ...inputs, lastName: e.target.value })}
        placeholder="Прізвище"
      />
      <button
        onClick={() => dispatch({ type: 'lastName', payload: inputs.lastName })}
      >
        Прізвище
      </button>
      <br />
      <input
        value={inputs.birthYear}
        onChange={e => setInputs({ ...inputs, birthYear: e.target.value })}
        placeholder="Рік народження"
      />
      <button
        onClick={() =>
          dispatch({ type: 'birthYear', payload: inputs.birthYear })
        }
      >
        Рік народження
      </button>
      <br />
      <p>{JSON.stringify(state)}</p>
    </div>
  );
}

export default UseReducerComponent;
