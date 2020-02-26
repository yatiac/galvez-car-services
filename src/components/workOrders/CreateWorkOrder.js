import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class CreateWorkOrder extends Component {
  render() {    
    return (
      <div className="container">
        <form className="white">
          <h4>Crear Orden de Trabajo</h4>
          <div className="row">
            <h5>Datos de la Orden</h5>
            <div className="col s6">
              <TextField
                id="date"
                label="Fecha"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div className="col s6">
                <label htmlFor="status">Estado</label>
                <input type="text" id="status" value="Nueva"/>
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
            <div className="col s12">
              <TextField id="symptoms" label="Síntomas" multiline rows="4" />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <button className="btn red darken-3 z-depth-0">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateWorkOrder;
