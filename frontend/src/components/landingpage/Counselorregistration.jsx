import { card } from '../../assets';
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
      <img src={card} alt="card" className="w-[100%] h-[100%] sm:w-[500px] sm:ml-auto sm:mr-0 mr-auto" />

    </div>





  </section>
)


export default Counselorregistration