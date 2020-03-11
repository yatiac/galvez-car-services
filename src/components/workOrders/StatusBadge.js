import React from 'react';

const StatusBadge = (props) => {
    const {status, id, align = "right"} = props;
    let color = "";
    switch (status) {
      case "Nueva":
        color = "red";
        break;
      case "En Proceso":
      case "En Progreso":
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
        className={`new badge ${color} ${align}`}
        data-badge-caption={status}
        data-id={id}
      ></span>
    );
  };

export default StatusBadge;