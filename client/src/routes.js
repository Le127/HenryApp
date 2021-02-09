import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers / Pages
import HomePage from './containers/HomePage';
import OneLecture from './components/OneLecture';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import GooglePage from './containers/GooglePage';
import HenryTalksCRUD from './containers/HenryTalksCRUD';
import CreateTalk from './components/CreateTalk';
import UserListPage from './containers/UserListPage';
import Booms from './components/Booms/Booms.jsx';
import Catalogo from './components/Catalogo';
import error from './components/error/error';
import Payment from './containers/Payment';
import Profile from './components/Profile';
import LecturesListPage from './containers/LecturesListPage';
import ModulesListPage from './containers/ModulesListPage';
import EnterpriseListPage from './containers/EnterpriseListPage';
import LecturesPage from './containers/LecturesPage';
import CompanyLoginForm from './components/CompanyLoginForm/CompanyLoginForm';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* To do: Acá van las rutas del cliente.*/}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lectures' component={LecturesListPage} />
        <Route exact path='/modules' component={ModulesListPage} />
        <Route exact path='/modules/:moduloid' component={LecturesPage} />
        <Route exact path='/oauth/:token' component={GooglePage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/login-company' component={CompanyLoginForm} />
        <Route exact path='/users' component={UserListPage} />
        <Route exact path='/lectures/:lectureid/module/:moduleid' component={OneLecture} />
        <Route exact path='/talks' component={HenryTalksCRUD} />
        <Route exact path='/booms' component={Booms} />
        <Route exact path='/create-talk' component={CreateTalk} />
        <Route exact path='/error' component={error} />
        <Route exact path='/empleos' component={Catalogo} />
        <Route exact path='/payments' component={Payment} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/enterprise' component={EnterpriseListPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
