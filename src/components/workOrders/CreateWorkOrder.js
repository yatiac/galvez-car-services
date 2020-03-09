import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { createWorkOrder } from "../../store/actions/workOrdersActions";
import Topbar from "../layouts/Topbar";

class CreateWorkOrder extends Component {
  dateNow = moment(new Date()).format("YYYY-MM-DD");
  state = {
    date: this.dateNow,
    status: "Nueva",
    mechanic: "",
    type: "Mecánica",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    vehiclePlate: "",
    vehicleMaker: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
    symptoms: [],
    syptomTextField: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    const workOrderObject = {
      date: this.state.date,
      status: this.state.status,
      type: this.state.type,
      owner: {
        name: this.state.ownerName,
        email: this.state.ownerEmail,
        phone: this.state.ownerPhone
      },
      vehicle: {
        plate: this.state.vehiclePlate,
        maker: this.state.vehicleMaker,
        model: this.state.vehicleModel,
        color: this.state.vehicleColor,
        year: this.state.vehicleYear
      },
      symptoms: this.state.symptoms
    };
    this.props.createWorkOrder(workOrderObject);
    this.props.history.push("/");
  };

  removeSymptom = e => {
    const symptoms = this.state.symptoms;
    symptoms.splice(e.target.id, 1);
    this.setState({
      symptoms
    });
  };

  addSymptomToList = e => {
    e.preventDefault();
    const symptoms = this.state.symptoms;
    const newSymptom = this.state.syptomTextField;
    if (newSymptom.length > 0) {
      symptoms.push(newSymptom);
      this.setState({
        symptoms: symptoms,
        syptomTextField: ""
      });
    }
  };

  render() {
    const data = this.state.symptoms;
    return (
      <div className="containers">
      <Topbar title="Crear Órden de Trabajo"/>
       
        <form className="white">
          <div className="row">
            <h5>Datos de la Orden</h5>
            <div className="col s6">
              <label htmlFor="date">Fecha</label>
              <input
                type="date"
                id="date"
                onChange={this.handleChange}
                value={this.state.date}
              />
            </div>
            <div className="col s6">
              <label htmlFor="status">Mécanico</label>
              <input
                type="text"
                id="mechanic"
                onChange={this.handleChange}
                value={this.state.mechanic}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <label htmlFor="status">Estado</label>
              <select
                id="status"
                onChange={this.handleChange}
                value={this.state.status}
                className="browser-default"
              >
                <option value="Nueva">Nueva</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Entregado">Entregado</option>
              </select>
            </div>
            <div className="col s12 m6">
              <label htmlFor="status">Tipo</label>
              <select
                id="type"
                onChange={this.handleChange}
                className="browser-default"
                value={this.state.type}
              >
                <option value="Mecánica">Mecánica</option>
                <option value="Chapistería">Chapistería</option>
                <option value="Aire Acondicionado">Aire Acondicionado</option>
              </select>
            </div>
          </div>
          <div className="row">
            <h5>Datos del Dueño</h5>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="ownerName">Nombre</label>
              <input
                type="text"
                id="ownerName"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="ownerEmail">E-Mail</label>
              <input type="text" id="ownerEmail" onChange={this.handleChange} />
            </div>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="ownerPhone">Telefono</label>
              <input type="text" id="ownerPhone" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <h5>Datos del Vehiculo</h5>
            <div className="input-field col s6 m3">
              <label htmlFor="vehiclePlate">Placa</label>
              <input
                type="text"
                id="vehiclePlate"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="vehicleMaker">Marca</label>
              <input
                type="text"
                id="vehicleMaker"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="vehicleModel">Modelo</label>
              <input
                type="text"
                id="vehicleModel"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="vehicleColor">Color</label>
              <input
                type="text"
                id="vehicleColor"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="vehicleYear">Año</label>
              <input
                type="text"
                id="vehicleYear"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <h5>Síntomas</h5>
            <div className="input-field col s10">
              <label htmlFor="syptomTextField">Añadir Síntoma</label>
              <input
                type="text"
                id="syptomTextField"
                onChange={this.handleChange}
                value={this.state.syptomTextField}
              />
            </div>
            <div className="input-field col s2">
              <button
                className="btn red darken-2"
                onClick={this.addSymptomToList}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {data.length > 0 && (
                <ul id="symptomsList" className="collection">
                  {data.map((item, index) => (
                    <li key={index} className="collection-item">
                      <div>
                        {item}
                        <i
                          id={index}
                          className="material-icons right red white-text pointer"
                          onClick={this.removeSymptom}
                        >
                          remove
                        </i>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <button
                className="btn red darken-3 z-depth-3"
                onClick={this.handelSubmit}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    createWorkOrder: workOrder => dispatch(createWorkOrder(workOrder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkOrder);
