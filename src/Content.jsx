import axios from "axios";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { GamesShow } from "./GamesShow";
import { Modal } from "./Modal";

export function Content() {
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

  useEffect(handleIndexGames, []);

  const handleCreateFavorite = (params, successCallBack) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallBack();
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
  const logGames = () => {
    console.log(games);
  };
  return (
    <div>
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} />
      </Modal>
    </div>
  );
}
