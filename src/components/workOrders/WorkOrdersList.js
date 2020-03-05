import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



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

class WorkOrdersList extends Component {
  
  handleClick = e => {
    const id = e.target.getAttribute("data-id");
    this.props.history.push(`/workOrder/${id}`);
  };
  
  render() {
    const { workOrders } = this.props;
    return (
      <div className="container">
        <div className="row ">
          <div className="col s12">
            <h4>Órdenes de Trabajo</h4>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell># de Orden</TableCell> */}
                <TableCell>Placa</TableCell>
                <TableCell>Dueño</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Síntomas</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workOrders && workOrders.map(row => (
                <TableRow className="pointer" key={row.id} onClick={this.handleClick} data-id={row.id}>
                  {/* <TableCell component="th" scope="row" data-id={row.id}>
                    {row.id}
                  </TableCell> */}
                  <TableCell data-id={row.id}>{row.vehicle.plate}</TableCell>
                  <TableCell data-id={row.id}>{row.owner.name}</TableCell>
                  <TableCell data-id={row.id}>{row.date}</TableCell>
                  <TableCell data-id={row.id}>{row.symptoms.map(item => (
                    <li>{item}</li>
                  ))}</TableCell>
                  <TableCell data-id={row.id}>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="row">
          <div className="col s12">
            <div className="input-field right">
              <Link to="/createWorkOrder">
                <button className="btn red darken-1">
                  <i className="material-icons left">add</i>
                  Crear Nueva Orden
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    workOrders: state.firestore.ordered.workOrders
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workOrders", orderBy: ["createdAt", "desc"] }])
)(WorkOrdersList);
