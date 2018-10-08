import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAE5dz6YC9XNAqT2vRUTBCZ8qN1Yd_PAeY",
    authDomain: "h41-hackru2018f.firebaseapp.com",
    databaseURL: "https://h41-hackru2018f.firebaseio.com",
    projectId: "h41-hackru2018f",
    storageBucket: "h41-hackru2018f.appspot.com",
    messagingSenderId: "1065529565349"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');