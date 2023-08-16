import React, { useEffect, useState } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useParams } from "react-router-dom";

export default function Video() {

    const { id, user, time } = useParams();
    // before using these params directly get the same values form DB which when sceduling stored and compare this URL is valid
    // time param should reflect meeting start time

    const [doctorJoined, setDoctorJoined] = useState(false);
    const [patientJoined, setPatientJoined] = useState(false);

    // when checking user doctor or patient as any one can change the url and join, implemenet a way to confirm users identity( can use the auth state as it has the role)
    // need to check if the meeting is sceduled or not, should maintain a flag when scheduling, before passing to use effect, if that a invalid url this should be denied
    useEffect(() => {
        const apiKey = process.env.REACT_APP_VIDEOSDK_API_KEY;
        const name = user;

        const currentTime = new Date().getTime();
        const meetingTime = new Date(time).getTime();
        console.log("current time: ", currentTime);
        console.log("meeting time: ", meetingTime);

        // after 30 mins of meeting time, link will expire
        if (currentTime - meetingTime >= 5 * 60 * 1000) {
            console.log("Link has expired."); // need to route or display meeting expired page or component
            window.location.href = window.location.origin + '/link-expired';
            return;
        }

        // to confirm doctor or patient has joined the meeting
        // need to save this to DB
        if (user === "doctor") {
            setDoctorJoined(true);
        } else {
            setPatientJoined(true);
        }


        const config = {
            name: name,
            meetingId: id, // from this it differentiate meetings
            apiKey: apiKey,

            region: "sg001", // region for new meeting

            containerId: null,
            redirectOnLeave: window.location.origin + "/",

            micEnabled: false,
            webcamEnabled: false,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
            participantCanLeave: true, // if false, leave button won't be visible

            chatEnabled: true,
            screenShareEnabled: true,
            pollEnabled: false,
            whiteboardEnabled: false,
            raiseHandEnabled: true,


            layout: {
                type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
                priority: "PIN", // "SPEAKER" | "PIN",
                // gridSize: 3,
            },

            branding: {
                enabled: false,
                logoURL:
                    "",
                name: "MindTalk",
                poweredBy: false,
            },

            permissions: {
                pin: true,
                askToJoin: false, // Ask joined participants for entry in meeting
                toggleParticipantMic: true, // Can toggle other participant's mic
                toggleParticipantWebcam: true, // Can toggle other participant's webcam
                toggleVirtualBackground: true, // Can toggle virtual background
                drawOnWhiteboard: false, // Can draw on whiteboard
                toggleWhiteboard: false, // Can toggle whiteboard
                toggleRecording: false, // Can toggle meeting recording
                toggleLivestream: false, //can toggle live stream
                removeParticipant: user === "doctor" ? true : false, // Can remove participant
                endMeeting: user === "doctor" ? true : false, // Can end meeting
                changeLayout: true, //can change layout
            },

            waitingScreen: {
                imageUrl: "",
                text: "Connecting to the meeting...",
            },

            joinScreen: {
                visible: true, // Show the join screen ?
                title: "Medical Conference Room", // Meeting title
                meetingUrl: window.location.origin + "/meeting/" + id + "/" + user + "/" + time, // Meeting joining url
            },

            leftScreen: {
                // visible when redirect on leave not provieded
                actionButton: {
                    // optional action button
                    label: "DashBoard", // action button label
                    href: window.location.origin + "/", // action button href

                },
                rejoinButtonEnabled: false, // show rejoin button
            },

            theme: "DEFAULT", // DARK || LIGHT || DEFAULT
            notificationSoundEnabled: true,

            debug: true, // pop up error during invalid config or netwrok error


            maxResolution: "sd", // "hd" or "sd"

            // For more features check: /prebuilt/guide/prebuilt-video-and-audio-calling/getting-started
        };

        const meeting = new VideoSDKMeeting();
        meeting.init(config);

        let reminderTimer = null;
        console.log(doctorJoined, patientJoined);

        if (doctorJoined || patientJoined) {

            const expiration = ((5 * 60 * 1000) + meetingTime) - currentTime;
            const reminderDelay = ((2 * 60 * 1000) + meetingTime) - currentTime;

            if (reminderDelay > 0) {
                reminderTimer = setTimeout(() => {
                    if (doctorJoined && !patientJoined) {
                        console.log("Patient ID:01, please join the meeting, Counsellor is waiting"); // need to send sms to patient
                        alert("Sent A Reminder msg to Patient");
                    } else if (!doctorJoined && patientJoined) {
                        console.log("Doctor ID:01, please join the meeting, Patient is waiting"); // need to send sms to doctor
                        alert("Sent A Reminder msg to Doctor");
                    }
                }, reminderDelay);
            }


            // after 30 mins automaticaly page will be refreshed and participant wont be able to use that link again
            const refreshAfterTimeSlot = setTimeout(() => {
                window.location.reload();
            }, expiration);

            return () => {
                clearTimeout(reminderTimer);
                clearTimeout(refreshAfterTimeSlot);
            };
        }


    }, [id, user, time, doctorJoined, patientJoined]);

    return <div></div>;
}
