import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const baseUrl = 'http://localhost:5000';
export const EmployeeContext = createContext({
  employees: [],
  addEmployee: (employee) => {},
  onUpdateEmployee:(id)=>{},
  updateEmployee: (id, employee) => {},
  deleteEmployee: (id) => {},
  isOnUpdate:()=>Boolean,
  setIsOnUpdate:(Boolean)=>{},
  selectedEmployee:{}
});

const EmployeeContextProvider = (props) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [isOnUpdate, setIsOnUpdate] = useState(false);
  useEffect(() => {
    axios.get(`${baseUrl}/employees`).then((result) => {
        setEmployees(result.data.employees)
    });
  }, []);

  const addEmployee = ({ name, salary, dateOfBirth, gender }) => {
    axios.post(`${baseUrl}/employees`,{
      name, gender, dateOfBirth,salary
    }).then((result) => {
     const  { _id,name, salary, dateOfBirth, gender } = result.data.employe;
     setEmployees([...employees, {_id, name, salary, dateOfBirth, gender }]);
     navigate('/employees')
    });
  };

 const onUpdateEmployee= async (id)=>{
   setIsOnUpdate(true);
   const emp =  employees.filter((employee) => employee._id === id)
   setSelectedEmployee(
     emp[0]
     )
      navigate('/add')
  }
  const updateEmployee = (id,{ name, salary, dateOfBirth, gender }) => {

    axios.put(`${baseUrl}/employees/${id}`,{
      name, gender, dateOfBirth,salary
    }).then((result) => {
      const  { _id,name, salary, dateOfBirth, gender } = result.data.employee;
      const newEmployees = employees.map((employee) => {
        if (_id === employee._id) {
          employee.name= name
          employee.gender = gender
          employee.dateOfBirth =dateOfBirth
          employee.salary =salary
        }
        return employee;
      })
      setEmployees(newEmployees);
      navigate('/employees')
    });

  };

  const deleteEmployee = (id) => {
      axios.delete(`${baseUrl}/employees/${id}`).then(result=>{
          const _employee = employees.filter((employee) => employee._id !== id);
           setEmployees(_employee);
      })
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        setEmployees,
        updateEmployee,
        deleteEmployee,
        isOnUpdate,
        setIsOnUpdate,
        selectedEmployee,
        onUpdateEmployee
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
