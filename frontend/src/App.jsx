import styles from './style'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import DiagnosticTestPage from './components/Diagnose Test/DiagnosticTestPage'
import TestQuestion from './components/Diagnose Test/TestQuestion';
import ClientProfile from './pages/client/ClientProfile'
import ClientDashboard from './pages/client/ClientDashboard'
import ClientCounsellors from './pages/client/ClientCounsellors'
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile';
import ChatApp from './components/Chat/Message';
import CounsellorProfile from './pages/counsellor/CounsellorProfile'
import ClientMusic from './pages/client/ClientMusic';
import ClientMeditation from './pages/client/ClientMeditation';
import CounsellorLayout from "./components/shared/CounsellorLayout";
import CounsellorDashboard from "./pages/counsellor/CounsellorDashboard"
import TestEmail from './components/Diagnose Test/TestEmail';
import Blogs from './pages/client/Blogs';






import { Navbar, Hero, Stats, Diagnosetest, Aboutus, Counselorregistration, Testimonials, Clients, CTA, Footer } from './components';











const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="/message" element={<ChatApp />} />
          <Route path="clientprofile" element={<ClientProfile />} />
          <Route path="clientcounsellors" element={<ClientCounsellors />} />
          <Route path="clientcounsellors/profile" element={<ClientCounsellorProfile />} />
          <Route path="counsellordashboard" element={<CounsellorDashboard />} />
          <Route path='clientmusic' element={<ClientMusic />} />
          <Route path='clientmeditation' element={<ClientMeditation />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
        <Route path="/counsellor" element={<CounsellorLayout />}>
          <Route index element={<CounsellorDashboard />} />
          <Route path="counsellorprofile" element={<CounsellorProfile />} />
        </Route>
        <Route path="/diagnostictest" element={<DiagnosticTestPage />}>
        </Route>
        <Route path="/test-questions" element={<TestQuestion />}>
        </Route>
        <Route path="/testemail" element={<TestEmail />}>
        </Route>
        <Route path="login" element={<div>this is login page</div>} />
        <Route path="logout" element={<div>this is logout page</div>} />
      </Routes>
    </Router>



    {/* <div className="w-full overflow-hidden bg-primary">
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
    </div></> */}

  </>
);


export default App