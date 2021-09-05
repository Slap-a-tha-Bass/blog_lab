import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './views/Home';
import Blogs from './views/Blogs';
import NavBar from './components/NavBar';
import OneBlog from './views/OneBlog';
import EditBlog from './views/EditBlog';


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
				</Switch>
			</Router>
		</main>
	);
};

interface AppProps { }

export default App;
