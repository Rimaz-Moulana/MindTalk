












import Login from './pages/Login';




const App = () => (
  <>
  <Login/>
    {/* {/* <Router>
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

        <Route path="counsellor" element={<CounsellorLayout />}>
          {/* <Route index element={<CounsellorDashboard />} /> */}
          {/* <Route path="counsellorprofile" element={<CounsellorProfile />} />

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