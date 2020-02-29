import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/layouts/Navbar";
import SideNav from "./components/layouts/SideNav";

import CreateWorkOrder from "./components/workOrders/CreateWorkOrder";
import WorkOrdersList from "./components/workOrders/WorkOrdersList";
import WorkOrderDetails from "./components/workOrders/WorkOrderDetails";
import QuotationsList from "./components/quotations/QuotationsList";

function App() {
  return (
    <BrowserRouter>
      <headear>
        {/* <NavBar /> */}
      </headear>
      <SideNav></SideNav>
      <main>
        <div className="grey lighten-2 main-container">
          <Switch>
            <Route exact path="/" component={WorkOrdersList} />
            <Route path="/workOrders" component={WorkOrdersList} />
            <Route path="/workOrder/:id" component={WorkOrderDetails} />
            <Route path="/createWorkOrder" component={CreateWorkOrder} />
            <Route path="/quotations" component={QuotationsList}></Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
