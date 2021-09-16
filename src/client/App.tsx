import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './views/Home';
import Blogs from './views/Blogs';
import NavBar from './components/NavBar';
import OneBlog from './views/OneBlog';
import EditBlog from './views/EditBlog';
import Donate from './views/Donate';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Contact from './views/Contact';
import Login from './views/Login';
import Profile from './views/Profile';
import PrivateRoute from './components/PrivateRoute';
import InvalidCredentials from './views/InvalidCredentials';
import ForgotPassword from './views/ForgotPassword';
import SignIn from './views/SignIn';

const stripe = loadStripe('pk_test_51JWlwbFmDISVkVU8c8Pfwiku0g2eXRukfDfdjNyW8336baPHPUwsYg4nm2kuUr4WzzXAgQEVr2k9VDTFN6HtaSHa00PBWeP8Nc');


const App = (props: AppProps) => {

	return (
		<main className="container">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/blogs">
						<Blogs />
					</Route>
					<Route exact path="/blogs/:id">
						<OneBlog />
					</Route>
					<Route exact path="/blogs/:id/edit">
						<EditBlog />
					</Route>
					<Route exact path="/donate">
						<Elements stripe={stripe}>
							<Donate />
						</Elements>
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<PrivateRoute exact path="/profile">
						<Profile />
					</PrivateRoute>
					<Route exact path="/invalid">
						<InvalidCredentials />
					</Route>
					<Route exact path="/forgot_password">
						<ForgotPassword />
					</Route>
					<Route exact path="/register">
						<SignIn />
					</Route>
				</Switch>
			</Router>
		</main>
	);
};

interface AppProps { }

export default App;
