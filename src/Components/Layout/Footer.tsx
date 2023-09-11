import { useTranslation } from "react-i18next";
import { Button, Text } from "../Common/common";
import { telegram } from "../../Const/Images";
import React from "react";

interface FooterProps {
  labelSize: string; 
}

const Footer: React.FC<FooterProps> = ({ labelSize }) => {
  const { t } = useTranslation();
  return (
    <footer className="mb-[60px] px-[30px] md:px-[60px] xl:px-[120px]">
      <div>
        <Text
          fontColor="white"
          fontSize={labelSize}
          fontWeight="bold"
          lineHight="100%"
          label={t("Join our Telegram community today")}
          textAlign="center"
        />
      </div>
      <div className="mt-[50px] flex justify-center">
        <a href="https://t.me/foster360" rel="noreferrer" target="_blank">
          <Button background="prime" label="Join now" icon={telegram}/>
        </a>
      </div>
      <div className="mt-[50px]">
        <div>
          <Text
            fontColor="white"
            fontSize="24px"
            fontWeight="normal"
            lineHight="32px"
            label={t("360. All rights registered")}
            textAlign="center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
