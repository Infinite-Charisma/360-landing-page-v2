/**import package*/
import { useState } from "react";
import { useTranslation } from "react-i18next";

/**import Component */
import { Button } from "../Common/common";
import { MobileHeader } from "./MobileHeader";

/**import context */
import { useLangContext } from "../../Context/LanguageContext";

/**import Const */
import { LANGUAGES } from "../../Const/Languages";
import { Logo, menu, whiteLightning } from "../../Const/Images";

const Header = () => {
  const { setLangCode } = useLangContext();
  const { i18n, t } = useTranslation();
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  const handleClick = () => {
    setMobileMode(true);
  };

  const handleClose = () => {
    setMobileMode(false);
  };

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    setLangCode(lang_code);
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <div className="hidden xl:block">
        <div className="flex justify-between items-center px-[80px] py-[40px] text-white text-base">
          <img src={Logo} alt="logo" className="w-[76px] h-[40px]" />
          <div>
            <ul className="flex gap-[48px]">
              <li>
                <a href="#home" className="scroll-smooth cursor-pointer">{t("Home")}</a>
              </li>
              <li>
                <a href="#feature" className="scroll-smooth cursor-pointer">{t("Feature")}</a>
              </li>
              <li>
                <a href="#ecosystem" className="scroll-smooth cursor-pointer">{t("Ecosystem")}</a>
              </li>
              <li>
                <a href="#roadmap" className="scroll-smooth cursor-pointer">{t("Roadmap")}</a>
              </li>
              <li>
                <a href="#partners" className="scroll-smooth cursor-pointer">{t("Partners")}</a>
              </li>
              <li>
                <a href="#faq" className="scroll-smooth cursor-pointer">{t("FAQ")}</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[10px] justify-center items-center cursor-pointer text-base">
            <div>
              <select
                defaultValue={i18n.language}
                className="px-6 py-4 bg-[transparent] focus-visible:outline-none"
                onChange={onChangeLang}
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="text-black">
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="ease-out duration-200 hover:scale-105">
              <a href="https://360dapp.xyz/trade" rel="noreferrer" target="_blank">
                <Button
                  background="prime"
                  label={t("Buy 360")}
                  icon={whiteLightning}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="p-4 flex justify-between items-center">
          <div
            className="p-2 rounded-[50%] text-center border border-grey hover:cursor-pointer"
            onClick={handleClick}
          >
            <img src={menu} alt="menu" />
          </div>
          <div className="text-white text-base">
            <select
              defaultValue={i18n.language}
              className="px-6 py-4 bg-[transparent] focus-visible:outline-none"
              onChange={onChangeLang}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code} className="text-black">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-50">
        {mobileMode && <MobileHeader close={handleClose} />}
      </div>
    </>
  );
};

export default Header;
