import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Label } from "recharts";
import "../App.css";

const AnalyticsView = ({ data }) => {
    /** 📌 Calculate Total for Percentages **/
    const totalNewUsers = data.todaysUserAddition + data.lastSevenDaysUserAddition + data.lastThirtyDaysUsersAddition;
    const totalActiveUsers = data.dailyActiveUsers + data.weeklyActiveUsers + data.monthlyActiveUsers;

    /** 📌 New Users Distribution - Pie Chart Data **/
    const newUsersDistribution = useMemo(() => [
        { name: "Today", value: data.todaysUserAddition, percent: ((data.todaysUserAddition / totalNewUsers) * 100).toFixed(1) },
        { name: "Last 7 Days", value: data.lastSevenDaysUserAddition, percent: ((data.lastSevenDaysUserAddition / totalNewUsers) * 100).toFixed(1) },
        { name: "Last 30 Days", value: data.lastThirtyDaysUsersAddition, percent: ((data.lastThirtyDaysUsersAddition / totalNewUsers) * 100).toFixed(1) }
    ], [data, totalNewUsers]);

    /** 📌 Active Users Distribution - Pie Chart Data **/
    const activeUsersDistribution = useMemo(() => [
        { name: "Daily Active Users", value: data.dailyActiveUsers, percent: ((data.dailyActiveUsers / totalActiveUsers) * 100).toFixed(1) },
        { name: "Weekly Active Users", value: data.weeklyActiveUsers, percent: ((data.weeklyActiveUsers / totalActiveUsers) * 100).toFixed(1) },
        { name: "Monthly Active Users", value: data.monthlyActiveUsers, percent: ((data.monthlyActiveUsers / totalActiveUsers) * 100).toFixed(1) }
    ], [data, totalActiveUsers]);

    return (
        <div className="analytics-view">
            {/* 📌 New Users Distribution Pie Chart */}
            <div className="chart-container">
                <h3>New Users Distribution</h3>
                <PieChart width={600} height={300}>
                    <Pie data={newUsersDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, percent }) => `${name}: ${percent}%`}>
                        {newUsersDistribution.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percent}%)`, name]} />
                </PieChart>
            </div>

            {/* 📌 Active Users Distribution Pie Chart */}
            <div className="chart-container">
                <h3>Active Users Distribution</h3>
                <PieChart width={600} height={300}>
                    <Pie data={activeUsersDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, percent }) => `${name}: ${percent}%`}>
                        {activeUsersDistribution.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={["#ff7300", "#00c49f", "#0088fe"][index % 3]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percent}%)`, name]} />
                </PieChart>
            </div>

            {/* 📌 Deposits & Bonuses Area Chart */}
            <div className="chart-container">
                <h3>Deposits and Bonuses Comparison</h3>
                <AreaChart width={600} height={300} data={[data]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="totalDepositAmount" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="totalAdminDepositAmount" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="totalAdminBonusAmount" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default AnalyticsView;
