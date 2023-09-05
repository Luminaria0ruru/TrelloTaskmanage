import React, { useEffect, useState } from "react";
import Board from "../Components/Board/Board";
import "./Dashboard.css";
import { ICard, IBoard } from "../Interfaces/Kanban";
import { fetchBoardList, updateLocalStorageBoards } from "../Helper/APILayers";

function Dashboard() {
  const [boards, setBoards] = useState<IBoard[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const boards: IBoard[] = await fetchBoardList();
    setBoards(boards);
  }
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId: number, cardId: number, card: ICard) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onClick = (boardId: number, cardId: number) =>  {
    const sourceBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === boardId,
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId,
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === 1651319512266.0001
    );
    if (targetBoardIndex < 0) return;
    if (targetBoardIndex != 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[targetBoardIndex].cards.splice(
      tempBoardsList[targetBoardIndex].cards.length,
      0,
      sourceCard,
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === boardId,
    );
    if (sourceBoardIndex < 0) return;
    if(boardId != 1651319512266.0001) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId,
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === 1651319512266.0001
    );
    if (targetBoardIndex < 0) return;
    if (targetBoardIndex != 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    //ここでカード移動する。
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(
      tempBoardsList[targetBoardIndex].cards.length,
      0,
      sourceCard,
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  useEffect(() => {
    updateLocalStorageBoards(boards);
  }, [boards]);
  
  return (
    <div className="app">
      <div className="app-nav">
        <h1>Trello Kanban Board</h1>
      </div>
      <div className="app-boards-container">
        <div className="app-boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              onDragEnd={onDragEnd}
              onClick={onClick}
              onDragEnter={onDragEnter}
              updateCard={updateCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
