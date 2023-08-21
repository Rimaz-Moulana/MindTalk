import { counsellor } from '../../assets';
import styles, { layout } from '../../style';
import Button from '../Button';


const Counselorregistration = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Get Registered <br className="sm:block hidden" />

        as a Counsellor now!
      </h2>


      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>


      </p>

      <Button styles="mt-10" />
    </div>



    <div className={layout.sectionImg}>
      <img src={counsellor} alt="counsellor" className=" block z-[5]   w-full rounded-lg" />

    </div>





  </section>
)


export default Counselorregistration