var button=document.getElementById("button");

var database = firebase.database();

var p_id;
var p_name;
var p_div;
var p_long;
var p_latt;
var p_img;
var p_desc;
function submition(){

    var id=document.getElementById("id").value;
    var place_name=document.getElementById("name").value;
    var place_div=document.getElementById("division").value;
    var place_desc=document.getElementById("des").value;
    var place_long=document.getElementById("longittude").value;
    var place_latt=document.getElementById("lattitude").value;
    var place_image=document.getElementById("imageUrl").value;
    datasave(id,place_name,place_div,place_desc,place_long,place_latt,place_image);
  
}

function datasave(p_id,p_name,p_div,p_desc,p_long,p_latt,p_img)
{
    database.ref('Place').push().set({
        
        id:p_id,
        description:p_desc,
        division:p_div,
        image:p_img,
        lattitude:p_latt,
        longitude: p_long,
        place_name:p_name

    },function(error) {
        if (error) {
          // The write failed...
          window.alert("Not working");
        } else {
            var dumb=document.getElementById("id").value;
          // Data saved successfully!
          window.alert("successfully saved" +dumb);
        }
    });
}
 
    


