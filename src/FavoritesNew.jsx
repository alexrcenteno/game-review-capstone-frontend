export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div className="text-light">
      {/* <h1>New Favorite game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Game_id: <input name="game_id" type="text" />
        </div>
        <button type="submit">Favorite game</button>
      </form>
      <div>
        Game_id: <input name="game_id" type="text" />
      </div>
      <button type="submit">Delete Favorite</button> */}
    </div>
  );
}
