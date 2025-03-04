import React from "react";
import "../App.css";

const CardView = ({ data }) => {
    return (
        <div className="card-view">
            {data.map((user, index) => (
                <div key={index} className="card">
                    <h3>User {index + 1}</h3>
                    <ul>
                        {Object.keys(user).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong> {user[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CardView;
