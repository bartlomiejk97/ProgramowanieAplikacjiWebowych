
import './main.scss';
import './renderHere.scss';
import firebase from 'firebase';
import {firebaseConfig} from './config';



const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();