import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(id, plate, name, date, status) {
  return { id, plate, name, date, status };
}


const rows = [
  createData(
    "123",
    "650035",
    "Rafael Echeverría",
    "10 de Febrero 2020",
    "Nueva"
  ),
  createData("456", "243002", "Ida Gálvez", "14 de Febrero 2020", "En Proceso"),
  createData(
    "789",
    "AB1212",
    "Sandra Amores",
    "25 de Febrero 2020",
    "En Proceso"
  ),
  createData(
    "321",
    "XY1230",
    "Giovanna Gálvez",
    "3 de Febrero 2020",
    "Entregada"
  )
];

export default function SimpleTable() {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (e) => {
    const id =  e.target.getAttribute('data-id');
    history.push(`/workOrder/${id}`);    
  }  

  return (
    <div className="container">
      <div className="row ">
        <div className="col s12">
          <h4>Órdenes de Trabajo</h4>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># de Orden</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell>Nombre del Dueño</TableCell>
              <TableCell>Fecha de Creación</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id} onClick={handleClick} data-id={row.id}>
                <TableCell component="th" scope="row" data-id={row.id}>
                  {row.id}
                </TableCell>
                <TableCell data-id={row.id}>{row.plate}</TableCell>
                <TableCell data-id={row.id}>{row.name}</TableCell>
                <TableCell data-id={row.id}>{row.date}</TableCell>
                <TableCell data-id={row.id}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="row">
        <div className="col s12">
          <div className="input-field right">
            <Link to='/createWorkOrder'>
            <button className="btn red darken-1">Crear Nueva Orden</button>            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
