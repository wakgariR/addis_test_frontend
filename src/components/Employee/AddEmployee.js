import React, { useContext, useEffect, useState } from 'react'
import {Button, FormLabel, TextField,Select, MenuItem} from '@mui/material'
import { Box } from '@mui/system'
import { EmployeeContext } from '../../context/Employee.context';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const AddEmployee = () => {
    const  employeeContext= useContext(EmployeeContext);
    const {addEmployee,isOnUpdate,selectedEmployee, updateEmployee} = employeeContext;

    const [name,setName] = useState('');
    const[gender,setGender] = useState('');
    const [salary,setSalary]  = useState('');

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [value, setValue] = React.useState(null); /////
   
useEffect(()=>{
   if(!isOnUpdate){
    setName('')
    setGender('')
    setSalary('')
    setDateOfBirth('') 
    return
   }
    setName(selectedEmployee.name)
    setGender(selectedEmployee.gender)
    setSalary(selectedEmployee.salary)
    setDateOfBirth(selectedEmployee.dateOfBirth) // yyyy-MM-dd

},[selectedEmployee])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isOnUpdate){

       updateEmployee(selectedEmployee._id,{
        name,
        gender,
        dateOfBirth,
        salary
       })
            return
        }
        addEmployee({
            name,
            gender,
            dateOfBirth,
            salary
        });   
    }
  return (
    <form onSubmit={handleSubmit}>
         <Box display="flex" 
         flexDirection="column"
          justifyContent="center"
           maxWidth={700}
           alignContent={"center"}
           alignSelf={"auto"}
           marginLeft={"auto"}
           marginRight={"auto"}
           marginTop={10}>
            <FormLabel>Name</FormLabel>
            <TextField value={name} onChange={(e)=>setName(e.target.value)} margin="normal" fullWidth variant="outlined" name="name"/>
            <FormLabel>Date Of Birth</FormLabel>
            {/* <TextField type={"date"} value={dateOfBirth}  onChange={(e)=>setDateOfBirth(e.target.value)} 
             margin="normal" fullWidth variant="outlined" name="dateOfBirth"/> */}
             <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date Of Birth"
                value={dateOfBirth}
                onChange={(newValue) => {
                setDateOfBirth(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
</LocalizationProvider>
            
            <FormLabel>Gender</FormLabel>
           
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="gender"
                onChange={(e)=>setGender(e.target.value)}
            >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
            </Select>
            <FormLabel>Salary</FormLabel>
            <TextField value={salary} onChange={(e)=>setSalary(e.target.value)}  type={"number"} margin="normal" fullWidth variant="outlined" name="salary"/>
            <Button variant="contained" type="submit">{isOnUpdate? ' Update Employee' : ' Add Employee'}</Button>
         </Box>
         
     </form>
  )
}

export default AddEmployee