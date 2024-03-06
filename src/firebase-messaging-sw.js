importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js'); // must this version be = version of firebase that installed in package.json 
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyDKfmTy7sBWmu45F32G83tFhWbw2BfAf0w",
    authDomain: "fir-push-notifications-1c3e0.firebaseapp.com",
    projectId: "fir-push-notifications-1c3e0",
    storageBucket: "fir-push-notifications-1c3e0.appspot.com",
    messagingSenderId: "774130634164",
    appId: "1:774130634164:web:db9e085aad6ad894dd36e1",
    measurementId: "G-K0MHHL4TFB",
});
const messaging = firebase.messaging();
