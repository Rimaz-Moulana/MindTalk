import { features } from '../../constants';
import styles, { layout } from '../../style';
import Button from '../Button';
// import test from '../../assets';
import { discount, test } from '../../assets';



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`hover:bg-white flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" :"mb-0"} feature-card`}>

    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black `}>

      <img src={icon} alt="icon" className="w-[50%] h=[50%] object-contain" />


    </div> */}


    {/* <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}
      </h4>

      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mb-1">
        {content}
      </p>

    </div> */}


  </div>
)











const Diagnosetest = () => {
  return (
    <section id="features" className={layout.section}>

      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2}>Empowering tools, personalized activities, <br className="sm:block hidden" />
          and a supportive community awaits.</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Transform your mind, unlock your potential. Experience the power of MindTalk. Find peace, resilience, and joy through personalized activities and a supportive community. Start your journey now.
        </p>


        {/* <Button style="mt-10" /> */}
        <button type="button" className={`py-4 px-6  font-poppins font-medium text-[18px] text-primary ${styles} rounded-[10px] text-white bg-sky-800 `}>
          Take Diagnose Test
        </button>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <div className="w-100% h-100%">
      <img src={test} alt="billing" className=" block z-[5]   w-full rounded-lg"  />
      </div>




      <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient" />

    </div>


      {/* <div className={`${layout.sectionImg} flex-col bg-sky-100 rounded-[20px]`}>

        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}


      </div> */}

    </section>
  )
}

export default Diagnosetest