import React, { useState } from 'react';
import Card from './Components/Card';



const App = () => {

  const cardContainerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  };



  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (artist.trim() === '' || song.trim() === '') {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (artist.trim().length < 3 || /^\s/.test(artist)) {
      setError('El artista debe tener al menos 3 caracteres y no debe comenzar con un espacio en blanco.');
      return;
    }

    if (song.trim().length < 6) {
      setError('La canción debe tener al menos 6 caracteres.');
      return;
    }

    setError('');
    setData({ artist, song });
  };

  return (
    <div style={cardContainerStyle}>
      <h1>Formulario de Música</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Artista: </label>
          <input value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
          <label>Canción: </label>
          <input value={song} onChange={(e) => setSong(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Card data={data} error={error} />
    </div>
  );
};

export default App;
