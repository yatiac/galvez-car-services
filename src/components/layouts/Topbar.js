import React from "react";
import logo from "../../logo.png";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Topbar = props => {
  let history = useHistory();
  const { title } = props;
  return (
    // <div className="hide-on-med-and-up">
    //   <ul className="collection no-margin">
    //     <li className="collection-item">
    //       <div className="row valign-wrapper">
    //         <div className="col s12">
    //           <button
    //             className="btn white red-text"
    //             onClick={() => {
    //               history.goBack();
    //             }}
    //           >
    //             <i className="material-icons">chevron_left</i>
    //           </button>
    //           <h5>{title}</h5>
    //         </div>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <nav>
      <div className="nav-wrapper white black-text z-depth-1">
        <span
          href="#!"
          className="brand-logo left"
          onClick={() => {
            history.goBack();
          }}
        >
          <i className="material-icons black-text">chevron_left</i>
        </span>
        <ul className="center-align">
          <h4 className="center no-margin" style={{ padding: "11px" }}>
            {title}
          </h4>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
