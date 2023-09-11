import { Text, Tooltip } from "../../Common/common";

type Props = {
  src: string;
  label: string;
  labelAlign: string;
  labelSize: string;
  lists: string[];
};

const FeatureCard = ({ src, label, lists, labelAlign, labelSize }: Props) => {
  return (
    <div className="flex flex-col items-center gap-[24px] p-[32px] rounded-[24px] border border-darkgrey text-white bg-[#1C1D1F] hover:cursor-pointer feature-card-hover">
      <div className="flex justify-center items-center bg-black p-8 w-[164px] h-[164px] rounded-[24px] relative">
        <img src={src} alt="feature" />
        {label === "Liquidity Provision & Staking" && (
          <>
            <div className="absolute top-0 left-0 translate-x-[-40%] translate-y-[100%]">
              <Tooltip
                label="Get Reward"
                pinColor="secondary"
                pinPosition="right bottom"
              />
            </div>
            <div className="absolute top-[0] right-[30px] translate-x-[100%] translate-y-[-50%]">
              <Tooltip
                label="Earn"
                pinColor="yellow"
                pinPosition="left bottom"
              />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-[30%] translate-x-[10%]">
              <Tooltip
                label="Extra token"
                pinColor="tertiary2"
                pinPosition="left top"
              />
            </div>
          </>
        )}
        {label === "Airdrop Strategy" && (
          <>
            <div className="absolute top-0 right-0 translate-x-[30%] translate-y-[-50%]">
              <Tooltip
                label="750 million tokens"
                pinColor="prime"
                pinPosition="left bottom"
              />
            </div>
          </>
        )}
        {label === "Affiliate Marketing Program" && (
          <>
            <div className="absolute top-0 left-0 translate-x-[-40%]">
              <Tooltip
                label="Up to 1000 tokens"
                pinColor="yellow"
                pinPosition="right bottom"
              />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-[60%] translate-y-[-30px]">
              <Tooltip
                label="Earn Commission"
                pinColor="prime"
                pinPosition="left top"
              />
            </div>
            <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[30%]">
              <Tooltip
                label="Revenue Shares"
                pinColor="tertiary2"
                pinPosition="right top"
              />
            </div>
          </>
        )}
      </div>
      <div>
        <Text
          fontColor="white"
          fontSize={labelSize}
          fontWeight="semibold"
          lineHight="120%"
          label={label}
          textAlign={labelAlign}
        />
        <div className="mt-2 pl-[30px]">
          <ul className="list-disc">
            {lists.map((list, index) => {
              return (
                <li
                  key={index}
                  className="text-base font-normal leading-[24px] text-grey"
                >
                  {list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
