import styles from "../styles";

const WhyFeatures = ({ imgUrl, subtitle
}) => (
  <div className={`${styles.flexCenter} flex-row mb-4`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
    <div class="relative">
      <img src="./loading.svg" alt="Image" loading="lazy" class="opacity-0 transition-opacity duration-300 ease-in-out" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
    </div>
      <img src={imgUrl} className="h-[50%] w-[50%]"/>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[16px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default WhyFeatures;
