const Card = ({ data, error }) => {
  const cardContainerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={cardContainerStyle}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>Información ingresada:</h2>
          <p>Artista: {data.artist}</p>
          <p>Canción: {data.song}</p>
        </div>
      )}
    </div>
  );
};

export default Card;


