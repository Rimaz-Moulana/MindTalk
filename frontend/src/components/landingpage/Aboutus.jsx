import { apple, bill, google } from '../../assets';
import styles, { layout } from '../../style';

const Aboutus = () => (
  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />




      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full green__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />


    </div>



    <div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>Be in Charge <br className="sm:block hidden" />of yourself.</h2>


      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Take charge of your happiness and embrace joy with MindTalk. Empower yourself with personalized activities and join a supportive community. Start your journey to a brighter future today.
      </p>


      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">


        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />


      </div>




    </div>




  </section>
)


export default Aboutus