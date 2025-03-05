import React from "react";
import "../App.css";

const CardView = ({ data }) => {
    console.log(data);
    return (
        <div className="card-view">
            <div className="card">
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
            </div>
        </div>
    );
};

export default CardView;
