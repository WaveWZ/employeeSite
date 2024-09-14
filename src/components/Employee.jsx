import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../styles/Employee.css';


const Employee = () => {

    const location = useLocation();
    const { state } = location;
    const { name, job, desc, img, email } = state;

    return (
        <>
            <Header />

            <div className="employee-container">
                <div className="employee-card">
                    <img src={img} alt={name} className="employee-image" />
                    <div className="employee-details">
                        <h1 className="employee-name">{name}</h1>
                        <h3 className="employee-job">{job}</h3>
                        <p className="employee-desc">{desc}</p>
                        <p className="employee-email"><strong>Email:</strong> {email}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employee;
