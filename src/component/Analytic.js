import React, { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import "../App.css";

const AnalyticsView = ({ data }) => {
    const [chartHeight, setChartHeight] = useState(window.innerWidth < 768 ? 300 : 400);

    useEffect(() => {
        const handleResize = () => {
            setChartHeight(window.innerWidth < 768 ? 300 : 400);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalNewUsers = data?.todaysUserAddition + data?.lastSevenDaysUserAddition + data?.lastThirtyDaysUsersAddition || 1;
    const totalActiveUsers = data?.dailyActiveUsers + data?.weeklyActiveUsers + data?.monthlyActiveUsers || 1;


    const newUsersDistribution = useMemo(() => [
        { name: "Today", value: data?.todaysUserAddition || 0, percent: ((data?.todaysUserAddition / totalNewUsers) * 100).toFixed(1) },
        { name: "Last 7 Days", value: data?.lastSevenDaysUserAddition || 0, percent: ((data?.lastSevenDaysUserAddition / totalNewUsers) * 100).toFixed(1) },
        { name: "Last 30 Days", value: data?.lastThirtyDaysUsersAddition || 0, percent: ((data?.lastThirtyDaysUsersAddition / totalNewUsers) * 100).toFixed(1) }
    ], [data, totalNewUsers]);


    const activeUsersDistribution = useMemo(() => [
        { name: "Daily Active Users", value: data?.dailyActiveUsers || 0, percent: ((data?.dailyActiveUsers / totalActiveUsers) * 100).toFixed(1) },
        { name: "Weekly Active Users", value: data?.weeklyActiveUsers || 0, percent: ((data?.weeklyActiveUsers / totalActiveUsers) * 100).toFixed(1) },
        { name: "Monthly Active Users", value: data?.monthlyActiveUsers || 0, percent: ((data?.monthlyActiveUsers / totalActiveUsers) * 100).toFixed(1) }
    ], [data, totalActiveUsers]);

    return (
        <div className="analytics-view">

            <div className="chart-container">
                <h3>New Users Distribution</h3>
                <ResponsiveContainer width="100%" height={chartHeight}>
                    <PieChart >
                        <Pie data={newUsersDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, percent }) => `${name}: ${percent}%`}>
                            {newUsersDistribution.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percent}%)`, name]} />
                    </PieChart>
                </ResponsiveContainer >
            </div>

            <div className="chart-container">
                <h3>New Users Distribution</h3>
                <ResponsiveContainer width="100%" height={chartHeight}>
                    <PieChart>
                        <Pie
                            data={newUsersDistribution}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="40%"  // Move PieChart a little higher
                            outerRadius={100}
                        >
                            {newUsersDistribution.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} (${(props.payload.percent * 100).toFixed(1)}%)`, name]} />
                        <Legend verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>
            </div>


            <div className="chart-container">
                <h3>Active Users Distribution</h3>
                <ResponsiveContainer width="100%" height={chartHeight}>
                    <PieChart width={600} height={300}>
                        <Pie data={activeUsersDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, percent }) => `${name}: ${percent}%`}>
                            {activeUsersDistribution.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={["#ff7300", "#00c49f", "#0088fe"][index % 3]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percent}%)`, name]} />
                    </PieChart>
                </ResponsiveContainer >

            </div>


            <div className="chart-container">
                <h3>Deposits and Bonuses Comparison</h3>
                <ResponsiveContainer width="100%" height={chartHeight}>

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
                </ResponsiveContainer >

            </div>
        </div>
    );
};

export default AnalyticsView;
