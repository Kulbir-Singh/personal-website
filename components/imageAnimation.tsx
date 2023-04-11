import React, { useEffect } from "react";
import Picture from "./picture";

const animationImgs = [
  { webpSrc: "./letsplit.webp", src: "./letsplit.png" },
  { webpSrc: "./chromehill.webp", src: "./chromehill.png" },
  { webpSrc: "./vidamoraHero.webp", src: "./vidamoraHero.png" },
  { webpSrc: "./letsplit.webp", src: "./letsplit.png" },
  { webpSrc: "./chromehill.webp", src: "./chromehill.png" },
  { webpSrc: "./vidamoraHero.webp", src: "./vidamoraHero.png" },
  { webpSrc: "./letsplit.webp", src: "./letsplit.png" },
  { webpSrc: "./chromehill.webp", src: "./chromehill.png" },
  { webpSrc: "./vidamoraHero.webp", src: "./vidamoraHero.png" },
];

export default function ImageAnimation() {
  useEffect(() => {
    const images = document.getElementsByClassName(
      "heroImage"
    ) as HTMLCollectionOf<HTMLElement>;
    let globalIndex = 0,
      last = { x: 0, y: 0 };
    const timer = (image) =>
      window.setTimeout(() => {
        image.dataset.status = "inactive";
      }, 500);
    const activate = (image, x, y) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.dataset.status = "active";
      timer(image);
      last = { x, y };
    };

    const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
    };
    const moveImage = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > 200) {
        const lead = images[globalIndex % images.length];

        const tail = images[(globalIndex - 5) % images.length];
        if (images.length) {
          activate(lead, e.clientX, e.clientY);
        }
        if (tail) {
          tail.dataset.status = "inactive";
        }
        globalIndex++;
      }
    };
    document
      .getElementsByClassName("heroSection")[0]
      .addEventListener("mousemove", moveImage);
    return () => {
      window.clearTimeout(timer(""));
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);
  return (
    <div className="absolute inset-0 z-0 w-full h-screen overflow-hidden opacity-70">
      <div className="absolute w-[600px] top-[22%] h-[600px] rounded-full right-0 bg-custom-green-300 overflow-hidden -z-20 lg:-translate-x-[50%]" />
      {animationImgs.map((img, index) => {
        return (
          <div
            data-index={index}
            key={index + img.webpSrc}
            data-status="inactive"
            className="absolute -translate-x-[50%] -translate-y-[50%] w-[500px] heroImage duration-[2000ms]"
          >
            <Picture src={img.webpSrc} webPSrc={img.webpSrc} alt="" />
          </div>
        );
      })}
    </div>
  );
}
