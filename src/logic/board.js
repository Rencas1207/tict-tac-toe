import { WINNER_COMBOS } from '../constants';

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos si todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // 0_-> x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // x u o
    }
  }

  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
