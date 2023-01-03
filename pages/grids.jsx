// A feature I've been wanting to test out since the first time I looked through Anime.js docs
import anime from "animejs";
import React, { useEffect, useState } from "react";

export default function Grid() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(1);
  const [total, setTotal] = useState(1);

  const handleStagger = (i) => {
    const el = i.target.id;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [columns, rows], from: el }),
    });
  };

  const getGridSize = () => {
    console.log(
      Math.floor(document.body.clientWidth / 50),
      Math.floor(document.body.clientHeight / 50)
    );
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);
    setTotal(rows * columns);
    setRows(rows);
    setColumns(columns);
    anime({
      targets: ".grid-item",
      backgroundColor: "#fff",
      duration: 0,
      easing: "linear",
    });
  };

  useEffect(() => {
    window?.addEventListener("resize", getGridSize());
  });

  return (
    <div id="grid">
      {[...Array(total)].map((x, i) => (
        <div className="grid-item" id={i} onClick={(i) => handleStagger(i)} />
      ))}
    </div>
  );
}
