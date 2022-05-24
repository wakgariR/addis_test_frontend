import React, { useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { EmployeeContext } from "../../context/Employee.context";

const Employees = () => {
  const employeeContext = useContext(EmployeeContext);
  const { employees, deleteEmployee,onUpdateEmployee } = employeeContext;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Date of Birth </TableCell>
            <TableCell> Gender </TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.dateOfBirth }
              </TableCell>
              <TableCell component="th" scope="row">
                {row.gender}
              </TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell>
                <Button
                 onClick={()=>
                  onUpdateEmployee(row._id)}

                >
                  {" "}
                  Update
                </Button>
                <Button
                  onClick={() =>   deleteEmployee(row._id)}
                  sx={{ mt: "auto" }}
                >
                  {" "}
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Employees;
