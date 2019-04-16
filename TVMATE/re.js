var button=document.getElementById("button");
var database = firebase.database();

var r_p_id;
var r_id;
var r_name;
var r_div;
var r_long;
var r_latt;
var r_img;
var r_rating;



function submition()
{

    var Restaurant_id=document.getElementById("resid").value;
    var Place_id=document.getElementById("placeid").value;
    var Restaurant_name=document.getElementById("name").value;
    var Restaurant_rating=document.getElementById("rating").value;
    var Restaurant_div=document.getElementById("division").value;
    var longitude=document.getElementById("longitude").value;
    var lattitude=document.getElementById("lattitude").value;
    var Restaurant_image=document.getElementById("image").value;
    datasave(Place_id,Restaurant_id,Restaurant_name,Restaurant_div,Restaurant_rating,longitude,lattitude,Restaurant_image);


}

function datasave(r_p_id,r_id,r_name,r_div,r_rating,r_long,r_latt,r_img)
{
    database.ref('Restaurant').push().set({
        res_id:r_id,
        id:r_p_id,
        res_name:r_name,
        rating:r_rating,
        division:r_div,
        lattitude:r_latt,
        longitude: r_long,
        image:r_img
        

    },function(error) {
        if (error) {
          // The write failed...
          window.alert("Not working");
        } else {
            var dumb=document.getElementById("resid").value;
          // Data saved successfully!
          window.alert("successfully saved" +dumb);
        }
    });
}











