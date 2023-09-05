import React, { useState } from "react";
import { AlignLeft,X,MoreHorizontal } from "react-feather";
import { ICard } from "../../Interfaces/Kanban";
import Chip from "../Common/Chip";
import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";
interface CardProps {
  card: ICard;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onClick: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
function Card(props: CardProps) {
  const { card, boardId, onDragEnd, onClick,removeCard,onDragEnter, updateCard } =
    props;
  const { id, title, desc, labels } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className="card"
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId,id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => {
          if(boardId != 1651319512266.0001){
            onClick(boardId, id);
        }}}
      >
        <div className="card-top">
          <div className="card-top-labels">
            {labels?.map((item, index) => (
              <Chip key={index} item={item} />
            ))}
          </div>
          <div
            className="card-top-more"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board-dropdown"
                onClose={() => setShowDropdown(false)}
              >
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card-title">{title}</div>
        <div>
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        { 
          boardId == 1651319512266.0001 
          &&
          <div className="card-footer">
            <p className="card-footer-item">
              <X 
                className="card-footer-icon" 
                onClick={() => removeCard(boardId,id)}
              />
            </p>
          </div>
        }
      </div>
    </>
  );
}

export default Card;
