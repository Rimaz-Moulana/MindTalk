import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ChatApp from './components/Chat/Message'
import DiagnosticTestPage from './components/Diagnose Test/DiagnosticTestPage'
import TestEmail from './components/Diagnose Test/TestEmail'
import TestQuestion from './components/Diagnose Test/TestQuestion'
import CounsellorLayout from './components/shared/CounsellorLayout'
import Layout from './components/shared/Layout'
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile'
import ClientCounsellors from './pages/client/ClientCounsellors'
import ClientDashboard from './pages/client/ClientDashboard'
import ClientMeditation from './pages/client/ClientMeditation'
import ClientMusic from './pages/client/ClientMusic'
import ClientProfile from './pages/client/ClientProfile'
import CounsellorDashboard from './pages/counsellor/CounsellorDashboard'
import CounsellorProfile from './pages/counsellor/CounsellorProfile'
import CounsellorDoctors from './pages/counsellor/CounsellorDoctors'
import CounsellorClients from './pages/counsellor/CounsellorClients'
import CounsellorClientProfile from './pages/counsellor/CounsellorClientProfile'
import Wallet from './components/Payments/wallet'
import TransHistory from './components/Payments/TransactionHistory'
import WalletLayout from './components/Payments/WalletLayout'
import PostBlog from './pages/PostBlog'
import Blogs from './pages/Blogs'
import Landingpage from './pages/Landingpage'
import ModeratorLayout from './components/ModeratorDashboard/ModeratorLayout'
import ModeratorDashboard from './pages/moderator/ModeratorDashboard'

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
                    <Route path="clientmusic" element={<ClientMusic />} />
                    <Route path="clientmeditation" element={<ClientMeditation />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="/postblog" element={<PostBlog />} />
                </Route>
                <Route path="/wallet" element={<WalletLayout />}>
                    <Route index element={<Wallet />} />
                    <Route path="/wallet/transhistory" element={<TransHistory />} />
                </Route>
                <Route path="/counsellor" element={<CounsellorLayout />}>
                    <Route index element={<CounsellorDashboard />} />
                    <Route path="counsellorprofile" element={<CounsellorProfile />} />
                    <Route path="counsellordoctors" element={<CounsellorDoctors />} />
                    <Route path="counsellorclients" element={<CounsellorClients />} />
                    <Route path="counsellorclients/profile" element={<CounsellorClientProfile />} />
                </Route>
                <Route path="/moderator" element={<ModeratorLayout />}>
                    <Route index element={<ModeratorDashboard />}></Route>
                </Route>
                <Route path="/diagnostictest" element={<DiagnosticTestPage />}></Route>
                <Route path="/test-questions" element={<TestQuestion />}></Route>
                <Route path="/testemail" element={<TestEmail />}></Route>
                <Route path="/landingpage" element={<Landingpage />}></Route>
            </Routes>
        </Router>
    </>
)

export default App
