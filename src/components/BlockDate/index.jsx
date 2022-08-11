import React, { useEffect, useRef, useState } from "react";

import { TitleEnd } from "../TitleEnd";

import s from "./BlockDate.module.scss";

export const BlockDate = ({ datePropsBlock }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
      console.log("click");
    }
  };
  const handleClickInside = () => setClickedOutside(!clickedOutside);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clickedOutside]);

  const [state, setState] = React.useState("");
  let startFate = (st) => {
    let star = new Date(st.dateStart);
    let end = new Date(st.dateEnd);
    return ` ${star.getDate()}.${
      star.getMonth() + 1
    }.${star.getFullYear()} - ${end.getDate()}.${
      end.getMonth() + 1
    }.${end.getFullYear()}`;
  };
  const numberTitle = (ex) => {
    setClickedOutside(!clickedOutside);
    setState(<TitleEnd ex={ex} />);
  };
  return (
    <div className={s.wrapper} onClick={() => numberTitle(datePropsBlock.data)}>
      <div className={s.root}>
        <div className={s.title}>{datePropsBlock.title}</div>
        <div className={s.date}>{String(startFate(datePropsBlock))}</div>
        <div className={s.subTitle}>{datePropsBlock.subTitle}</div>
      </div>
      <div ref={myRef} onClick={() => handleClickInside()}>
        {clickedOutside ? state : ""}
      </div>
    </div>
  );
};
