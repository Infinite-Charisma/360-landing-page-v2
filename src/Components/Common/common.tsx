import React, { useMemo, useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  background: string;
  icon?: string;
}

interface TextProps {
  fontSize: string;
  fontColor: string;
  fontWeight?: string;
  lineHight?: string;
  highlightText?: string;
  highlightColor?: string;
  textAlign?: string;
  label: string;
}

interface TooltipProps {
  label: string;
  sublabel?: string;
  pinColor: string;
  pinPosition: string;
}

const Button: React.FC<ButtonProps> = ({ label, background, icon }) => {
  const bg = useMemo(() => {
    if (background === "prime") {
      return "bg-prime";
    }
    if (background === "dark") {
      return "bg-dark";
    }
  }, [background]);

  return (
    <>
      <button
        className={`px-6 py-4 rounded-[6px] border border-[#38393B] ${bg}`}
      >
        <div className="flex justify-center items-center">
          {icon && <img src={icon} alt="icon" className="w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px]" />}
          <p className="max-sm:text-[16px] text-[24px] leading-[24px] text-white pl-2">
            {label}
          </p>
        </div>
      </button>
    </>
  );
};

const Text: React.FC<TextProps> = ({
  fontSize,
  fontColor,
  fontWeight,
  lineHight,
  highlightText,
  highlightColor,
  textAlign,
  label,
}) => {
  const colorProperty = useMemo(() => {
    if (fontColor === "white") {
      return "text-white";
    }
    if (fontColor === "gradient") {
      return "text-gradient";
    }
  }, [fontColor]);

  const alignProperty = useMemo(() => {
    if (!textAlign || textAlign === "start") {
      return "text-start";
    }
    if (textAlign === "end") {
      return "text-end";
    }
    if (textAlign === "center") {
      return "text-center";
    }
  }, [textAlign]);

  const fontWeightProperty = useMemo(() => {
    if (fontWeight === "normal") {
      return "text-normal";
    }
    if (fontWeight === "semibold") {
      return "text-semibold";
    }
    if (fontWeight === "bold") {
      return "text-bold";
    }
    if (fontWeight === "extrabold") {
      return "text-extrabold";
    }
  }, [fontWeight]);

  const highlightProperty = useMemo(() => {
    if (highlightColor === "white") {
      return `text-white`;
    }
    if (highlightColor === "prime") {
      return `text-prime`;
    }
    if (highlightColor === "gradient") {
      return "text-gradient";
    }
  }, [highlightColor]);

  return (
    <>
      <p
        className={`${colorProperty} ${alignProperty} ${fontWeightProperty}`}
        style={{
          fontSize: fontSize,
          lineHeight: lineHight,
          fontWeight: fontWeight,
        }}
      >
        {highlightText ? (
          <>
            {label.slice(0, label.indexOf(highlightText))}
            <span className={highlightProperty}>{highlightText}</span>
            {label.slice(
              label.indexOf(highlightText) + highlightText.length,
              label.length
            )}
          </>
        ) : (
          <>{label}</>
        )}
      </p>
    </>
  );
};

const Tooltip: React.FC<TooltipProps> = ({ label, sublabel, pinColor, pinPosition }) => {
  const [color, setColor] = useState<string>("");
  const [pos, setPos] = useState<string>("");
  const [mgn, setMgn] = useState<string>("");

  useEffect(() => {
    if (pinColor === "secondary") {
      setColor("bg-secondary");
    }
    if (pinColor === "yellow") {
      setColor("bg-yellow");
    }
    if (pinColor === "tertiary2") {
      setColor("bg-tertiary2");
    }
    if (pinColor === "prime") {
      setColor("bg-prime");
    }
  }, [pinColor]);

  useEffect(() => {
    if (pinPosition === "right bottom") {
      setPos("right-[4px] bottom-[4px]");
      setMgn("mr-2");
    }
    if (pinPosition === "right top") {
      setPos("right-[4px] top-[4px]");
      setMgn("mr-2");
    }
    if (pinPosition === "left bottom") {
      setPos("left-[4px] bottom-[4px]");
      setMgn("ml-2");
    }
    if (pinPosition === "left top") {
      setPos("left-[4px] top-[4px]");
      setMgn("ml-2");
    }
  }, [pinPosition]);
  return (
    <div className="flex justify-between gap-[4px] tooltip p-1 text-[12px] max-w-[100px] sm:w-fit">
      <div className="p-1">
        <p className={`leading-[14px] text-white ${mgn}`}>{label}</p>
        {
          sublabel && <p className={`font-normal leading-[150%] pt-1 text-white text-[12px] ${mgn}`}>{sublabel}</p>
        }
      </div>
      
      <div className={`fixed w-2 h-2 rounded-[50%]  ${color} ${pos}`}></div>
    </div>
  );
};
export { Button, Text, Tooltip };
