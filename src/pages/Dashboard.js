import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import AnalyticsView from "../component/Analytic";
import CardView from "../component/Card";
// import $ from "jquery";
        

const API_URL = "https://jpfunware.free.beeceptor.com/dashboardData";
const cardDemoData = [
    {
        "User Name": "John Doe",
        "Email": "john.doe@example.com",
        "Age": 28,
        "Country": "USA",
        "Subscription": "Premium",
        "Join Date": "2024-03-05"
    },
    {
        "User Name": "Jane Smith",
        "Email": "jane.smith@example.com",
        "Age": 32,
        "Country": "Canada",
        "Subscription": "Basic",
        "Join Date": "2023-11-20"
    },
    {
        "User Name": "Alice Johnson",
        "Email": "alice.johnson@example.com",
        "Age": 25,
        "Country": "UK",
        "Subscription": "Gold",
        "Join Date": "2022-06-15"
    }
];

const analyticDemoData = {
    todaysUserAddition: 10,
    lastSevenDaysUserAddition: 50,
    lastThirtyDaysUsersAddition: 200,
    dailyActiveUsers: 100,
    weeklyActiveUsers: 500,
    monthlyActiveUsers: 2000,
    totalDepositAmount: 5000,
    totalAdminDepositAmount: 1200,
    totalAdminBonusAmount: 300
};

const demoData = {
    message: "Message delivered successfully!",
    statusCode: 200,
    status: "success",
    data: {
        totalPlayers: 14,
        todaysUserAddition: 1,
        lastSevenDaysUserAddition: 6,
        lastThirtyDaysUsersAddition: 14,
        dailyActiveUsers: 0,
        weeklyActiveUsers: 2,
        monthlyActiveUsers: 14,
        totalGames: 10,
        totalRake: 30,
        totalPotAmount: 0,
        totalDepositCount: 30,
        totalDepositAmount: 40,
        totalAdminDepositCount: 50,
        totalAdminDepositAmount: 0,
        totalAdminBonusCount: 0,
        totalAdminBonusAmount: 0,
        withdrawData: [
            {
                _id: "FAILED",
                totalAmount: 400,
                tdsAmount: 400,
                count: 2
            },
            {
                _id: "REJECTED",
                totalAmount: 200,
                tdsAmount: 60,
                count: 1
            },
            {
                _id: "PENDING",
                totalAmount: 250,
                tdsAmount: 75,
                count: 1
            }
        ]
    }
};




const Dashboard = ({ analyticsMode, callApi, setCallApi }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        // $(".loader").show();
        setLoading(true);
        try {
            // console.log(data);
            if (!data) {
                const response = await axios.get(API_URL);
                console.log(response.data);
                if (response.data.statusCode == 200) {
                    setData(response.data.data);
                } else {
                    setError(response.data.message);
                    setCallApi(true);
                }
            }
        } catch (err) {
            // setError("Failed to fetch data");
            setCallApi(false);
            setData(demoData.data);//if API will not work then use demo data
            console.log(err)
        } finally {
            // $(".loader").hide();
            setLoading(false);
        }
    };



    return (
        <div className="dashboard-container">
            {loading && 
                <div className="spinner-border text-success" role="status">
                    {/* <span class="sr-only">Loading...</span> */}
                </div>
            }
            {error && <p className="error-message">{error}</p>}
            {!error && !loading &&
                <div className="toggle-container">
                    {analyticsMode ? <AnalyticsView data={data} /> :
                        <CardView data={data} />}
                </div>
            }
        </div>
    )
};

export default Dashboard;
