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

let firebaseConfig = {
  apiKey: "AIzaSyBwqkKTba4L88W-vZf1NAEuL0DWkSJx8eM",
  authDomain: "modren-wep-athuntication.firebaseapp.com",
  projectId: "modren-wep-athuntication",
  storageBucket: "modren-wep-athuntication.firebasestorage.app",
  messagingSenderId: "870976969919",
  appId: "1:870976969919:web:40e1379c6f8c31b6a63a0a",
  measurementId: "G-9Z5XLW849D",
};
firebase.initializeApp(firebaseConfig);

let email = document.getElementById("email");
let password = document.getElementById("password");
let fb = firebase.auth();

function signUp() {
  console.log("Hello signup");

  fb.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log("Hello Done");
      redirectDashboard();
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("Hello");
    });
}
function redirectDashboard() {
  window.location.href = "./Dashboard.html";
}
