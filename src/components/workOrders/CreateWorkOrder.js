import React, { Component } from "react";

class CreateWorkOrder extends Component {
  state = {
    date: "",
    status: "",
    owner: {
      name: "",
      email: "",
      phone: ""
    },
    vehicle: {
      plate: "",
      maker: "",
      model: "",
      year: "",
      color: ""
    },
    symptoms: [],
    syptomTextField: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  removeSymptom = e => {
    const symptoms = this.state.symptoms;
    symptoms.splice(e.target.id,1);
    this.setState({
      symptoms
    });
  }

  addSymptomToList = e => {
    e.preventDefault();
    const symptoms = this.state.symptoms;
    symptoms.push(this.state.syptomTextField);

    this.setState({
      symptoms: symptoms,
      syptomTextField: ""
    });
  };

  render() {
    const data = this.state.symptoms;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Crear Orden de Trabajo</h4>
          </div>
        </div>
        <form className="white">
          <div className="row">
            <h5>Datos de la Orden</h5>
            <div className="col s6">
              <label htmlFor="date">Fecha</label>
              <input type="text" id="date" className="datepicker" />
            </div>
            <div className="col s6">
              <label htmlFor="status">Estado</label>
              <input type="text" id="status" />
            </div>
          </div>
          <div className="row">
            <h5>Datos del Dueño</h5>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" />
            </div>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="email">E-Mail</label>
              <input type="text" id="email" />
            </div>
            <div className="input-field col s12 m6 l4">
              <label htmlFor="phone">Telefono</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <div className="row">
            <h5>Datos del Vehiculo</h5>
            <div className="input-field col s6 m3">
              <label htmlFor="plate">Placa</label>
              <input type="text" id="plate" />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="maker">Marca</label>
              <input type="text" id="maker" />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="model">Modelo</label>
              <input type="text" id="model" />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="color">Color</label>
              <input type="text" id="color" />
            </div>
            <div className="input-field col s6 m3">
              <label htmlFor="year">Año</label>
              <input type="text" id="year" />
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
                          <i id={index} className="material-icons right red white-text pointer" onClick={this.removeSymptom}>remove</i>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <button className="btn red darken-3 z-depth-0">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateWorkOrder;
