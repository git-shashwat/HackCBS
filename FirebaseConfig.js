// /* Firebase Configuration */
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hackcbs-fire.firebaseio.com"
})
var db = admin.database()
var ref = db.ref('restricted_access/secret_document')

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });