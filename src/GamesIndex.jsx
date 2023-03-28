export function GamesIndex(props) {
  const handleSubmit = (game) => {
    const params = { game_id: game.id };
    props.onCreateFavorite(params);
  };

  const handleDestroy = (game) => {
    props.onDestroyFavorite(game.favorite.id);
  };
  return (
    <div className="text-muted">
      <h1>All Games</h1>

      <div className="row justify-content-center">
        {props.games?.map((game) => (
          <div key={game.id} className="col mb-3 mb-sm-0">
            <div className="card bg-dark text-white" style={{ width: "18rem" }}>
              <img src={game.background_image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">{game.description}</p>
                <button className="btn btn-primary" onClick={() => props.onShowGame(game)}>
                  More info
                </button>
                {game.favorite ? (
                  <>
                    <a className="btn btn-primary" onClick={() => handleDestroy(game)}>
                      Delete favorite
                    </a>
                  </>
                ) : (
                  <>
                    <a className="btn btn-primary" onClick={() => handleSubmit(game)}>
                      Favorite
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
