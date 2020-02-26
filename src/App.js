import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import NavBar from './components/layouts/Navbar';
import Navbar from './components/layouts/Navbar';
import CreateWorkOrder from './components/workOrders/CreateWorkOrder';
import WorkOrdersList from './components/workOrders/WorkOrdersList';
import WorkOrderDetails from './components/workOrders/WorkOrderDetails';

function App() {
  return (    
    <BrowserRouter>
    <div className="grey main-container">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={WorkOrdersList} />
        <Route path='/workOrder/:id' component={WorkOrderDetails} />
        <Route path='/createWorkOrder' component={CreateWorkOrder} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
