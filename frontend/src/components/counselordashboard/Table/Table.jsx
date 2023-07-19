import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData(
    name,
    ID_Number,
    Reservation_Date,
    Time,
    Status,
    protein,
) {
    return { name, ID_Number, Reservation_Date, Time, Status, protein };
}

const rows = [
    createData("Kaveesha Muthukuda", 1999238772, "2 July 2023", "8:30 am", "Approved"),
    createData("Michelle Fernando", 1998235677, "5 July 2023", "4:30 pm", "Pending"),
    createData("Kanishka Sewandi", 19992309821, "7 July 2023", "8:30 pm", "Cancelled"),
    createData("Pathum Dias", 2000128773, "23 July 2023", "2:30 pm", "Pending"),
    createData("Thaduni Aluthwala", 200001222, "15 June 2023", "9:30 am", "Completed"),
];


const makeStyles = (Status) => {
    if (Status === "Approved") {
        return {
            background: 'rgb(145 254 159 /47%)',
            color: 'green',
        }
    } else if (Status === "Pending") {
        return {
            background: '#ffadad8f',
            color: 'red',

        }
    } else if (Status === "Cancelled") {
        return {
            background: '#D9ED92',
            color: 'black',
        }
    } else {
        return {
            background: '#59bfAf',
            color: 'blue',
        }
    }

}







export default function BasicTable() {
    return (
        <div className="Table">
            <h3 className="heading">Appointments</h3>

            <TableContainer component={Paper}
                style={{ boxShadow: '0px 13px 20px 0px #80808029' }}



            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="left">ID Number</TableCell>
                            <TableCell align="left">Reservation Date</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.ID_Number}</TableCell>
                                <TableCell align="left">{row.Reservation_Date}</TableCell>
                                <TableCell align="left">{row.Time}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyles(row.Status)}>
                                        {row.Status}

                                    </span>




                                </TableCell>
                                <TableCell align="left" className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
