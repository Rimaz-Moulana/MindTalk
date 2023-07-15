import styles from './style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import ClientProfile from './pages/client/ClientProfile'
import Dashboard from './pages/client/Dashboard'
import ClientCounsellors from './pages/client/ClientCounsellors';





import { Navbar, Hero, Stats, Diagnosetest, Aboutus, Counselorregistration, Testimonials, Clients, CTA, Footer } from './components';











const App = () => (
  <><Router>
  <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clientprofile" element={<ClientProfile />} />
          <Route path="clientcounsellors" element={<ClientCounsellors />} />
      </Route>
      <Route path="login" element={<div>this is login page</div>}/>
      <Route path="logout" element={<div>this is logout page</div>} />
  </Routes>
</Router>
<div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Diagnosetest />
          <Aboutus />
          <Counselorregistration />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div></>


);


export default App