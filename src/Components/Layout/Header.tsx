import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Common/common";
import { useLangContext } from "../../Context/LanguageContext";
import { LANGUAGES } from "../../Const/Languages";
import { Logo, menu } from "../../Const/Images";
import { MobileHeader } from "./MobileHeader";

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
        <div className="flex justify-between items-center px-[80px] py-[40px] text-white text-[24px]">
          <img src={Logo} alt="logo" className="w-[76px] h-[40px]" />
          <div>
            <ul className="flex gap-[48px]">
              <li>
                <a href="#home" className="scroll-smooth">{t("Home")}</a>
              </li>
              <li>
                <a href="#feature" className="scroll-smooth">{t("Feature")}</a>
              </li>
              <li>
                <a href="#ecosystem">{t("Ecosystem")}</a>
              </li>
              <li>
                <a href="#roadmap">{t("Roadmap")}</a>
              </li>
              <li>
                <a href="#partners">{t("Partners")}</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <div>
              <select
                defaultValue={i18n.language}
                className="px-6 py-4 bg-[transparent]"
                onChange={onChangeLang}
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="text-black">
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <Button background="prime" label={t("Affiliate Login")} />
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
          <div className="text-white text-[20px]">
            <select
              defaultValue={i18n.language}
              className="px-6 py-4 bg-[transparent]"
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
      <div className="fixed top-0 left-0">
        {mobileMode && <MobileHeader close={handleClose} />}
      </div>
    </>
  );
};

export default Header;
