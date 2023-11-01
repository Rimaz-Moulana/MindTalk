import React, { useState, useEffect } from 'react'
import axios from 'axios' // Import the axios library
import chatUserPNG from '../../assets/Chat/chatUser.png'

export default function CounsellorTest() {
    const [counsellorId, setCounsellorId] = useState(null)
    const [accessToken, setAccessToken] = useState('')
    const [testResults, setTestResults] = useState([])

    //fetch releted counsellorId of a user
    const fetchCounsellorId = async (userId) => {
        try {
            const authData = localStorage.getItem('authData')
            if (authData) {
                const { accessToken } = JSON.parse(authData)
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
                const response = await axios.get(
                    `http://localhost:8080/api/counsellor/details/${userId}/counsellorId`,
                    config
                )
                const counsellorId = response.data
                console.log('counsellorId', counsellorId)
                return counsellorId
            }
        } catch (error) {
            console.error('Error fetching counsellorId:', error)
            return null
        }
    }

    const calculateSeverityLevel = (score) => {
        if (score >= 0 && score <= 9) {
            return 'Mild'
        } else if (score >= 10 && score <= 14) {
            return 'Moderate'
        } else if (score >= 15 && score <= 27) {
            return 'Severe'
        } else {
            return 'Unknown'
        }
    }
    //fetch user name of a user
    const fetchUserDetails = async (userId) => {
        try {
            const authData = localStorage.getItem('authData')
            if (authData) {
                const { accessToken } = JSON.parse(authData)
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }

                const response = await axios.get(`http://localhost:8080/api/v1/client/${userId}/username`, config)
                return response.data // Assuming the response contains user details
            }
        } catch (error) {
            console.error('Error fetching user details:', error)
            return null
        }
    }
    const fetchTestResults = async (userIds) => {
        try {
            // Convert the user IDs array to a comma-separated string
            const userIdsString = userIds.join(',')
            const authData = localStorage.getItem('authData')
            if (authData) {
                const { accessToken } = JSON.parse(authData)
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }

                // Make a GET request to the API endpoint with the user IDs as a path variable
                const response = await axios.get(
                    `http://localhost:8080/api/v1/test/sorted-results/${userIdsString}`,
                    config
                )
                return response.data
                // const testResults = response.data
                // setTestResults(testResults)
                // console.log('Test Results:', testResults)
            }
        } catch (error) {
            console.error('Error fetching test results:', error)
            return null
        }
    }
    const fetchLatestTwoTestResults = async (userIds) => {
        try {
            const userIdsString = userIds.join(',')
            console.log('userId string', userIdsString)
            const authData = JSON.parse(localStorage.getItem('authData'))
            if (authData) {
                const { accessToken } = authData
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }

                // Make a GET request to the new API endpoint that retrieves the latest two test results
                const response = await axios.get(
                    `http://localhost:8080/api/v1/test/latest-results/${userIdsString}`,
                    config
                )

                const testResults = response.data
                console.log('Latest Test Results:', testResults)
                return testResults
            }
        } catch (error) {
            console.error('Error fetching latest test results:', error)
            return null
        }
    }

    const fetchCounsellorTestResults = async (counsellorId) => {
        try {
            if (counsellorId) {
                const authData = JSON.parse(localStorage.getItem('authData'))
                const userId = authData ? authData.id : null
                if (authData) {
                    const { accessToken } = authData

                    const config = {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }

                    // Fetch user IDs associated with the counsellor
                    const response = await axios.get(
                        `http://localhost:8080/api/client/appointment/get-clientIds/${counsellorId}`,
                        config
                    )
                    const userIds = response.data
                    console.log('User IDs:', userIds)
                    const testResults = await fetchLatestTwoTestResults(userIds)
                    console.log('Test Results:', testResults)

                    // Create a map to group test results by user
                    const testResultsMap = new Map()
                    for (const testResult of testResults) {
                        if (!testResultsMap.has(testResult.userId)) {
                            testResultsMap.set(testResult.userId, [])
                        }
                        testResultsMap.get(testResult.userId).push(testResult)
                    }

                    // Process and sort test results for each user
                    const processedTestResults = []
                    for (const [userId, userTestResults] of testResultsMap) {
                        userTestResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                        const latestTestResult = userTestResults[0]
                        const userDetails = await fetchUserDetails(userId)
                        const timestamp = new Date(latestTestResult.timestamp)
                        const date = timestamp.toISOString().split('T')[0]
                        const severityLevel = calculateSeverityLevel(latestTestResult.score)
                        const status =
                            userTestResults.length === 1
                                ? 'No change'
                                : userTestResults[0].score < userTestResults[1].score
                                ? 'Improved'
                                : userTestResults[0].score > userTestResults[1].score
                                ? 'Worsened'
                                : 'No change'
                        processedTestResults.push({
                            id: latestTestResult.id,
                            userName: userDetails || 'Unknown',
                            score: latestTestResult.score,
                            severityLevel: severityLevel,
                            timestamp: latestTestResult.timestamp,
                            date: date,
                            status: status
                        })
                    }

                    // Set testResults
                    setTestResults(processedTestResults)
                    console.log('Test Results:', processedTestResults)
                }
            }
        } catch (error) {
            console.error('Error fetching counsellor test results:', error)
            // Handle the error, e.g., show an error message to the user
        }
    }

    // const fetchCounsellorTestResults = async (counsellorId) => {
    //     try {
    //         if (counsellorId) {
    //             const authData = JSON.parse(localStorage.getItem('authData'))
    //             const userId = authData ? authData.id : null
    //             if (authData) {
    //                 const { accessToken } = authData

    //                 const config = {
    //                     headers: {
    //                         Authorization: `Bearer ${accessToken}`,
    //                         'Content-Type': 'application/json'
    //                     },
    //                     withCredentials: true
    //                 }

    //                 // Fetch user IDs associated with the counsellor
    //                 const response = await axios.get(
    //                     `http://localhost:8080/api/client/appointment/get-clientIds/${counsellorId}`,
    //                     config
    //                 )
    //                 const userIds = response.data
    //                 console.log('User IDs:', userIds)
    //                 const testResults = await fetchLatestTwoTestResults(userIds)
    //                 console.log('Test Results:', testResults)

    //                 //Fetch and process test results for each user
    //                 const processedTestResults = await Promise.all(
    //                     testResults.map(async (testResult) => {
    //                         const userDetails = await fetchUserDetails(testResult.userId)
    //                         const timestamp = new Date(testResult.timestamp) // Convert the timestamp to a JavaScript Date object
    //                         const date = timestamp.toISOString().split('T')[0] // Extract the date part
    //                         const severityLevel = calculateSeverityLevel(testResult.score)
    //                         return {
    //                             id: testResult.id,
    //                             userName: userDetails || 'Unknown',
    //                             score: testResult.score,
    //                             timestamp: testResult.timestamp,
    //                             severityLevel: severityLevel,
    //                             date: date
    //                         }
    //                     })
    //                 )

    //                 // Set testResults and potentially sort it here
    //                 setTestResults(processedTestResults)
    //                 console.log('Processed Test Results:', processedTestResults)

    //                 const resultToDisplay = []
    //                 for (const testResult of testResults) {
    //                     const userDetails = await fetchUserDetails(testResult.userId)
    //                     const timestamp = new Date(testResult.timestamp) // Convert the timestamp to a JavaScript Date object
    //                     const date = timestamp.toISOString().split('T')[0] // Extract the date part
    //                     const severityLevel = calculateSeverityLevel(testResult.score)
    //                     resultToDisplay.push({
    //                         id: testResult.id,
    //                         userName: userDetails || 'Unknown',
    //                         score: testResult.score,
    //                         severityLevel: severityLevel,
    //                         timestamp: testResult.timestamp,
    //                         date: date
    //                     })
    //                 }
    //                 // for (let i = 0; i < processedTestResults.length; i += 2) {
    //                 //     if (i + 1 < processedTestResults.length) {
    //                 //         const result1 = processedTestResults[i]
    //                 //         const result2 = processedTestResults[i + 1]

    //                 //         const status =
    //                 //             result1.score < result2.score
    //                 //                 ? 'Improved'
    //                 //                 : result1.score > result2.score
    //                 //                 ? 'Worsned'
    //                 //                 : 'No change'

    //                 //         resultToDisplay.push({
    //                 //             id: result2.id,
    //                 //             userName: result2.userName || 'Unknown',
    //                 //             date: result2.date,
    //                 //             score: result2.score,
    //                 //             severityLevel: result2.severityLevel,
    //                 //             status: status
    //                 //         })
    //                 //     }
    //                 // }
    //                 setTestResults(resultToDisplay)
    //                 console.log('Result to display', resultToDisplay)
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error fetching counsellor test results:', error)
    //         // Handle the error, e.g., show an error message to the user
    //     }
    // }

    // const fetchTestResults = async (userId) => {
    //     try {
    //         const authData = localStorage.getItem('authData')
    //         if (authData) {
    //             const { accessToken } = JSON.parse(authData)
    //             const config = {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                     'Content-Type': 'application/json'
    //                 },
    //                 withCredentials: true
    //             }

    //             // Make a GET request to the API endpoint with the user IDs as a path variable
    //             const response = await axios.get(
    //                 `http://localhost:8080/api/v1/test/sorted-results/${userIdsString}`,
    //                 config
    //             )

    //             const testResult = response.data
    //             return testResult
    //         }
    //     } catch (error) {
    //         console.error('Error fetching test results:', error)
    //         return null
    //     }
    // }

    useEffect(() => {
        ;(async () => {
            const authData = JSON.parse(localStorage.getItem('authData'))
            if (authData) {
                const { accessToken } = authData
                setAccessToken(accessToken)
                const userId = authData ? authData.id : null
                const fetchedCounsellorId = await fetchCounsellorId(userId)
                if (fetchedCounsellorId) {
                    setCounsellorId(fetchedCounsellorId)
                    await fetchCounsellorTestResults(fetchedCounsellorId)
                }
            }
        })()
    }, [])
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <h4 className="text-xl font-semibold text-left ml-5">Test Results</h4>
                    <div className="my-2" />
                    <div className="overflow-hidden pb-5 px-6">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
                                <tr>
                                    <th scope="col" className="px-6 py-4"></th>
                                    <th scope="col" className="px-6 py-4">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {testResults.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover:bg-neutral-300 py-1"
                                    >
                                        {/* <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            <div className="flex items-center">
                                                <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                                            </div>
                                        </td> */}
                                        <td>
                                            <img src={chatUserPNG} alt="avatar" className="w-12 h-12 rounded-full" />
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.userName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.severityLevel}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
