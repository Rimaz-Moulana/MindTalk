import React, { useState, useEffect } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { FiArrowUp, FiArrowDown, FiDollarSign } from "react-icons/fi";
import axios from "axios";
import waitImage from '../../assets/wait.png';
import paidImage from '../../assets/paid.png';
import birdImage from '../../assets/bird.png';
import logo from "../../assets/logo.png";
import StripeCheckout from 'react-stripe-checkout';


function StepperWithContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasOngoingAppointment, setHasOngoingAppointment] = useState(false);
  const totalSteps = 3;
  const [requestedMessage, setRequestedMessage] = useState(null);
  const [counselorName, setCounselorName] = useState("");
  const [counselorId, setCounselorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [requested, setRequested] = useState("");
  const [accepted, setAccepted] = useState("");

  useEffect(() => {
    fetchRequests();
    const intervalId = setInterval(fetchRequests, 100);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchRequests = async () => {
    try {
      const authData = localStorage.getItem("authData");
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const counselorName = localStorage.getItem('appcounsellorName');
        const counselorId = localStorage.getItem('appcounsellorId');
        const appointmentDate = localStorage.getItem('appointmentDate');
        const appointmentTime = localStorage.getItem('appointmentTime');

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/client/appointment-requests/get-requests/${id}`,
          config
        );

        if (response.status === 200) {
          const ongoingRequests = response.data;

          setHasOngoingAppointment(ongoingRequests.length > 0);

          if (ongoingRequests.length > 0) {
            // Count accepted and requested requests
            const acceptedCount = ongoingRequests.filter((request) => request.accepted).length;
            const requestedCount = ongoingRequests.filter((request) => request.requested).length;
            const requestedRequestId = ongoingRequests.find((request) => request.requested)?.requestId;
            setRequested(requestedRequestId);
            setAccepted()
            // Determine the active step based on the counts
            setActiveStep(acceptedCount > 0 ? 2 : requestedCount > 0 ? 1 : 0);

            if (requestedCount > 0) {
              // Populate counselor name, appointment date, and appointment time
              setCounselorName(counselorName);
              setAppointmentDate(appointmentDate);
              setAppointmentTime(appointmentTime);

              if (activeStep === 1) {
                setRequestedMessage(
                  <div style={{ textAlign: 'left' }}>
                    <p>
                      <br />
                      Counselor: {counselorName}
                      <br />
                      Appointment Date: {appointmentDate}
                      <br />
                      Appointment Time: {appointmentTime}
                    </p>
                    <br />
                    <p>We have requested to your counselor. Please wait until they accept it.</p>
                  </div>
                );
              } else if (activeStep === 2) {
                setRequestedMessage(
                  <div style={{ textAlign: 'left' }}>
                    <p>
                      Counselor: {counselorName}
                      <br />
                      Appointment Date: {appointmentDate}
                      <br />
                      Appointment Time: {appointmentTime}
                    </p>
                    <br />
                    <p>Pay the appointment fee to confirm your booking.</p>
                    <StripeCheckout
                      token={handlePaymentSuccess}
                      name="Mind Talk"
                      image={logo}
                      label="Pay Now"
                      currency="LKR"
                      amount={200000}
                      stripeKey="pk_test_51Nrk0OSFDUE54MtAFhY0fKuF4xN7ecdMr9CIIp41qjbrKDGnYEvCc0TGgL0sgXDQ8CQ7Jg8wTRVal2GTo2OGRR1q00zw9XTipk"
                    />

                  </div>
                );
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const addApoinmentBackend = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const appointmentDate = localStorage.getItem('appointmentDate');
        const appointmentTime = localStorage.getItem('appointmentTime');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };

        const requestData = {
          userId: id,
          counsellorId: appCounsellorId,
          date: appointmentDate, // Correct format
          timeSlot: appointmentTime, // Correct format
        };

        const response = await axios.post(
          'http://localhost:8080/api/client/appointment/create-appointment',
          requestData,
          config
        );

        if (response.status === 200) {
          console.log('Appointment created successfully');
        } else {
          console.error('Error creating appointment');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const deleteRequest = async (requestId) => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };

        const response = await axios.delete(
          `http://localhost:8080/api/client/appointment-requests/delete-appointment-request/${requestId}`, // Use template literals
          config
        );

        if (response.status === 200) {
          console.log('Request deleted successfully');
        } else {
          console.error('Error deleting request:', response.data); // Log the response data
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  const handlePaymentSuccess = () => {
    addApoinmentBackend();
    deleteRequest(requested);
    alert("Payment successful! Your appointment is confirmed.");
    console.log('Payment successful:', token);

    // Clear local storage values
    localStorage.removeItem('appcounsellorName');
    localStorage.removeItem('appcounsellorId');
    localStorage.removeItem('appointmentDate');
    localStorage.removeItem('appointmentTime');

    // Reset the component's state
    setActiveStep(0);
    setHasOngoingAppointment(false);
    setRequestedMessage(null);
    setCounselorName("");
    setCounselorId("");
    setAppointmentDate("");
    setAppointmentTime("");
  };
  const cancelPayment = () => {
    deleteRequest(requested);
    alert("Request deleted");
    // Clear local storage values
    localStorage.removeItem('appcounsellorName');
    localStorage.removeItem('appcounsellorId');
    localStorage.removeItem('appointmentDate');
    localStorage.removeItem('appointmentTime');

    // Reset the component's state
    setActiveStep(0);
    setHasOngoingAppointment(false);
    setRequestedMessage(null);
    setCounselorName("");
    setCounselorId("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <div className="w-full px-24 py-4">
      <br />
      {hasOngoingAppointment ? (
        <>
          <Stepper activeStep={activeStep}>
            {Array.from({ length: totalSteps }, (_, index) => (
              <Step key={index}>
                <div className="step-container">
                  <div
                    className={`flex items-center justify-center circle rounded-full ${activeStep >= index ? "bg-blue-700" : "bg-gray-300"
                      } w-10 h-10`}
                  >
                    <div className="icon text-white">
                      {index === 0 ? (
                        <FiArrowUp className="h-5 w-5" />
                      ) : index === 1 ? (
                        <FiArrowDown className="h-5 w-5" />
                      ) : (
                        <FiDollarSign className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  <Typography
                    variant="h6"
                    color={activeStep >= index ? "blue-700" : "gray-400"}
                    className={`step-text ${activeStep === index ? "text-blue-700" : "text-gray-400"
                      }`}
                  >
                    {index === 0 ? "Step 1" : index === 1 ? "Step 2" : "Step 3"}
                  </Typography>
                </div>
              </Step>
            ))}
          </Stepper>
          <br />
          <br />
          <br />
          {activeStep === 1 && (
            <img
              src={waitImage}
              alt="Wait"
              className="mx-auto my-auto"
              style={{ width: '170px', height: '200px' }}
            />
          )}
          {activeStep === 2 && (
            <img
              src={paidImage}
              alt="Paid"
              className="mx-auto my-auto"
              style={{ width: '300px', height: '200px' }}
            />
          )}
          {activeStep === 1 && (
            <div style={{ textAlign: 'left' }}>
              <p>
                <br />
                Counselor: {counselorName}
                <br />
                Appointment Date: {appointmentDate}
                <br />
                Appointment Time: {appointmentTime}
              </p>
              <br />
              <p>We have requested to your counselor. Please wait until they accept it.</p>
            </div>
          )}
          {activeStep === 2 && (
            <div style={{ textAlign: 'left' }}>
              <p>
                Counselor: {counselorName}
                <br />
                Appointment Date: {appointmentDate}
                <br />
                Appointment Time: {appointmentTime}
              </p>
              <p>Appointment Fee: Rs.2000</p>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Stripe payment button */}
                <StripeCheckout
                  token={handlePaymentSuccess}
                  name="Mind Talk"
                  image={logo}
                  label="Pay Now"
                  currency="LKR"
                  amount={200000}
                  stripeKey="pk_test_51Nrk0OSFDUE54MtAFhY0fKuF4xN7ecdMr9CIIp41qjbrKDGnYEvCc0TGgL0sgXDQ8CQ7Jg8wTRVal2GTo2OGRR1q00zw9XTipk"
                />
                <div style={{ margin: '10px' }}></div> {/* Add some margin for space */}
                <button
                  onClick={cancelPayment}
                  className="bg-red-500 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                >
                  Cancel
                </button>
              </div>

            </div>
          )}

        </>
      ) : (
        <div>
          <p>You haven't ongoing appointment booking yet.</p>
          <br />
          <br />
          <br />
          <br />
          <img
            src={birdImage}
            alt="bird"
            className="mx-auto my-auto"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      )}
    </div>
  );
}
export default StepperWithContent;
