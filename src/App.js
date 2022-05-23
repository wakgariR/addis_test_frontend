import React from "react";
import {Routes, Route} from 'react-router-dom'
import AddEmployee from './components/Employee/AddEmployee';
import EmployeeDetail from './components/Employee/EmployeeDetail';
import Employees from './components/Employee/Employees';
import Header from './components/Header';
import EmployeeContextProvider from "./context/Employee.context";

function App() {
  return (
    <React.Fragment>
      <EmployeeContextProvider>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Employees />} exact />
        <Route path="/add" element={<AddEmployee />} exact />
        <Route path="/employees" element={<Employees />} exact />
        <Route path="/employees/:id" element={<EmployeeDetail />} exact />
      </Routes>
    </main>
      </EmployeeContextProvider>
  </React.Fragment>
  );
}

export default App;
