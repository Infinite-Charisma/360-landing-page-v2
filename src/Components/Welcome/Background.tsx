import { useRef } from "react";
import { CSSProperties } from "react";
import animation from "./css/export.module.css";
import "./Background.css";

interface MyCustomCSS extends CSSProperties {
  "--i": number;
}

function Background() {
  const elecRef = useRef<HTMLDivElement>(null);

  const array = new Array(36).fill(1);

  return (
    <div
      className="min-h-screen w-screen relative perspective"
      ref={elecRef}
    >
      {array.map((key, id) => {
        return (
          <div
            key={key + id}
            className={`${animation.cube_anim} duration-[60s] absolute path top-0 left-0 mask h-[800px] w-[800px]`}
            style={{ "--i": id } as MyCustomCSS}
          />
        );
      })}
    </div>
  );
}

export default Background;
