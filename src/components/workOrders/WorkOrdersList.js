import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class WorkOrdersList extends Component {
  handleClick = e => {
    const id = e.target.getAttribute("data-id");
    this.props.history.push(`/workOrder/${id}`);
  };

  statusBadge = (status, id) => {
    let color = "";
    switch (status) {
      case "Nueva":
        color = "red";
        break;
      case "En Proceso":
        color = "blue";
        break;
      case "Entregado":
        color = "green";
        break;
      default:
        color = "yellow";
        break;
    }
    return (
      <span
        className={`new badge ${color}`}
        data-badge-caption={status}
        data-id={id}
      ></span>
    );
  };

  render() {
    moment.locale("es");
    const { workOrders } = this.props;
    return (
      <div>
        <div className="container hide-on-small-only">
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
                {workOrders &&
                  workOrders.map(workOrder => (
                    <TableRow
                      className="pointer"
                      key={workOrder.id}
                      onClick={this.handleClick}
                      data-id={workOrder.id}
                    >
                      <TableCell data-id={workOrder.id}>
                        {workOrder.vehicle.plate}
                      </TableCell>
                      <TableCell data-id={workOrder.id}>
                        {workOrder.owner.name}
                      </TableCell>
                      <TableCell data-id={workOrder.id}>
                        {moment(workOrder.date).format("MMMM D YYYY")}
                      </TableCell>
                      <TableCell data-id={workOrder.id}>
                        {workOrder.symptoms.map((item, index) => (
                          <li data-id={workOrder.id} key={index}>
                            {item}
                          </li>
                        ))}
                      </TableCell>
                      <TableCell data-id={workOrder.id}>
                        {this.statusBadge(workOrder.status, workOrder.id)}
                      </TableCell>
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
        <div className="hide-on-med-and-up">
          <ul className="collection no-margin with-header">
            <li className="collection-header">
              <h4>Órdenes de Trabajo</h4>
            </li>
            {workOrders &&
              workOrders.map((workOrder, index) => (
                <li
                  className="collection-item"
                  key={index}
                  data-id={workOrder.id}
                  onClick={this.handleClick}
                >
                  <span className="title" data-id={workOrder.id}>
                    <strong>{workOrder.owner.name}</strong>{" "}
                  </span>
                  <span className="secondary-content" data-id={workOrder.id}>
                    {" "}
                    {this.statusBadge(workOrder.status, workOrder.id)}
                  </span>
                  <p
                    data-id={workOrder.id}
                  >{`[${workOrder.vehicle.plate}] ${workOrder.vehicle.maker} ${workOrder.vehicle.model} ${workOrder.vehicle.color} (${workOrder.vehicle.year})`}</p>
                  <span className="grey-text" data-id={workOrder.id}>
                    {moment(workOrder.date).format("MMMM D YYYY")}
                  </span>
                </li>
              ))}
          </ul>
          <div class="fixed-action-btn">
            <Link to="/createWorkOrder">
              <a class="btn-floating btn-large red">
                <i class="large material-icons">add</i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    workOrders: state.firestore.ordered.workOrders
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "workOrders", orderBy: ["createdAt", "desc"] }
  ])
)(WorkOrdersList);
