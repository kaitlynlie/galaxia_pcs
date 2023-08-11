import styles from "../styles";

const WhyFeatures = ({ imgUrl, subtitle
}) => (
  <div className={`${styles.flexCenter} flex-row mb-4`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} className="h-[50%] w-[50%]" onLoad={() => setCarLoad(false)}/>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[16px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default WhyFeatures;
