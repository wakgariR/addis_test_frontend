import React, { useContext, useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { LibraryBooksOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { EmployeeContext } from '../context/Employee.context'
const Header = () => {
    const [value, setValue] = useState();
    const employeeContext = useContext(EmployeeContext)
    const {setIsOnUpdate} = employeeContext;
  return (
    <div>
            <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
            <Toolbar>
                <Typography>
                    <LibraryBooksOutlined />
                </Typography>
                <Tabs textColor="inherit" indicatorColor="secondary"
                value={value} onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Employee" onClick={setIsOnUpdate(false)}></Tab>
                    <Tab LinkComponent={NavLink} to="/employees" label="Employees"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header