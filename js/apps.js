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

function Main(){
    let get = document.getElementById('input').value;
    var c = 1;
    function Equal(i, ref){
        ref.on("value", function (snapshot) {
            ans = snapshot.val();
            if(ans === get){
                console.log(i);
                document.getElementById("lang" + c).innerHTML = get;
                Des(i, c);
                c++;
            }
        });
    }

    function Des(i, c){
        var des;
        var re = firebase.database().ref().child("ideas").child(i).child("des");
        re.on("value", function (snapshot) {
            des = snapshot.val();
            document.getElementById("des" + c).innerHTML = des;
        });
    }


    var count = 28;
    for(var i = 1; i <= count; i++) {
        for(var j = 0; j <= 5; j++ ) {
            var ref = firebase.database().ref().child("ideas").child(i).child(j);
            Equal(i, ref);
        }
    }
}
document.getElementById('myElement').onclick = Main;



/*var tagToQuery = answer;
ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData.name)
        // ...
    });
});*/



