// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0AVOuf2d4pGEQ4zhLuZNMRuu6LFxNK9Y",
    authDomain: "lamasearch2019.firebaseapp.com",
    databaseURL: "https://lamasearch2019.firebaseio.com",
    projectId: "lamasearch2019",
    storageBucket: "lamasearch2019.appspot.com",
    messagingSenderId: "787788335416",
    appId: "1:787788335416:web:424669455fd3643a0fd9cd",
    measurementId: "G-VPK68L80DR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var count = 5;
let arr = [];

for(var i = 1; i <= count; i++) {
    var ref = firebase.database().ref().child("language").child("name" + i);
    ref.on("value", function (snapshot) {
        arr.push(snapshot.val());
    });
}

console.log(arr);