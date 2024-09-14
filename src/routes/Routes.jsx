import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Employee from '../components/Employee';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
        </Routes>
    );
};

export default AppRoutes;
