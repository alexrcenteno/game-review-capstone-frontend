export function GamesShow(props) {
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };

  return (
    <div>
      <h1>Game information</h1>
      <p>Name: {props.game.name}</p>
      <p>Url: {props.game.url}</p>
      <p>Image_url: {props.game.image_url}</p>
      <p>Description: {props.game.description}</p>
      <p>Genre: {props.game.genre}</p>
      <form>
        <div>
          Name: <input defaultValue={props.game.name} name="name" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.game.url} name="url" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.game.image_url} name="image_url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.game.description} name="description" type="text" />
        </div>
        <div>
          Genre: <input defaultValue={props.game.genre} name="genre" type="text" />
        </div>
      </form>
      <button onClick={handleClick}>Delete Favorite</button>
    </div>
  );
}
