
import './App.css';
import HomeChange from './components/HomeChange'
import Login from './components/Login';
import ToDo from './components/ToDo';
import Register from './components/Register';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
  return (
    <Router>




  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/todo">To Do</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
    </Header>
  </Layout>
<div>

<Switch>
  <Route path="/login">
          <Login/>
        </Route>
        <Route path="/todo">
          <ToDo/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/">
          <HomeChange />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
