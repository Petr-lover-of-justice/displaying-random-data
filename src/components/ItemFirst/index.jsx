import React from "react";
import { ItemSecond } from "../ItemSecond";
import s from "./ItemFirst.module.scss";

export const ItemFirst = ({ items }) => {
  const [state, setState] = React.useState();

  const nextBlock = (item, i) => {
    setState(<ItemSecond value={item} />);
  };
  let title1 = items.map((item, i) => {
    return (
      <ul onClick={() => nextBlock(item, i)} key={i}>
        {item.title}
      </ul>
    );
  });
  return (
    <>
      <li className={s.ItemFirst}>{title1}</li>
      {state}
    </>
  );
};
