import { useTranslation } from "react-i18next";
import { x } from "../../Const/Images";
import { Logo } from "../../Const/Images";
import { Button } from "../Common/common";
import React from "react";

interface Props {
  close: () => void;
}

export const MobileHeader: React.FC<Props> = ({ close }) => {
  const { t } = useTranslation();

  return (
    <div className="w-[240px] bg-black text-white text-[24px]">
      <div className="p-4 flex justify-between items-center border-b border-b-grey">
        <div className="p-2 rounded-[50%] text-center border border-grey hover:cursor-pointer" onClick={close}>
          <img src={x} alt="x" />
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="px-[32px] py-[16px] border-b border-b-grey">
        <Button background="prime" label="Affiliate Login" />
      </div>
      <div>
        <ul className="font-semibold leading-[100%]">
          <li className="w-full px-[32px] py-[24px] text-[20px] border-b border-b-grey">
            <a href="#home">{t("Home")}</a>
          </li>
          <li className="w-full px-[32px] py-[24px] text-[20px] border-b border-b-grey">
            <a href="#feature">{t("Feature")}</a>
          </li>
          <li className="w-full px-[32px] py-[24px] text-[20px] border-b border-b-grey">
            <a href="#ecosystem">{t("Ecosystem")}</a>
          </li>
          <li className="w-full px-[32px] py-[24px] text-[20px] border-b border-b-grey">
            <a href="#roadmap">{t("Roadmap")}</a>
          </li>
          <li className="w-full px-[32px] py-[24px] text-[20px] border-b border-b-grey">
            <a href="#partners">{t("Partners")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
