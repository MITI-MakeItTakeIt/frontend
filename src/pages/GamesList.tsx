import { getFindAllGames, getFindGame } from "../api/games";

export const GamesList = () => {
  const handleGetGamesData = () => {
    getFindAllGames();
  };

  const findgame = () => {
    getFindGame(2);
  };
  return (
    <div>
      {/* <button onClick={handleGetGamesData}>회회</button> */}
      {/* <button onClick={findgame}>single</button> */}
    </div>
  );
};
