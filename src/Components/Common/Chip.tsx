import React from "react";
import { ILabel } from "../../Interfaces/Kanban";
interface ChipProps {
  item: ILabel;
  removeLabel?: (label: ILabel) => void;
}
export default function Chip(props: ChipProps) {
  const { item, } = props;
  return (
    <label style={{ backgroundColor: item.color, color: "#fff" }}>
      {item.text}
    </label>
  );
}
