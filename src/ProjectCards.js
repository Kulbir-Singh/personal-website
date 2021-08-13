import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./ProjectCards.css";
import Finance from "./resource/financelogin.PNG";

export default function ProjectCards() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__front">
          <img src={Finance} className="financeImg" />
          <h3 className="card__title">the fair</h3>
          <p className="card__subtitle">time for some fun</p>
        </div>
        <div className="card__back">
          <p className="card__body">
            I'm a fan of minimlism in my designs, but since I stumbled across
            transform-style and some of the fun things that it opens up, I've
            been playing around a lot with some 3D stuff in CSS of late.
          </p>
        </div>
      </div>
    </div>
  );
}
