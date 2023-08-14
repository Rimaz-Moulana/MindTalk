import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ChatApp from './components/Chat/Message'
import DiagnosticTestPage from './components/Diagnose Test/DiagnosticTestPage'
import TestEmail from './components/Diagnose Test/TestEmail'
import TestQuestion from './components/Diagnose Test/TestQuestion'
import CounsellorLayout from './components/shared/CounsellorLayout'
import ClientLayout from './components/shared/ClientLayout'
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile'
import ClientCounsellors from './pages/client/ClientCounsellors'
import ClientMeditation from './pages/client/ClientMeditation'
import ClientMusic from './pages/client/ClientMusic'
import ClientProfile from './pages/client/ClientProfile'
// import CounsellorDashboard from './pages/counsellor/CounsellorDashboard'
import AdminLayout from './components/AdminDashboard/AdminLayout'
import TransHistory from './components/Payments/TransactionHistory'
import WalletLayout from './components/Payments/WalletLayout'
import Wallet from './components/Payments/wallet'
import ModeratorLayout from './components/shared/ModeratorLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserHandle from './pages/Admin/UserHandle'
import Blogs from './pages/Blogs'
import Landingpage from './pages/Landingpage'
import PostBlog from './pages/PostBlog'
import ClientAppointments from './pages/client/ClientAppointments'
import ClientDashboard from './pages/client/ClientDashboard'
import CounsellorAppointments from './pages/counsellor/CounsellorAppointments'
import CounsellorClientProfile from './pages/counsellor/CounsellorClientProfile'
import CounsellorClients from './pages/counsellor/CounsellorClients'
import CounsellorDoctors from './pages/counsellor/CounsellorDoctors'
import CounsellorHome from './pages/counsellor/CounsellorHome'
import CounsellorProfile from './pages/counsellor/CounsellorProfile'
import ModeratorDashboard from './pages/moderator/ModeratorDashboard'
// import Login2 from './pages/Loging2'
import SignInSignUpForm from './components/LoginSignup/login'
import Register from './components/LoginSignup/register'
import AdminCrudClient from './pages/Admin/AdminCrudClient'
import AdminCrudCounselors from './pages/Admin/AdminCrudCounselors'
import AdminCrudDoctors from './pages/Admin/AdminCrudDoctors'
import AdminCrudModerators from './pages/Admin/AdminCrudModerators'
import AdminCrudUser from './pages/Admin/AdminCrudUser'
import ClientCounsellorAppointments from './pages/client/ClientCounsellorAppointments'
import CounsellorRegForm from './pages/counsellor/CounsellorRegForm'
import RegisterClient from './pages/counsellor/CounsellorRegisterClient'
import ModeratorUserHandle from './pages/moderator/ModeratorUserHandle'
import ModeratorMusic from './pages/moderator/ModeratorMusic'
import Loginn from './components/LoginSignup/Loginn'
import RequireAuth from './components/LoginSignup/RequireAuth'
import { AuthProvider } from './context/AuthProvider'

const ROLES = {
  'Client': 'client',
  'Admin': 'admin',
  'Moderator': 'moderator',
  'Counsellor': 'counselor',
};



const App = () => (
  <>
    <AuthProvider>
      <Router>

        <Routes>
          {/* Routes that don't require authentication */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register />} />

          {/* Routes that require authentication */}

          <Route path="/client" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="message" element={<ChatApp />} />
            <Route path="clientprofile" element={<ClientProfile />} />
            <Route path="clientcounsellors" element={<ClientCounsellors />} />
            <Route path="clientcounsellors/profile" element={<ClientCounsellorProfile />} />
            <Route path='clientmusic' element={<ClientMusic />} />
            <Route path='clientmeditation' element={<ClientMeditation />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/postblog" element={<PostBlog />} />
            <Route path='clientappointments' element={<ClientAppointments />} />
            <Route path='clientcounsellors/appointments' element={<ClientCounsellorAppointments />} />
          </Route>


          <Route path="/wallet" element={<WalletLayout />}>
            <Route index element={<Wallet />} />
            <Route path="/wallet/transhistory" element={<TransHistory />} />
          </Route>


          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/userhandle" element={<UserHandle />} />
            <Route path="/admin/user" element={<AdminCrudUser />} />
            <Route path="/admin/counselors" element={<AdminCrudCounselors />} />
            <Route path="/admin/moderators" element={<AdminCrudModerators />} />
            <Route path="/admin/doctors" element={<AdminCrudDoctors />} />
            <Route path="/admin/clients" element={<AdminCrudClient />} />
          </Route>



          <Route path="/counsellor" element={<CounsellorLayout />}>
            {/* <Route index element={<CounsellorDashboard />} /> */}
            <Route path="counsellorprofile" element={<CounsellorProfile />} />
            <Route path="counsellorclients" element={<CounsellorClients />} />
            <Route path="counsellorclients/profile" element={<CounsellorClientProfile />} />
            <Route path="counsellorclients/profile/doctors" element={<CounsellorDoctors />} />
            <Route path="counsellorappointments" element={<CounsellorAppointments />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/postblog" element={<PostBlog />} />
            <Route path="home" element={<CounsellorHome />} />
            <Route path="counsellorclients/registerclient" element={<RegisterClient />} />
          </Route>
          <Route path="/counsellor/regform" element={<CounsellorRegForm />} />



          <Route path="/moderator" element={<ModeratorLayout />}>
            <Route index element={<ModeratorDashboard />} />
            <Route path="userhandle" element={<ModeratorUserHandle />} />
            <Route path="moderatormusic" element={<ModeratorMusic />} />


          </Route>


          <Route path="/diagnostictest" element={<DiagnosticTestPage />}>
          </Route>

          <Route path="/test-questions" element={<TestQuestion />}>
          </Route>

          <Route path="/testemail" element={<TestEmail />}>
          </Route>



        </Routes>
      </Router>
    </AuthProvider>
  </>


)

export default App
