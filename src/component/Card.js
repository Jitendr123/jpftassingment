import React from "react";
import "../App.css";

const CardView = ({ data }) => {
    console.log(data);
    return (
        <div className="card-view">
            <h2>Card Mode</h2>
            {/* <div className="card">
                <ul key={1}>
                    {data && Object.keys(data)?.map((key) => (<>
                        {key != "withdrawData" ?
                            <li key={key}>
                                <strong>{key}:</strong> {data[key]}
                            </li>
                            :
                            <>
                                <h2>withdraw Data </h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Count</th>
                                            <th>TDS Amount</th>
                                            <th>Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data[key]?.map((inObj, index) => (
                                            <tr key={index}>
                                                <td>{inObj._id}</td>
                                                <td>{inObj.count}</td>
                                                <td>{inObj.tdsAmount}</td>
                                                <td>{inObj.totalAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>

                        }
                    </>
                    ))}
                </ul>
            </div> */}
            <div className="card1">
                {data ? <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr><td><strong>Total Players:</strong></td><td>{data.totalPlayers}</td></tr>
                        <tr><td><strong>Today's User Addition:</strong></td><td>{data.todaysUserAddition}</td></tr>
                        <tr><td><strong>Last 7 Days User Addition:</strong></td><td>{data.lastSevenDaysUserAddition}</td></tr>
                        <tr><td><strong>Last 30 Days Users Addition:</strong></td><td>{data.lastThirtyDaysUsersAddition}</td></tr>
                        <tr><td><strong>Daily Active Users:</strong></td><td>{data.dailyActiveUsers}</td></tr>
                        <tr><td><strong>Weekly Active Users:</strong></td><td>{data.weeklyActiveUsers}</td></tr>
                        <tr><td><strong>Monthly Active Users:</strong></td><td>{data.monthlyActiveUsers}</td></tr>
                        <tr><td><strong>Total Games:</strong></td><td>{data.totalGames}</td></tr>
                        <tr><td><strong>Total Rake:</strong></td><td>{data.totalRake}</td></tr>
                        <tr><td><strong>Total Pot Amount:</strong></td><td>{data.totalPotAmount}</td></tr>
                        <tr><td><strong>Total Deposit Amount:</strong></td><td>{data.totalDepositAmount}</td></tr>
                        <tr><td><strong>Total Admin Deposit Amount:</strong></td><td>{data.totalAdminDepositAmount}</td></tr>
                        <tr><td><strong>Total Admin Bonus Amount:</strong></td><td>{data.totalAdminBonusAmount}</td></tr>
                        <tr><td><strong>Total Deposit Count:</strong></td><td>{data.totalDepositCount}</td></tr>
                        <tr><td><strong>Total Admin Deposit Count:</strong></td><td>{data.totalAdminDepositCount}</td></tr>
                        <tr><td><strong>Total Admin Bonus Count:</strong></td><td>{data.totalAdminBonusCount}</td></tr>
                    </tbody>
                </table> : <p>No data available</p>
                }
            </div>
            < >
                {/* Withdraw Data Table */}
                <div className="withdraw-card">
                    <h2>Withdraw Data</h2>
                    {data?.withdrawData ? <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Count</th>
                                <th>TDS Amount</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.withdrawData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.count}</td>
                                    <td>{item.tdsAmount}</td>
                                    <td>{item.totalAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> : <p>No data available</p>
                    }
                </div>
            </>
        </div>
    );
};

export default CardView;
