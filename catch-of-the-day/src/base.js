import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBlWpUdaeFVnOzd183qMn01f7A-ENmJO-c",
        authDomain: "catch-of-the-day-2ec69.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-2ec69.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;