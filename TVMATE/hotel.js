var button=document.getElementById("button");

var database = firebase.database();
var h_id;
var h_p_id;
var h_name;
var h_div;
var h_long;
var h_latt;
var h_img;
var h_desc;
var h_rating;
var h_address;
var h_resId;

function submition(){

    var Hotel_id=document.getElementById("hotel_id").value;
    var Place_id=document.getElementById("place_id").value;
    var Hotel_name=document.getElementById("hotel_name").value;
    var Hotel_div=document.getElementById("hotel_division").value;
    var Hotel_desc=document.getElementById("description").value;
    var Hotel_long=document.getElementById("longitude").value;
    var Hotel_latt=document.getElementById("lattitude").value;
    var Hotel_add=document.getElementById("adress").value;
    var Hotel_resId=document.getElementById("res_id").value;
    var Hotel_image=document.getElementById("image").value;
    var Hotel_rating=document.getElementById("hotel_rating").value;
    datasave(Hotel_id,Place_id,Hotel_name,Hotel_div,Hotel_desc,Hotel_long,Hotel_latt,Hotel_image,Hotel_rating,Hotel_add,Hotel_resId);
  
}
function datasave(h_id,h_p_id,h_name,h_div,h_desc,h_long,h_latt,h_img,h_rating,h_address,h_resId)
{
    database.ref('Hotel').push().set({
        hotel_id:h_id,
        id:h_p_id,
        res_id:h_resId,
        hotel_name:h_name,
        address:h_address,
        description:h_desc,
        division:h_div,
        rating:h_rating,
        lattitude:h_latt,
        longitude: h_long,
        image:h_img
        

    },function(error) {
        if (error) {
          // The write failed...
          window.alert("Not working");
        } else {
            var  id=document.getElementById("hotel_id").value;
          // Data saved successfully!
          window.alert("successfully saved" +id);
        }
    });
}