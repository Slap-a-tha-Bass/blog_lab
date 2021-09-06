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
				</Switch>
			</Router>
		</main>
	);
};

interface AppProps { }

export default App;
