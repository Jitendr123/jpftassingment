import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import AnalyticsView from "../component/Analytic";
import CardView from "../component/Card";

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

// const analyticDemoData = [
//     {
//         period: "Today",
//         todaysUserAddition: 10,
//         lastSevenDaysUserAddition: 50,
//         lastThirtyDaysUsersAddition: 200,
//         totalDepositAmount: 5000,
//         totalAdminDepositAmount: 1200,
//         totalAdminBonusAmount: 300
//     },
//     {
//         period: "Yesterday",
//         todaysUserAddition: 8,
//         lastSevenDaysUserAddition: 45,
//         lastThirtyDaysUsersAddition: 190,
//         totalDepositAmount: 4500,
//         totalAdminDepositAmount: 1100,
//         totalAdminBonusAmount: 280
//     },
//     {
//         period: "Last Week",
//         todaysUserAddition: 5,
//         lastSevenDaysUserAddition: 40,
//         lastThirtyDaysUsersAddition: 180,
//         totalDepositAmount: 4200,
//         totalAdminDepositAmount: 1000,
//         totalAdminBonusAmount: 250
//     },
//     {
//         period: "Last Month",
//         todaysUserAddition: 15,
//         lastSevenDaysUserAddition: 70,
//         lastThirtyDaysUsersAddition: 250,
//         totalDepositAmount: 6000,
//         totalAdminDepositAmount: 1400,
//         totalAdminBonusAmount: 350
//     }
// ];

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



const Dashboard = ({ analyticsMode }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true); 
        try {
            const response = await axios.get(API_URL);
            setData(response.data);
        } catch (err) {
            // setError("Failed to fetch data");
            console.log(err)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dashboard-container">
            {loading && <div className="loader">Loading</div>} 
            {error && <p className="error-message">{error}</p>}
            {!error && !loading &&
                <div className="toggle-container">
                    {analyticsMode ? <AnalyticsView data={analyticDemoData}/> : 
                        <CardView data={cardDemoData }/>}
                    {/* <span>{analyticsMode ? "Analytics Mode" : "Card View Mode"}</span> */}
                </div>
            }
        </div>
    )
};

export default Dashboard;
