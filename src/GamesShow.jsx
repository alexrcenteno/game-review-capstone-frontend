import { FavoritesNew } from "./FavoritesNew";

export function GamesShow(props) {
  const handleSubmit = (game) => {
    const params = { game_id: game.id };
    props.onCreateFavorite(params);
  };

  const handleDestroy = (game) => {
    props.onDestroyFavorite(game.favorite.id);
  };

  return (
    <div>
      <h1>Game information</h1>
      <p>Name: {props.game.name}</p>
      <p>Rating: {props.game.rating}</p>
      <p>Playtime: {props.game.playtime}</p>
      <p>Release Date: {props.game.released}</p>
      {/* <p>Genre: {props.game.genre}</p> */}
      {/* <form>
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
      </form> */}
      {props.game.favorite ? (
        <a className="btn btn-primary" onClick={() => handleDestroy(props.game)}>
          Delete favorite
        </a>
      ) : (
        <a className="btn btn-primary" onClick={() => handleSubmit(props.game)}>
          Favorite
        </a>
      )}
    </div>
  );
}
