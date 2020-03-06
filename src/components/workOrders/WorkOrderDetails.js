import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

const WorkOrderDetails = props => {
  const { workOrder } = props;  
  moment.locale('es');
  return (
    workOrder && (
      <div className="container">
        <div className="row">
          <div className="col s12">
            {/* <h4>Orden de Trabajo</h4> */}
          </div>
        </div>
        <div className="white">
          <div className="row">
            <div className="col s6">
              <p><strong className="grey-text text-darken-1">Fecha</strong></p>              
              <p>{moment(workOrder.date).format('MMMM D YYYY')}</p>
            </div>
            <div className="col s6">
              <p><strong>Estado</strong></p>
              <p>{workOrder.status}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <h4>Dueño</h4>
              <p>{workOrder.owner.name}</p>
              <p>{workOrder.owner.phone}</p>
              <p>{workOrder.owner.email}</p>
            </div>
            <div className="col s12 m6">
              <h4>Vehículo</h4>
              <p>
                [{workOrder.vehicle.plate}] {workOrder.vehicle.maker}{" "}
                {workOrder.vehicle.model} {workOrder.vehicle.color}{" "}
                {workOrder.vehicle.year}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h4>Síntomas</h4>
              <ul className="collection">
              {workOrder.symptoms.map(item => (
                        <li className="collection-item" data-id={item}>{item}</li>
                      ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state, ownProps) => {  
  const id = ownProps.match.params.id;
  const workOrders = state.firestore.data.workOrders;
  const workOrder = workOrders ? workOrders[id] : null;
  return {
    workOrder
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workOrders" }])
)(WorkOrderDetails);
