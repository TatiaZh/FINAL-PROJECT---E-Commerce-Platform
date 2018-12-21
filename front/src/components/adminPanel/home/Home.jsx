import React from 'react';
import { Route, Link } from 'react-router-dom';

import HeaderMy from '../../HomePage/HeaderMy';
import SideMenu from './SideMenu';
import UsersList from '../users/UsersList';
import UsersBoughtProducts from '../users/UsersBoughtProducts';
import AddProductForm from '../products/AddProductForm';
import EditProductForm from '../products/EditProductForm';
import Messages from '../messages/Messages';
import AdminProfile from '../profile/AdminProfile';
import EditAdminProfileForm from '../profile/EditAdminProfileForm';

const API = `http://localhost:5000/api/`;

const Home = props => {
  const { path } = props.match;
  return (
    <>
      <HeaderMy />
      <SideMenu />
      <Link to={`${path}`}>Home</Link>
      <br />
      <Link to={`${path}/users`}>Users</Link>
      <br />
      <Link to={`${path}/products`}>Products</Link>
      <br />
      <Link to={`${path}/products/add`}>Add Product</Link>
      <br />
      <Link to={`${path}/messages`}>Messages</Link>
      <br />
      <Link to={`${path}/profile`}>Profile</Link>

      <Route
        path={`${path}/users`}
        exact
        render={props => <UsersList {...props} url={API} />}
      />
      <Route
        path={`${path}/users/:id/boughtProducts`}
        exact
        render={props => <UsersBoughtProducts {...props} url={API} />}
      />
      <Route
        path={`${path}/products/add`}
        render={props => <AddProductForm {...props} url={API} />}
      />
      <Route
        path={`${path}/products/edit/:id`}
        render={props => <EditProductForm {...props} url={`${API}products`} />}
      />
      <Route
        path={`${path}/messages`}
        render={props => <Messages {...props} url={API} />}
      />
      <Route
        path={`${path}/profile`}
        exact
        render={props => <AdminProfile {...props} url={API} />}
      />
      <Route
        path={`${path}/profile/edit`}
        exact
        render={props => <EditAdminProfileForm {...props} url={API} />}
      />
    </>
  );
};

export default Home;
