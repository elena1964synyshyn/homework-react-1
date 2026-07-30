const ErrorMessage = ({ message, onClose }) => (
  <div
    style={{
      background: '#ffeaea',
      color: '#c0392b',
      border: '1px solid #f5b7b1',
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <span>{message}</span>
    {onClose && (
      <button onClick={onClose} style={{ marginLeft: '10px' }}>
        ×
      </button>
    )}
  </div>
);

export default ErrorMessage;
