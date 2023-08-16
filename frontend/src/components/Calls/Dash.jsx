import React, { useState } from 'react';
import './Dash.css'; // Import the CSS file for additional styling (if needed)
import videoCallPNG from '../../assets/videocall.png'

const Dash = () => {
    const ShareLink = () => {
        navigator.share({title:"check this out", url:"https://mindtalkcounsellingsession.netlify.app/"})
    }
    
    const [meetingUrls, setMeetingUrls] = useState({
        meeting01: window.location.origin + "/meeting/01/counsellor/" + new Date().toISOString(),
        meeting02: window.location.origin + "/meeting/01/patient/" + new Date().toISOString(),
        meeting03: window.location.origin + "/meeting/02/counsellor/" + new Date().toISOString(),
        meeting04: window.location.origin + "/meeting/02/patient/" + new Date().toISOString(),
    });

    //const handleMeetingClick = (meetingKey) => {
     //   window.location.href = meetingUrls[meetingKey];
    //};

    return (
        <div className="dashboard-container flex justify-center items-start h-screen bg-gray-100 py-20">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Video Conference</h1>
                <p className="text-lg mb-6">Let's meet your counsellor now!</p>
                <a
                    href='https://mindtalkcounsellingsession.netlify.app/'
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={<ShareLink />}

                    //onClick={() => handleMeetingClick("https://mindtalkcounsellingsession.netlify.app/")}
                >
                    Join Meeting
                </a>
                <div className="mt-8" >
                    <img
                        src={videoCallPNG}
                        alt="Meeting Image"
                        className="mx-auto rounded-full w-[40%] h-[40%]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Dash;
