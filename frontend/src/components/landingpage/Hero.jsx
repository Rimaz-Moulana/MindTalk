import { discount, robot } from '../../assets';
import styles from '../../style';
import GetStarted from '../GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gracient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

        <p className={`${styles.paragraph}ml-2`}>
          <span className="text-black">20%</span> Discount For {" "}
          <span className="text-black">1 Month Premium </ span> Account

        </p>
      </div>


      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
          <span className="text-gradient">MindTalk </span> {" "} <br />
          Healing hearts,  Nuturing minds <br className="sm-block hidden" /> {" "}

        </h1>



        <div className="ss:flex hidden md:mr-4 mr-0">
          {/* <GetStarted /> */}

        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full">


        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover MindTalk, your path to inner peace and happiness. Unleash the power of your mind with our personalized activities, evidence-based techniques, and a supportive community. Track your progress and embark on a journey towards a brighter future. Start your MindTalk experience today.
        </p>

      </h1>

    </div>



    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <div className="w-100% h-100%">
      <img src={robot} alt="billing" className=" block z-[5]   w-full rounded-lg"  />
      </div>




      <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient" />

    </div>



    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}





    </div>









  </section>



)


export default Hero