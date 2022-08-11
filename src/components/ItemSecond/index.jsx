import React from "react";
import { BlockDate } from "../BlockDate";

import s from "../ItemSecond/ItemSecond.module.scss";
export const ItemSecond = ({ value }) => {
  const nextBlocks = () => {
    let title = value.items.map((item, i) => {
      return <BlockDate key={i} datePropsBlock={item} />;
    });
    return title;
  };
  return <div className={s.root}>{nextBlocks()}</div>;
};
