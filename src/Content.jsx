import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { GamesShow } from "./GamesShow";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";

export function Content(props) {
  const [favorites, setFavorites] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState({});

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
      console.log(games);
    });
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then(() => handleIndexGames());
  };

  const handleShowGame = (game) => {
    console.log("handleShowGame", game);
    setIsGamesShowVisible(true);
    setCurrentGame(game);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGamesShowVisible(false);
  };

  const handleDestroyFavorite = (id) => {
    console.log("handleDestroyFavorite", id);
    axios.delete(`http://localhost:3000/favorites/${id}.json`).then(() => handleIndexGames());
  };

  useEffect(handleIndexGames, []);

  return (
    <div className="container">
      <Modal show={props.isSignupShowVisible} onClose={props.handleSignupClose}>
        <Signup />
      </Modal>
      <Modal show={props.isLoginShowVisible} onClose={props.handleLoginClose}>
        <Login />
      </Modal>
      <LogoutLink />
      <GamesIndex
        games={games}
        onShowGame={handleShowGame}
        onCreateFavorite={handleCreateFavorite}
        onDestroyFavorite={handleDestroyFavorite}
      />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow
          game={currentGame}
          onDestroyFavorite={handleDestroyFavorite}
          onCreateFavorite={handleCreateFavorite}
        />
      </Modal>
    </div>
  );
}
