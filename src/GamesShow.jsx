export function GamesShow(props) {
  return (
    <div>
      <h1>Game information</h1>
      <p>Name: {props.game.name}</p>
      <p>Url: {props.game.url}</p>
      <p>Image_url: {props.game.image_url}</p>
      <p>Description: {props.game.description}</p>
      <p>Genre: {props.game.genre}</p>
    </div>
  );
}
