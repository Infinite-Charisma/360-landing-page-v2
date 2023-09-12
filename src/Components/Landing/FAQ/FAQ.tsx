import { useState, useEffect } from "react";
import Faq from "react-faq-component";
import { useTranslation } from "react-i18next";
import { useLangContext } from "../../../Context/LanguageContext";
import "./FAQ.css";
import { BaseURL } from "../../../Const/BaseURL";

const styles = {
  bgColor: "transparent",
  titleTextColor: "#FFFFFF",
  rowTitleColor: "#FFFFFF",
  rowContentColor: "#FFFFFF",
  arrowColor: "#FFFFFF",
  transitionDuration: "1s",
};

const config = {
  animate: true,
  tabFocus: true,
};

const FAQ = () => {
  const { t } = useTranslation();
  const [folder, setFolder] = useState<string>("/en_docs");
  const { langCode } = useLangContext();

  useEffect(() => {
    if (langCode === "cn") {
      setFolder("/cn_docs");
    } else if (langCode === "fr") {
      setFolder("/fr_docs");
    } else if (langCode === "en") {
      setFolder("/en_docs");
    }
  }, [langCode]);

  const data = {
    rows: [
      {
        title: t("What happens when you buy the 360 Token?"),
        content: t(
          "When you buy the 360 Token, you become a holder of the token and gain access to various features and benefits. The purchased amount will be visible on your dashboard when you connect your wallet. The tokens and your affiliate status will be securely stored in a smart contract until the token launch, at which point the tokens will be released to your wallet."
        ),
      },
      {
        title: t("How can I become an affiliate for the 360 Token?"),
        content: t(
          "To become an affiliate for the 360 Token, you need to follow a simple process. Purchase a minimum of 1 token, and you will automatically become an affiliate."
        ),
      },
      {
        title: t("What information should I know about being an affiliate?"),
        content: t(
          "As an affiliate, You have the opportunity to earn rewards based on the total purchases made by your referred customers. The affiliate dashboard at 360dapp.xyz provides essential information such as your unique referral link, a list of wallets that have used your affiliate link, and the number of tokens bought by each person. A service will also be introduced to show your progress toward reaching each reward level."
        ),
      },
      {
        title: t("What rewards are offered through the Affiliate Program?"),
        content: (
          <div>
            <p>
              {t(
                "The Affiliate Program offers fantastic rewards based on the total purchases made by your referred customers. The reward structure is as follows:"
              )}
            </p>
            <br />
            <ul>
              <li>{t("Total sales of $5,000: 5% reward tokens")}</li>
              <li>{t("Total sales of $10,000: 10% reward tokens.")}</li>
              <li>{t("Total sales of $25,000: 15% reward tokens.")}</li>
              <li>{t("Total sales of $40,000: 20% reward tokens.")}</li>
            </ul>
            <br />
            <p>
              {t(
                "All reward tokens earned, up to 20%, with a total sale of a minimum of $40 000 will be calculated as a percentage (5-20%) and vested for affiliates in October 2023, after the sales rounds have concluded."
              )}
            </p>
          </div>
        ),
      },
      {
        title: t("How can I use the Wallet Browser for the 360 Token?"),
        content: (
          <div>
            <p>
              {t(
                "To use the Wallet Browser for the 360 Token, follow these steps:"
              )}
            </p>
            <br />
            <ul>
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
        ),
      },
      {
        title: t("What are failed transactions on Polygon?"),
        content: t(
          "Failed transactions on Polygon occur when a transaction on the Polygon network cannot be completed successfully. This can happen due to various reasons, such as insufficient gas fees (also known as 'gwei'), network congestion, or invalid transaction parameters. If you encounter a failed transaction, you may need to retry the transaction with an appropriate gas fee or contact our support team for assistance."
        ),
      },
      {
        title: t("How can I buy the 360 Token?"),
        content: (
          <div>
            <p>{t("To buy the 360 Token, follow these steps:")}</p>
            <br />
            <ul className="">
              <li>
                {t(
                  "Ensure that your mobile system and apps are updated to the latest versions for optimal compatibility."
                )}
              </li>
              <li>
                {t("Go through and navigate to the")}{" "}
                <a
                  href={BaseURL + folder + "/360token.pdf"}
                  className="text-[#FF1EB5]"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("Buy Token")}
                </a>{" "}
                {t("pdf")}.
              </li>
              <li>
                {t(
                  "Connect your wallet to our platform and select the desired amount of 360 Tokens you wish to purchase."
                )}
              </li>
              <li>
                {t("Follow the instructions")}{" "}
                <a
                  href={BaseURL + folder + "/360token.pdf"}
                  className="text-[#FF1EB5]"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("in the pdf")}
                </a>{" "}
                {t(
                  "to complete the transaction securely. Make sure to review the transaction details before confirming."
                )}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: t("How do I set up the gas fee (gwei) for transactions?"),
        content: (
          <div>
            <p>
              {t(
                "To set up the gas fee (gwei) for transactions, please follow these steps:"
              )}
            </p>
            <br />
            <ul>
              <li>
                {t(
                  "Open your wallet browser extension (e.g., MetaMask or Trust Wallet) and navigate to the settings or transaction preferences."
                )}
              </li>
              <li>
                {t(
                  "Look for the gas fee adjustment section and choose the appropriate gas price or customize it based on your preferences."
                )}
              </li>
              <li>
                {t(
                  "Please note that selecting a higher gas fee will likely result in faster transaction confirmation but may incur higher costs. Selecting a lower gas fee may result in slower transaction confirmation."
                )}
              </li>
            </ul>
            <br />
            <p>
              {t(
                "If you have any further questions or need assistance with any of the above, please don't hesitate to contact our support team in telegram."
              )}
            </p>
          </div>
        ),
      },
    ],
  };

  return <Faq data={data} styles={styles} config={config} />;
};

export default FAQ;
