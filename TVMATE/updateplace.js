var fireheading =document.getElementById("heading");
 var firebaseRef=firebase.database().ref().child("users");
 firebaseRef.on('value',function(datasnapshot){
   fireheading.innerText=datasnapshot.val();
 });
