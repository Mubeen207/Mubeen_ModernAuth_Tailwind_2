// const ctx = document.getElementById("ordersChart").getContext("2d");
// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Orders",
//         data: [30, 45, 60, 40, 80, 70],
//         backgroundColor: "rgba(59, 130, 246, 0.5)",
//         borderColor: "rgba(59, 130, 246, 1)",
//         borderWidth: 1,
//         borderRadius: 6,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtfJY6eWzgOptzBTYUkW05p7f8Ou3cOnI",
  authDomain: "cd-first-project-15d4e.firebaseapp.com",
  projectId: "cd-first-project-15d4e",
  storageBucket: "cd-first-project-15d4e.firebasestorage.app",
  messagingSenderId: "221789667167",
  appId: "1:221789667167:web:e354f7017366b11ddd80ea",
  measurementId: "G-H37P36CTFD",
};
firebase.initializeApp(firebaseConfig);
let fb = firebase.auth();
const db = firebase.firestore();
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
// let message = document.getElementById("message");

// Authentication
function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("Sign up Successful");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode + " " + errorMessage);
    });
}

function signIn() {
  fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("Sign up Successful");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
}
