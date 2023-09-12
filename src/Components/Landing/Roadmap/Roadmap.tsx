import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import LeftRoadmapList from "./LeftRoadmapList";
import RightRoadMapList from "./RightRoadMapList";

const Roadmap = () => {
  const { t } = useTranslation();
  const refLine1 = useRef<HTMLInputElement>(null);
  const refLine2 = useRef<HTMLInputElement>(null);
  const refLine3 = useRef<HTMLInputElement>(null);
  const refLine4 = useRef<HTMLInputElement>(null);
  const refLine5 = useRef<HTMLInputElement>(null);
  const refLine6 = useRef<HTMLInputElement>(null);

  const animation = () => {
    if (refLine1.current && refLine2.current && refLine3.current && refLine4.current && refLine5.current && refLine6.current) {
      let height = 190 - refLine1.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 190) height = 190;
      refLine1.current.style.height = `${height}px`;
      height = 190 - refLine2.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 190) height = 190;
      refLine2.current.style.height = `${height}px`;
      height = 190 - refLine3.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 190) height = 190;
      refLine3.current.style.height = `${height}px`;
      height = 350 - refLine4.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 450) height = 450;
      refLine4.current.style.height = `${height}px`;
      height = 350 - refLine5.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 450) height = 450;
      refLine5.current.style.height = `${height}px`;
      height = 350 - refLine6.current.getBoundingClientRect().top;
      if (height < 0) height = 0;
      if (height > 450) height = 450;
      refLine6.current.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", animation);
  }, []);

  return (
    <section className="max-w-[1440px] mx-[50px] mt-[150px] lg:mx-[160px] 2xl:mx-auto">
      <div className="pt-[40px]">
        <div className="pt-[188px]">
          <div className="flex flex-col justify-center items-center">
            <LeftRoadmapList
              label={t("Q3 2023")}
              lists={[
                t("Minting of the token"),
                t("Finalize documentation and initial audits"),
                t("Launch of website and first platform version"),
                t("Early client partnerships in multiple categories"),
                t("Creating a refined strategic concept backlog"),
                t("Token sales"),
              ]}
            />
            <div className="z-10 h-[190px] w-[9px] bg-[#121212] border border-gradient hidden xl:block">
              <div ref={refLine1} className="horizontal-link-stick" />
            </div>
            <div className="z-10 h-[450px] w-[9px] bg-[#121212] border border-gradient translate-x-[-125px] sm:translate-x-[-145px] block xl:hidden">
              <div ref={refLine4} className="horizontal-link-stick" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RightRoadMapList
              label={t("Q4 2023")}
              lists={[
                t("Analytics dashboard"),
                t("Staking and vesting Liquidity Pool"),
                t("Decentralized Exchange (DEX)"),
                t("Support for merchants"),
                t("Team expansion (marketing and product development)"),
                t("Process and method revision for the current organization"),
              ]}
            />
            <div className="z-10 h-[190px] w-[9px] bg-[#121212] border border-gradient hidden xl:block">
              <div ref={refLine2} className="horizontal-link-stick" />
            </div>
            <div className="z-10 h-[450px] w-[9px] bg-[#121212] border border-gradient translate-x-[-125px] sm:translate-x-[-145px] block xl:hidden">
              <div ref={refLine5} className="horizontal-link-stick" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <LeftRoadmapList
              label={t("Q1 2024")}
              lists={[
                t("Affiliate and commerce analytics"),
                t("Fiat-On-Ramp"),
                t("Escrow Services"),
                t("Wallet Services"),
                t("Launch the first modular product suite portal"),
                t("DeFi partnerships"),
                t("Community and investor feedback round"),
              ]}
            />
            <div className="z-10 h-[190px] w-[9px] bg-[#121212] border border-gradient hidden xl:block">
              <div ref={refLine3} className="horizontal-link-stick" />
            </div>
            <div className="z-10 h-[450px] w-[9px] bg-[#121212] border border-gradient translate-x-[-125px] sm:translate-x-[-145px] block xl:hidden">
              <div ref={refLine6} className="horizontal-link-stick" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RightRoadMapList
              label={t("Concept Backlog")}
              lists={[
                t("Soft nodes Validator program"),
                t("Token Vault"),
                t("Multichain support"),
                t("Farming Continuous development and growth strategies"),
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;