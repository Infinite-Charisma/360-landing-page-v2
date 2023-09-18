import { useEffect, useRef, useState } from "react";
import { CSSProperties } from "react";
import animation from "./css/export.module.css";
import "./Background.css";

interface MyCustomCSS extends CSSProperties {
  "--i": number;
}

function Background() {
  let width = window.innerWidth;
  const elecRef = useRef<HTMLDivElement>(null);
  const [mask, setMask] = useState<string>("mask");

  const array = new Array(36).fill(1);

  useEffect(() => {
    if (width < 640) {
      setMask("small-mask")
    } else (
      setMask("mask")
    )
  }, [width]);

  return (
    <div
      className="min-h-screen w-screen relative perspective"
      ref={elecRef}
    >
      {array.map((key, id) => {
        return (
          <div
            key={key + id}
            className={`${animation.cube_anim} duration-[16s] absolute h-[400px] w-[400px] sm:h-[800px] sm:w-[800px] path top-0 left-0 ${mask}`}
            style={{ "--i": id } as MyCustomCSS}
          />
        );
      })}
    </div>
  );
}

export default Background;
