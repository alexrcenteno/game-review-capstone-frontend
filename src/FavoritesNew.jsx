export function FavoritesNew() {
  return (
    <div>
      <h1>New Favorite game</h1>
      <form>
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
