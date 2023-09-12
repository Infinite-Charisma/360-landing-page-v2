import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import Modal from "@mui/material/Modal";
import { Tilt } from "react-tilt";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { Button, Text } from "../Components/Common/common";
import FeatureCard from "../Components/Landing/Features/FeatureCard";
import { CheckIcon } from "../Components/Landing/Dapp.tsx/CheckIcon";
import {
  BigLogo,
  macboook,
  alcacor,
  zanyShy,
  scalefy,
  caibo,
  alca,
  bringYou,
  scratch,
  innov,
  lightning,
  whiteLightning,
  arrowCircle,
  agreement,
  icon,
  document,
  check,
  clock,
  macbook
} from "../Const/Images";
import "./Landing.css";
import FAQ from "../Components/Landing/FAQ/FAQ";
import { totalOptions } from "../Const/PieChartConfig";
// import EclipseEffects from "../Components/Effects/EclipsEffects";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const main = useRef(null);
  const { t } = useTranslation();
  const [titleAlign, setTitleAlign] = useState<string>("start");
  const [title, setTitle] = useState<string>("80px");
  const [subtitle, setSubtitle] = useState<string>("32px");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!window.ethereum) {
      setOpen(true);
    } else {
      window.open("https://360dapp.netlify.app/trade");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const launchDapp = () => {
    window.open("https://360dapp.netlify.app");
  };

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    //handle text align
    if (innerWidth < 1280) {
      setTitleAlign("center");
    } else {
      setTitleAlign("start");
    }
    //text main title font size
    if (innerWidth < 640) {
      setTitle("40px");
      setSubtitle("20px");
    } else if (innerWidth < 1280) {
      setTitle("60px");
      setSubtitle("28px");
    } else {
      setTitle("80px");
      setSubtitle("32px");
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".roadmap", {
        x: -1800,
        scrollTrigger: {
          trigger: ".roadmap",
          start: 'top center',
          end: '+=1000',
          scrub: true,
        },
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="px-[30px] md:px-[60px] xl:px-[120px]">
        {/* Welcome */}
        <div
          id="home"
          className="flex flex-col justify-center gap-[100px] items-center my-[100px] xl:flex-row xl:justify-between"
        >
          <div className="flex flex-col justify-between items-center gap-[50px] xl:items-start">
            <div className="flex flex-col gap-[16px]">
              <Text
                fontColor="white"
                fontSize={title}
                fontWeight="bold"
                lineHight="100%"
                label={t("Welcome to the future of liquidity")}
                textAlign={titleAlign}
              />
              <Text
                fontColor="white"
                fontSize="24px"
                fontWeight="normal"
                lineHight="28px"
                label={t(
                  "Access liquidity within seconds and open up a world of possibilities to earn."
                )}
                textAlign={titleAlign}
              />
            </div>
            <div onClick={handleOpen}>
              <Button
                background="prime"
                label={t("Buy 360")}
                icon={whiteLightning}
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img src={macbook} alt="macbook" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-[20px] py-[56px] flex flex-col justify-between gap-[32px] rounded-[10px] max-w-[900px] poster xl:px-[40px]">
              <div className="absolute top-[10px] left-[20px] p-2 bg-dark border-darkgrey rounded-[8px]">
                <img src={lightning} alt="lightning" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="w-[263px] mx-auto lg:w-[800px]">
                  <Text
                    fontColor="white"
                    fontSize={subtitle}
                    fontWeight="bold"
                    lineHight="100%"
                    label={t("46% OF TOKENS HAVE BEEN SOLD")}
                    highlightText="46%"
                    highlightColor="prime"
                    textAlign="center"
                  />
                </div>
                <div className="w-[263px] mx-auto sm:w-[500px]">
                  <Text
                    fontColor="white"
                    fontSize="20px"
                    fontWeight="normal"
                    lineHight="140%"
                    label={t(
                      "Take part in the limited pre-sale of 360 tokens."
                    )}
                    textAlign="center"
                  />
                </div>
              </div>
              <div className="rounded-[12px] bg-[#292929] progressbar w-[263px] mx-auto h-[24px] sm:w-[376px]">
                <div className="h-[24px] w-[46%] rounded-[12px]"></div>
              </div>
            </div>
        </div>
        {/* Features*/}
        <div
          id="feature"
          className="py-[150px] flex flex-col gap-[64px] justify-between items-center"
        >
          <Text
            fontColor="white"
            fontSize={title}
            fontWeight="bold"
            label={t("360 Token Features")}
            lineHight="100%"
            highlightText={t("Features")}
            highlightColor="gradient"
            textAlign="center"
          />
          <div className="grid grid-cols-1 gap-[32px] xl:grid-cols-3 sm:w-[436px] xl:w-full">
            <Tilt
              options={{
                max: 35,
                scale: 1,
                speed: 450
              }}
            >
              <div className="shadow-airdrop-feature relative h-full">
                <FeatureCard
                  src={agreement}
                  label={t("Liquidity Provision & Staking")}
                  labelAlign="center"
                  labelSize={subtitle}
                  lists={[
                    t("Earn a share of platform trading fees"),
                    t("Get rewarded for providing liquidity"),
                    t(
                      "Extra token incentives and revenue share in LP tokens for liquidity providers"
                    ),
                  ]}
                />
              </div>
            </Tilt>
            <Tilt
              options={{
                max: 30,
                scale: 1,
                speed: 250
              }}
            >
              <div className="shadow-airdrop-feature relative h-full">
                <FeatureCard
                  src={icon}
                  label={t("Airdrop Strategy")}
                  labelAlign="center"
                  labelSize={subtitle}
                  lists={[
                    t(
                      "75 million tokens airdropped to potential users and stakeholders, existing token holders and active community members"
                    ),
                  ]}
                />
              </div>
            </Tilt>
            <Tilt
              options={{
                max: 30,
                scale: 1,
                speed: 250
              }}
            >
              <div className="shadow-airdrop-feature relative h-full">
                <FeatureCard
                  src={document}
                  label={t("Affiliate Marketing Program")}
                  labelAlign="center"
                  labelSize={subtitle}
                  lists={[
                    t("Earn commission from sales"),
                    t("Revenue shares distributed to holders"),
                  ]}
                />
              </div>
            </Tilt>
          </div>
        </div>
        {/* Ecosystem */}
        <div
          id="ecosystem"
          className="my-[150px] flex flex-col gap-[64px] justify-between items-center xl:flex-row"
        >
          <div className="flex flex-col">
            <div className="my-4">
              <Text
                fontColor="white"
                fontSize={title}
                fontWeight="bold"
                label={t("360 ecosystem")}
                lineHight="100%"
                highlightColor={t("gradient")}
                highlightText={t("ecosystem")}
                textAlign={titleAlign}
              />
            </div>
            <div>
              <Text
                fontColor="white"
                fontSize="24px"
                fontWeight="normal"
                label={t("Allocation Breakdown")}
                lineHight="32px"
                textAlign={titleAlign}
              />
            </div>
            <div className="mt-[30px] flex flex-col gap-[16px] sm:flex-row">
              <div className="flex justify-center">
                <Button
                  background="prime"
                  label="Tokenomics"
                  icon={whiteLightning}
              />
              </div>
              <div className="flex justify-center">
                <Button
                  background="dark"
                  label="Whitepaper"
                  icon={arrowCircle}
              />
              </div>
            </div>
          </div>
          <div className="relative">
            <HighchartsReact options={totalOptions} highcharts={Highcharts} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[-10]">
              <p className="text-[14px] font-normal leading-normal text-[#FFF]">
                {t("Total supply")}
              </p>
              <p className="max-sm:text-[14px] chart-gradient text-[24px] font-bold leading-normal">
                1,000,000,000
              </p>
              <p className="text-[14px] font-normal leading-normal text-[#FFF]">
                {t("[1 billion] 360 Tokens")}
              </p>
            </div>
          </div>
        </div>
        {/* RoadMap */}
                 {/* <div className="my-[150px]">
          <Text
            fontColor="white"
            fontSize={title}
            label={t("360 Roadmap")}
            fontWeight="bold"
            highlightText={t("Roadmap")}
            highlightColor="prime"
            lineHight="100%"
            textAlign="end"
          />
          <div className="flex w-full justify-end">
            <div className="flex w-[520px]">
              <Text
                fontColor="white"
                fontSize="20px"
                label={t(
                  "We’ve got an even more incredible future ahead with emphasis on user-driven development."
                )}
                fontWeight="normal"
                lineHight="150%"
                textAlign="end"
              />
            </div>
          </div>
          <div ref={main} className="pt-[150px] pb-[200px]">
            <div className="w-[1800px] h-[2px] bg-grey relative rotate-[10deg] mt-[200px] roadmap">
              <div className="absolute left-0 translate-y-[-50%]">
                <div className="relative w-[60px] h-[60px] rounded-[50%] flex justify-center items-center milestone rotate-[-10deg]">
                  <img src={check} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[300px] sm:w-[400px]">
                    <Text
                      fontColor="gradient"
                      fontSize="24px"
                      label={t("Q3 2023")}
                      fontWeight="bold"
                      lineHight="150%"
                    />
                    <div>
                      <ul className="list-disc pl-[30px] text-white text-[16px] font-normal leading-[24px]">
                        <li>{t("Minting of the token")}</li>
                        <li>
                          {t("Finalize documentation and initial audits")}
                        </li>
                        <li>
                          {t("Launch of website and first platform version")}
                        </li>
                        <li>
                          {t(
                            "Early client partnerships in multiple categories"
                          )}
                        </li>
                        <li>
                          {t("Creating a refined strategic concept backlog")}
                        </li>
                        <li>{t("Token sales")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 translate-y-[-50%] translate-x-[600px]">
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center milestone rotate-[-10deg]">
                  <img src={check} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[400px]">
                    <Text
                      fontColor="gradient"
                      fontSize="24px"
                      label={t("Q4 2023")}
                      fontWeight="bold"
                      lineHight="150%"
                    />
                    <div>
                      <ul className="list-disc pl-[30px] text-white text-[16px] font-normal leading-[24px]">
                        <li>{t("Analytics dashboard ")}</li>
                        <li>{t("Staking and vesting")}</li>
                        <li>{t("Liquidity Pool ")}</li>
                        <li>{t("Decentralized Exchange (DEX) ")}</li>
                        <li>{t("Support for merchants ")}</li>
                        <li>
                          {t(
                            "Team expansion (marketing and product development)"
                          )}
                        </li>
                        <li>
                          {t(
                            "Process and method revision for the current organization) "
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 translate-y-[-50%] translate-x-[1200px]">
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center border border-[#38393B] bg-[#1C1D1F] items-center rotate-[-10deg]">
                  <img src={clock} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[400px]">
                    <Text
                      fontColor="white"
                      fontSize="24px"
                      label={t("Q1 2024 ")}
                      fontWeight="bold"
                      lineHight="150%"
                    />
                    <div>
                      <ul className="list-disc pl-[30px] text-grey text-[16px] font-normal leading-[24px]">
                        <li>{t("Affiliate and commerce analytics")}</li>
                        <li>{t("Fiat-On-Ramp")}</li>
                        <li>{t("Escrow Services ")}</li>
                        <li>{t("Wallet Services")}</li>
                        <li>
                          {t(
                            "Launch the first modular product suite portal "
                          )}
                        </li>
                        <li>{t("DeFi partnerships")}</li>
                        <li>{t("Community and investor feedback round")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 translate-y-[-50%] translate-x-[1800px]">
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center border border-[#38393B] bg-[#1C1D1F] rotate-[-10deg]">
                  <img src={clock} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[400px]">
                    <Text
                      fontColor="white"
                      fontSize="24px"
                      label={t("Concept Backlog")}
                      fontWeight="bold"
                      lineHight="150%"
                    />
                    <div>
                      <ul className="list-disc pl-[30px] text-white text-[16px] font-normal leading-[24px]">
                        <li>{t("Soft nodes Validator program ")}</li>
                        <li>{t("Token Vault ")}</li>
                        <li>{t("Multichain support ")}</li>
                        <li>
                          {t(
                            "Farming Continuous development and growth strategies."
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Dapp */}
        <div className="mt-[350px] mb-[150px]">
          <Text
            fontColor="white"
            fontWeight="bold"
            fontSize={title}
            lineHight="100%"
            label={t("360 Web3 are Coming")}
            highlightText={t("Coming")}
            highlightColor="gradient"
            textAlign="center"
          />
          <div className="grid grid-flow-row grid-cols-1 gap-[50px] mt-[24px] justify-center items-center xl:grid-cols-2">
            <div>
              <Text
                fontColor="white"
                fontWeight="normal"
                fontSize={subtitle}
                lineHight="120%"
                label={t(
                  "Launching easy Web3 for your crypto financial. Build to supporting an effortless Web3 Asset management with the best features like:"
                )}
              />
              <div className="mt-[16px]">
                <div className="flex gap-2">
                  <CheckIcon />
                  <Text
                    fontColor="white"
                    fontWeight="normal"
                    fontSize={subtitle}
                    lineHight="120%"
                    label={t("Insighful dashboard")}
                  />
                </div>
                <div className="flex gap-2">
                  <CheckIcon />
                  <Text
                    fontColor="white"
                    fontWeight="normal"
                    fontSize={subtitle}
                    lineHight="120%"
                    label={t("Trade and Staking")}
                  />
                </div>
                <div className="flex gap-2">
                  <CheckIcon />
                  <Text
                    fontColor="white"
                    fontWeight="normal"
                    fontSize={subtitle}
                    lineHight="120%"
                    label={t("Liquidity pool")}
                  />
                </div>
                <div className="flex gap-2">
                  <CheckIcon />
                  <Text
                    fontColor="white"
                    fontWeight="normal"
                    fontSize={subtitle}
                    lineHight="120%"
                    label={t("Earn with Affiliate Marketing Program")}
                  />
                </div>
                <div className="flex gap-2">
                  <CheckIcon />
                  <Text
                    fontColor="white"
                    fontWeight="normal"
                    fontSize={subtitle}
                    lineHight="120%"
                    label={t("Vesting and Claiming")}
                  />
                </div>
                <div
                  className="mt-[24px] flex justify-center w-fit xl:justify-start"
                  onClick={launchDapp}
                >
                  <Button
                    background="prime"
                    label={t("Launch app")}
                    icon={arrowCircle}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={macboook} alt="macbook" />
            </div>
          </div>
        </div>
        {/* parnters */}
        <div id="partners" className="my-[150px]">
          <Text
            fontColor="white"
            fontWeight="bold"
            fontSize={title}
            lineHight="100%"
            label={t("360 Partners")}
            highlightText={t("Partners")}
            highlightColor="gradient"
            textAlign="center"
          />
          <div className="mt-[64px] flex flex-wrap gap-6 justify-center items-center">
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={alcacor} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={zanyShy} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={scalefy} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={caibo} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={innov} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={scratch} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={bringYou} alt="alcacor" className="p-[20px]" />
            </div>
            <div className="bg-dark rounded-[8px] border border-darkgrey">
              <img src={alca} alt="alcacor" className="p-[20px]" />
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="my-[150px] xl:flex xl:justify-between xl:gap-[64px]">
          <div className="flex flex-col gap-[16px] py-[20px] xl:min-w-[420px]">
            <Text
              fontColor="white"
              fontSize={title}
              fontWeight="bold"
              lineHight="100%"
              label={t("How does It Work?")}
              textAlign={titleAlign}
            />
            <Text
              fontColor="white"
              fontSize={subtitle}
              fontWeight="normal"
              lineHight="120%"
              label={t("Frequently Asked Questions")}
              textAlign={titleAlign}
            />
          </div>
          <div className="">
            <FAQ />
          </div>
        </div>
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <div className="modal-style w-[80%] xl:w-[60%]">
            <div className="h-[400px] overflow-y-scroll p-[10px]" id="modal">
              <p className="text-prime font-bold leading-normal text-base sm:text-[24px] lg:text-[28px] 2xl:text-[32px]">
                {t("How can I use the Wallet Browser for the 360 Token?")}
              </p>
              <div className="text-white leading-normal font-semibold text-[14px] sm:text-[20px] lg:text-[24px] 2xl:text-[28px]">
                <p>
                  {t(
                    "To use the Wallet Browser for the 360 Token, follow these steps:"
                  )}
                </p>
                <br />
                <ul className="list-disc pl-[20px] sm:pl-[40px]">
                  <li>
                    {t(
                      "Install a compatible wallet browser extension like MetaMask or Trust Wallet"
                    )}
                  </li>
                  <li>
                    {t("Go to the wallet´s browser and not Google or Safari.")}
                  </li>
                  <li>
                    {t(
                      "Connect your wallet to our platform by selecting the network Polygon and logging in with your wallet credentials."
                    )}
                  </li>
                  <li>
                    {t(
                      "Once connected, you can access the features and functionalities associated with the 360 Token, including buying, selling, and managing your tokens."
                    )}
                  </li>
                </ul>
                <br />
              </div>
              <div
                className="text-prime text-center font-bold text-[18px] 2xl:text-[24px]"
                onClick={handleClose}
              >
                <p className="hover:cursor-pointer">{t("OK")}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <Footer labelSize={title} />
    </>
  );
};

export default Landing;
