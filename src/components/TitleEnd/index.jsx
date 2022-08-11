import React from "react";
import s from "./TitleEnd.module.scss";

export const TitleEnd = ({ ex }) => {
 
  const index = ex.map((item, i) => {
    return <ul key={i}>{i}</ul>;
  });
  const dataTitle = ex.map((item, i) => {
    return <ul key={i}>{item.title}</ul>;
  });
  const num = ex.map((item, i) => {
    return <ul key={i}>{item.number}</ul>;
  });
  return (
    <div className={s.root}>
      <div className={s.index}>
        <h4>#</h4>
        {index}
      </div>
      <div className={s.title}>
        <h4>Title</h4>
        {dataTitle}
      </div>
      <div className={s.number}>
        <h4>Number</h4>
        {num}
      </div>
    </div>
  );
};
