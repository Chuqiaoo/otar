import React from 'react';
import {useDisease} from "../../services/disease.js";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import DataTabs from "../Tabs/DataTabs.jsx";
import {Tooltip} from "@mui/material";


function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Tooltip title="Visit profile page">
                        <a href={`https://platform.opentargets.org/target/${row.target.id}/associations`}
                           target='_blank'>{row.target.approvedSymbol}</a></Tooltip>
                </TableCell>
                <TableCell align="left"> {row.target.approvedName}</TableCell>
                <TableCell align="left">{row.score.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <DataTabs data={row}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

function DataTable() {

    const {data: topTargets, error} = useDisease();
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{padding: "10px 200px"}}>
            <h1 align={"center"}>🧬 Gene associated with lung carcinoma</h1>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell><h3>Approved Symbol</h3></TableCell>
                            <TableCell align="left"><h3>Gene Name</h3></TableCell>
                            <TableCell align="left"><h3>Overall Association Score</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topTargets?.map((row) => (
                            <Row key={row.target.id} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DataTable;
