import Rebase from 're-base';
import firebase from 'firebase';

const config = {
	apiKey      : 'AIzaSyCsLW_za0dGr3eb7cxIHHdVZ6_j8O5XCro',
	authDomain  : 'todo-app-ansu.firebaseapp.com',
	databaseURL : 'https://todo-app-ansu.firebaseio.com'
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
