export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Favorite game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          Game_id: <input name="game_id" type="text" />
        </div>
        <button type="submit">Create favorite game</button>
      </form>
    </div>
  );
}
