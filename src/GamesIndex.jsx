export function GamesIndex(props) {
  const handleSubmit = (game) => {
    const params = { game_id: game.id };
    props.onCreateFavorite(params);
  };
  return (
    <div>
      <h1>All Games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.url} />
          <p>Name: {game.name}</p>
          <p>Image_url: {game.image_url}</p>
          <p>Description: {game.description}</p>
          <p>Genre: {game.genre}</p>
          <button onClick={() => props.onShowGame(game)}>More info</button>
          <button onClick={() => handleSubmit(game)}>Favorite</button>
        </div>
      ))}
    </div>
  );
}
