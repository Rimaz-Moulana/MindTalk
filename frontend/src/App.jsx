import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import ChatApp from './components/Chat/Message'
import DiagnosticTestPage from './components/Diagnose Test/DiagnosticTestPage'
import TestEmail from './components/Diagnose Test/TestEmail'
import TestQuestion from './components/Diagnose Test/TestQuestion'
import ClientLayout from './components/shared/ClientLayout'
import CounsellorLayout from './components/shared/CounsellorLayout'
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile'
import ClientCounsellors from './pages/client/ClientCounsellors'
import ClientMeditation from './pages/client/ClientMeditation'
import ClientMusic from './pages/client/ClientMusic'
import ClientProfile from './pages/client/ClientProfile'
import Checkout from './components/Payments/Checkout'
// import CounsellorDashboard from './pages/counsellor/CounsellorDashboard'
import AdminLayout from './components/AdminDashboard/AdminLayout'
import TransHistory from './components/Payments/TransactionHistory'
import WalletLayout from './components/Payments/WalletLayout'
import Wallet from './components/Payments/wallet'
import ModeratorLayout from './components/shared/ModeratorLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserHandle from './pages/Admin/UserHandle'
import BlogView from './pages/BlogView'
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
import TestResult from './components/Diagnose Test/TestResult'
import Loginn from './components/LoginSignup/Loginn'
import Register from './components/LoginSignup/register'

import AdminCrudClient from './pages/Admin/AdminCrudClient'
import AdminCrudCounselors from './pages/Admin/AdminCrudCounselors'
import AdminCrudDoctors from './pages/Admin/AdminCrudDoctors'
import AdminCrudModerators from './pages/Admin/AdminCrudModerators'
import AdminCrudUser from './pages/Admin/AdminCrudUser'
import ClientCounsellorAppointments from './pages/client/ClientCounsellorAppointments'
import CounsellorDetailsAdd from './pages/counsellor/CounsellorDetailsAdd'
import CounsellorRegForm from './pages/counsellor/CounsellorRegForm'
import RegisterClient from './pages/counsellor/CounsellorRegisterClient'
import ModeratorBlogs from './pages/moderator/ModeratorBlogs'
import ModeratorMeditation from './pages/moderator/ModeratorMeditation'
import ModeratorMusic from './pages/moderator/ModeratorMusic'
import ModeratorUserHandle from './pages/moderator/ModeratorUserHandle'

import Dash from './components/Calls/Dash'
import Registermoderator from './components/LoginSignup/Registermoderator'
import RequireAuth from './components/LoginSignup/RequireAuth'
import AddMeditation from './components/moderator/AddMeditation'
import AddMusic from './components/moderator/AddMusic'
import { AuthProvider } from './context/AuthProvider'
import AddTherapySession from './pages/moderator/AddTherapySession'

const ROLES = {
    Client: 'ROLE_CLIENT',
    Admin: 'ROLE_ADMIN',
    Moderator: 'ROLE_MODERATOR',
    Counsellor: 'ROLE_COUNSELLOR'
}

const App = () => (
    <>
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Routes that don't require authentication */}
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/login" element={<Loginn />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/registermoderator" element={<Registermoderator />} />
                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="/counsellor/regform" element={<CounsellorRegForm />} />
                    {/* <Route path="/counsellor/detailsadd" element={<CounsellorAddDetails />} /> */}
                    <Route path="/addDetails" element={<CounsellorDetailsAdd />} />

                    {/* <Route path="/table" element={<TableData />}  /> */}
                    {/* Routes that require authentication */}

                    <Route path="/client" element={<RequireAuth allowedRoles={[ROLES.Client]} />}>
                        <Route element={<ClientLayout />}>
                            {' '}
                            {/* Wrap the layout */}
                            <Route index element={<ClientDashboard />} />
                            <Route path="message" element={<ChatApp />} />
                            <Route path="clientprofile/:id" element={<ClientProfile />} />
                            <Route path="clientcounsellors" element={<ClientCounsellors />} />
                            {/* <Route path="clientcounsellors/profile" element={<ClientCounsellorProfile />} /> */}
                            <Route path="clientcounsellors/profile/:id" element={<ClientCounsellorProfile />} />
                            <Route path="clientmusic" element={<ClientMusic />} />
                            <Route path="clientmeditation" element={<ClientMeditation />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="blogs/blogview/:id" element={<BlogView />} />
                            <Route path="blogs/postblog" element={<PostBlog />} />
                            <Route path="clientappointments" element={<ClientAppointments />} />
                           
                            <Route path="clientcounsellors/appointments" element={<ClientCounsellorAppointments />} />
                            <Route path="calls" element={<Dash />} />
                        </Route>
                    </Route>

                    <Route path="/wallet" element={<WalletLayout />}>
                        <Route  element={<Wallet />} />
                        <Route index element={<Wallet />} />
                        <Route path="transhistory" element={<TransHistory />} />
                        <Route />
                    </Route>

                    <Route path="/admin" element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route element={<AdminLayout />}>
                            {' '}
                            {/* Wrap the layout */}
                            <Route index element={<AdminDashboard />} />
                            <Route path="/admin/userhandle" element={<UserHandle />} />
                            <Route path="/admin/user" element={<AdminCrudUser />} />
                            <Route path="/admin/counselors" element={<AdminCrudCounselors />} />
                            <Route path="/admin/moderators" element={<AdminCrudModerators />} />
                            <Route path="/admin/doctors" element={<AdminCrudDoctors />} />
                            <Route path="/admin/clients" element={<AdminCrudClient />} />
                        </Route>
                    </Route>

                    <Route path="/counsellor" element={<RequireAuth allowedRoles={[ROLES.Counsellor]} />}>
                        <Route element={<CounsellorLayout />}>
                            {' '}
                            {/* Wrap the layout */}
                            <Route index element={<CounsellorHome />} />
                            {/* <Route path="l" element={<CounsellorHome />} /> */}
                            <Route path="counsellorprofile" element={<CounsellorProfile />} />
                            <Route path="counsellorclients" element={<CounsellorClients />} />
                            {/* <Route path="counsellorclients/profile" element={<CounsellorClientProfile />} /> */}
                            <Route path="view-client/:id" element={<CounsellorClientProfile />} />
                            <Route path="counsellorclients/profile/doctors" element={<CounsellorDoctors />} />
                            <Route path="counsellorappointments" element={<CounsellorAppointments />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="blogs/postblog" element={<PostBlog />} />
                            {/* <Route path="home" element={<CounsellorHome />} /> */}
                            <Route path="counsellorclients/registerclient" element={<RegisterClient />} />
                        </Route>
                    </Route>

                    <Route path="/moderator" element={<RequireAuth allowedRoles={[ROLES.Moderator]} />}>
                        <Route element={<ModeratorLayout />}>
                            {' '}
                            {/* Wrap the layout */}
                            <Route index element={<ModeratorDashboard />} />
                            <Route path="userhandle" element={<ModeratorUserHandle />} />
                            <Route path="moderatormusic" element={<ModeratorMusic />} />
                            <Route path="add-music/:id" element={<AddMusic />} />
                            <Route path="moderatormeditation" element={<ModeratorMeditation />} />
                            <Route path="add-meditation/:id" element={<AddMeditation />} />
                            <Route path="moderatorblogs" element={<ModeratorBlogs />} />
                            <Route path="addtherapysession" element={<AddTherapySession />} />
                        </Route>
                    </Route>

                    <Route path="/diagnostictest" element={<DiagnosticTestPage />}></Route>

                    <Route path="/test-questions" element={<TestQuestion />}></Route>

                    <Route path="/testemail" element={<TestEmail />}></Route>

                    <Route path="/testresult" element={<TestResult />}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    </>
)

export default App
