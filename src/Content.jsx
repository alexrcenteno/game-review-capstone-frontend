import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { GamesShow } from "./GamesShow";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState({});

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json/?=favorites").then((response) => {
      console.log(response.data);
      setGames(response.data);
      console.log(games);
    });
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...favorites, response.data]);
    });
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

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      // setFavorites(favorites.filter((p) => p.id !== favorite));
    });
  };

  useEffect(handleIndexGames, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <GamesIndex games={games} onShowGame={handleShowGame} onCreateFavorite={handleCreateFavorite} />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} onDestroyFavorite={handleDestroyFavorite} />
      </Modal>
    </div>
  );
}
