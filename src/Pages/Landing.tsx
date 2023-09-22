/** Import standard node module*/

import { useEffect, useState, useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { Tilt } from "react-tilt";
import { Fade } from "react-awesome-reveal";

/** Import custom react component*/

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { Button, Text } from "../Components/Common/common";
import FeatureCard from "../Components/Landing/Features/FeatureCard";
import { CheckIcon } from "../Components/Landing/Dapp.tsx/CheckIcon";
import FAQ from "../Components/Landing/FAQ/FAQ";

/** Import consts*/

import * as images from "../Const/Images";
import { BaseURL } from "../Const/BaseURL";

/** Import context*/

import { useLangContext } from "../Context/LanguageContext";

/** Import style*/

import "./Landing.css";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const main = useRef(null);
  const { t } = useTranslation();
  const { langCode } = useLangContext();
  const [folder, setFolder] = useState<string>("/en_docs");
  const [titleAlign, setTitleAlign] = useState<string>("start");
  const [title, setTitle] = useState<string>("80px");
  const [subtitle, setSubtitle] = useState<string>("32px");
  const [pieChartLength, setPieChartLength] = useState<number>(300);
  const totalOptions = useMemo(() => {
    const _totalOptions: Highcharts.Options = {
      credits: {
        enabled: false,
      },
      chart: {
        backgroundColor: "transparent",
        plotShadow: false,
        margin: 0,
        width: pieChartLength,
        height: pieChartLength,
      },
      title: {
        text: "",
      },
      tooltip: {
        pointFormat: "<b>{point.name}</b>: {point.percentage:.1f} %",
        useHTML: true,
        backgroundColor: "none",
        style: {
          color: "#FFFFFF",
          fontSize: "24px"
        },
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            distance: -30,
            enabled: false,
          },
          startAngle: 225,
          center: ["50%", "50%"],
          borderColor: "transparent",
        },
      },
      series: [
        {
          type: "pie",
          name: "Pool Value",
          innerSize: "70%",
          data: [
            {
              y: 40,
              name: "Public sale",
              sliced: true,
              color: "#EB4899",
            },
            {
              y: 10,
              name: "Team",
              color: "#8C3DE6",
            },
            {
              y: 10,
              name: "Treasury",
              color: "#F5AC37",
            },
            {
              y: 10,
              name: "Marketing",
              color: "#28E0B9",
            },
            {
              y: 15,
              name: "Airdrop",
              color: "#1C1D1F",
            },
            {
              y: 15,
              name: "Liquidity pool",
              color: "#47484A",
            },
          ],
        },
      ],
    };
    return _totalOptions;
  }, [pieChartLength]);

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
      setTitle("36px");
      setSubtitle("20px");
      setPieChartLength(300);
    } else if (innerWidth < 1280) {
      setTitle("60px");
      setSubtitle("28px");
      setPieChartLength(500);
    } else {
      setTitle("80px");
      setSubtitle("32px");
      setPieChartLength(600);
    }
  };

  const openTokenomics = () => {
    window.open(BaseURL + folder + "/tokenomics.pdf");
  }

  const openWP = () => {
    window.open(BaseURL + folder + "/whitepaper.pdf");
  }


  useEffect(() => {
    if (langCode === "cn") {
      setFolder("/cn_docs");
    } else if (langCode === "fr") {
      setFolder("/fr_docs");
    } else if (langCode === "en") {
      setFolder("/en_docs");
    }
  }, [langCode]);

  useLayoutEffect(() => {
    let tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap",
        start: 'center center',
        end: 'bottom top',
        scrub: 5,
      },
    });
    const ctx = gsap.context(() => {
      tl.to(".roadmap", {
          x: -1800,
      });
    }, main);
    return () => {
      ctx.revert();
      tl.progress(0).kill();
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="mx-[20px] md:mx-[60px] xl:mx-[120px]">
        {/* Welcome */}
        <div
          id="home"
          className="flex flex-col justify-center gap-[100px] items-center my-[100px] xl:flex-row xl:justify-between"
        >
          <div className="relative flex flex-col justify-between items-center gap-[50px] xl:items-start">
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
            <div className="ease-out duration-200 hover:scale-105">
              <a href="https://360dapp.xyz/trade" rel="noreferrer" target="_blank">
                <Button
                  background="prime"
                  label={t("Buy 360")}
                  icon={images.whiteLightning}
                />
              </a>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0 z-[-1000] scale-150">
              <div className="flex justify-center w-full h-full relative">
                <video loop={true} autoPlay={true} muted playsInline className="outline-none border-none">
                  <source src={images.sphere} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img src={images.macbook} alt="macbook" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-[10px] py-[56px] flex flex-col justify-between gap-[32px] rounded-[10px] max-w-[900px] bg-dark xl:px-[40px] relative">
              <div className="absolute top-[10px] left-[20px] p-2 bg-black border-darkgrey rounded-[8px]">
                <img src={images.lightning} alt="lightning" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="w-[250px] mx-auto lg:w-[800px]">
                  <Text
                    fontColor="white"
                    fontSize={subtitle}
                    fontWeight="bold"
                    lineHight="100%"
                    label={t("Current sales")}
                    textAlign="center"
                  />
                </div>
                <div className="w-[250px] mx-auto sm:w-[500px]">
                  <Text
                    fontColor="white"
                    fontSize={subtitle}
                    fontWeight="bold"
                    lineHight="100%"
                    label={t("round 2")}
                    highlightText="2"
                    highlightColor="prime"
                    textAlign="center"
                  />
                </div>
              </div>
              <div className="rounded-[12px] bg-[#292929] progressbar w-[250px] mx-auto h-[24px] sm:w-[376px]">
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
              <div className="shadow-effects relative h-full">
                <FeatureCard
                  src={images.agreement}
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
              <div className="shadow-effects relative h-full">
                <FeatureCard
                  src={images.icon}
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
              <div className="shadow-effects relative h-full">
                <FeatureCard
                  src={images.document}
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
          className="my-[150px] flex flex-col gap-[64px] justify-between items-center xl:flex-row relative"
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
              <div className="flex justify-center ease-out duration-200 hover:scale-105" onClick={openTokenomics}>
                <Button
                  background="prime"
                  label="Tokenomics"
                  icon={images.whiteLightning}
              />
              </div>
              <div className="flex justify-center ease-out duration-200 hover:scale-105" onClick={openWP}>
                <Button
                  background="dark"
                  label="Whitepaper"
                  icon={images.arrowCircle}
              />
              </div>
            </div>
          </div>
          <div className="relative">
            <HighchartsReact options={totalOptions} highcharts={Highcharts} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[-10]">
              <p className="text-[30px] font-normal leading-normal text-[#FFF] sm:text-[48px]">
                {t("Total supply")}
              </p>
              <p className="text-[26px] chart-gradient font-bold leading-normal sm:text-[48px]">
                1,000,000,000
              </p>
              <p className="font-normal leading-normal text-[#FFF] sm:text-[28px]">
                {t("[1 billion] 360 Tokens")}
              </p>
            </div>
          </div>
        </div>
        {/* RoadMap */}
        <div id="roadmap" className="my-[150px]">
          <Text
            fontColor="white"
            fontSize={title}
            label={t("360 Roadmap")}
            fontWeight="bold"
            highlightText={t("Roadmap")}
            highlightColor="gradient"
            lineHight="100%"
            textAlign="end"
          />
          <div className="flex w-full justify-end">
            <div className="flex w-[520px]">
              <Text
                fontColor="white"
                fontSize="20px"
                label={t(
                  "Join us on an incredible journey in web3 with emphasis on user-driven development."
                )}
                fontWeight="normal"
                lineHight="150%"
                textAlign="end"
              />
            </div>
          </div>
          <div ref={main} className="pt-[150px] pb-[200px]">
            <div className="w-[1800px] h-[2px] bg-grey relative rotate-[15deg] mt-[200px] roadmap">
              <div className="absolute left-0 translate-y-[-50%]">
                <div className="relative w-[60px] h-[60px] rounded-[50%] flex justify-center items-center milestone rotate-[-15deg]">
                  <img src={images.check} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[300px] sm:w-[400px] bg-dark rounded-[24px] p-4 border border-darkgrey">
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
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center border border-[#38393B] bg-[#1C1D1F] items-center rotate-[-15deg]">
                  <img src={images.clock} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[300px] sm:w-[400px] bg-dark rounded-[24px] p-4 border border-darkgrey">
                    <Text
                      fontColor="white"
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
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center border border-[#38393B] bg-[#1C1D1F] items-center rotate-[-15deg]">
                  <img src={images.clock} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[300px] sm:w-[400px] bg-dark rounded-[24px] p-4 border border-darkgrey">
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
                <div className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center border border-[#38393B] bg-[#1C1D1F] rotate-[-15deg]">
                  <img src={images.clock} alt="check" />
                  <div className="absolute top-[84px] left-0 w-[300px] sm:w-[400px] bg-dark rounded-[24px] p-4 border border-darkgrey">
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
        </div>
        {/* Dapp */}
        <div className="mt-[350px] mb-[150px]">
          <Text
            fontColor="white"
            fontWeight="bold"
            fontSize={title}
            lineHight="100%"
            label={t("Get ready for easy web3 with 360")}
            highlightText={t("web3")}
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
                  "Launching easy web3 for your crypto finances. Built to support effortless web3 asset management with features like:"
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
                  className="mt-[24px] flex justify-center w-fit xl:justify-start ease-out duration-200 hover:scale-105"
                  onClick={launchDapp}
                >
                  <a href="https://360dapp.xyz" rel="noreferrer" target="_blank">
                    <Button
                      background="prime"
                      label={t("Launch app")}
                      icon={images.arrowCircle}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={images.macboook} alt="macbook" />
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
          <div className="mt-[64px] relative flex flex-wrap gap-6 justify-center items-center">
            <Fade duration={2000} direction="right">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.alcacor} alt="alcacor" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="right">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.zanyShy} alt="zanyShy" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="right">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.scalefy} alt="scalefy" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="right">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.caibo} alt="caibo" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="left">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.innov} alt="innov" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="left">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.scratch} alt="scratch" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="left">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.bringYou} alt="bringYou" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={2000} direction="left">
              <div className="bg-dark rounded-[8px] border border-darkgrey cursor-pointer">
                <img src={images.alca} alt="alca" className="p-[20px]" />
              </div>
            </Fade>
            <Fade duration={3000}>
              <div className="glow-effects absolute bottom-0 right-0 translate-y-[100%] w-[500px] h-[500px] z-[-15]"></div>
            </Fade>
          </div>
        </div>
        {/* FAQ */}
        <div id="faq" className="my-[150px] xl:flex xl:justify-between xl:gap-[64px]">
          <div className="flex flex-col gap-[16px] py-[20px] h-fit xl:min-w-[420px]">
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
      </div>
      <Footer labelSize={title} />
    </>
  );
};

export default Landing;