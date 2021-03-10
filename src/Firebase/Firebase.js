import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyByjzFS4VpKXv_AMLsurclZXDTRkZ77dbE",
  authDomain: "workout-tracker-a986d.firebaseapp.com",
  databaseURL: "https://workout-tracker-a986d.firebaseio.com",
  projectId: "workout-tracker-a986d",
  storageBucket: "workout-tracker-a986d.appspot.com",
  messagingSenderId: "918478391392",
  appId: "1:918478391392:web:e391d223d0d352aeb6db05",
  measurementId: "G-L3PCCGTYHT"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
