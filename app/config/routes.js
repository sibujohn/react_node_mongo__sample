import 	React from 'react';
import {Route} from 'react-router';
import 	App from './app';
import 	Login from '../components/login';
import 	Main from '../components/main';
import 	DashBoard from '../components/dashboard';
import 	Animals from '../components/animals';
import 	Birds from '../components/birds';
import 	Fishes from '../components/fishes';
import 	Plants from '../components/plants';
import 	AddNew from '../components/addNewForm';

export default (
	<Route component={App}>
		<Route path='/' component={Login} />
		<Route path='/main' component={Main}>
			<Route path='dashboard' component={DashBoard} />
			<Route path='animals' component={Animals} />
			<Route path='birds' component={Birds} />
			<Route path='fishes' component={Fishes} />
			<Route path='plants' component={Plants} />
			<Route path='add' component={AddNew} />
		</Route>
	</Route>
);