import { Fade } from "react-awesome-reveal";

type Props = {
  label: string;
  lists: string[];
}

const LeftRoadmapList: React.FC<Props> = ({ label, lists }) => {
  return (
    <>
      <div className="hidden xl:block">
        <div className="flex roadmap-button-shadow">
          <button className="w-[382px] text-[32px] relative text-white gradient h-[61px] px-[16px] py-[8px] rounded-[4px] bg-[#121212] border-white border border-gradient ">
            {label}
            <Fade direction="left" triggerOnce={true}>
              <div className="absolute left-0 translate-x-[-100%] top-[30px] translate-y-[-50%] flex items-center text-[18px]">
                <div className="p-[24px] rounded-[4px] border w-[280px] shadow-feature-list border-gradient feature-list-shadow">
                  <ul className="list-disc text-start pl-[24px]">
                    {lists.map((list, index) => {
                      return <li key={index}>{list}</li>;
                    })}
                  </ul>
                </div>
                <div className="w-[120px] h-[9px] horizontal-link-stick"></div>
              </div>
            </Fade>
          </button>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="text-white">
          <button className="relative text-white gradient h-[61px] px-[16px] py-[8px] rounded-[4px] bg-[#121212] border-white border border-gradient text-base w-[100px] translate-x-[-125%]  sm:translate-x-[-100%] sm:w-[150px] sm:text-[20px] xl:text-[32px] roadmap-button-shadow">
            {label}
            <div className="absolute top-[30px] translate-y-[-50%] left-[100px] sm:left-[150px] flex justify-center items-center">
              <div className="w-[20px] h-[9px] horizontal-link-stick" />
              <Fade direction="right" triggerOnce={true}>
                <div className="p-[24px] rounded-[4px] border w-[240px] border-gradient feature-list-shadow sm:w-[280px]">
                  <ul className="list-disc text-start text-[16px] pl-[20px] sm:pl-[24px]  sm:text-[18px]">
                    {lists.map((list, index) => {
                      return <li key={index}>{list}</li>;
                    })}
                  </ul>
                </div>
              </Fade>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftRoadmapList;
