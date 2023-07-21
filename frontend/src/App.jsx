import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatApp from './components/Chat/Message';
import DiagnosticTestPage from './components/Diagnose Test/DiagnosticTestPage';
import TestEmail from './components/Diagnose Test/TestEmail';
import TestQuestion from './components/Diagnose Test/TestQuestion';
import CounsellorLayout from "./components/shared/CounsellorLayout";
import Layout from './components/shared/Layout';
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile';
import ClientCounsellors from './pages/client/ClientCounsellors';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientMeditation from './pages/client/ClientMeditation';
import ClientMusic from './pages/client/ClientMusic';
import ClientProfile from './pages/client/ClientProfile';
import CounsellorDashboard from "./pages/counsellor/CounsellorDashboard";
import CounsellorProfile from './pages/counsellor/CounsellorProfile';

















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