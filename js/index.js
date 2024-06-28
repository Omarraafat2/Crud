var bookMark = document.getElementById("bookmarkName");
var webUrl = document.getElementById("webUrl");
var updateBtn = document.getElementById("updateBtn");
var submitBtn = document.getElementById("submittt");


var mood = "create";
var index;
// var submitttt = document.getElementById("submittt");

// console.log(bookMark, webUrl);

// savelocalstorge

var dataPro;
if (localStorage.getItem("prodacts") == null) {
  dataPro = [];
} else {
  dataPro = JSON.parse(localStorage.getItem("prodacts"));
  showData();
}

// createProdact
function submit() {
  var newPro = {
    bookMark: bookMark.value,
    webUrl: webUrl.value,
  };
   
    if (mood === "create") {
      dataPro.push(newPro);
      localStorage.setItem("prodacts", JSON.stringify(dataPro));
      // console.log(dataPro);
      clearData();
      showData();
    } else {
      dataPro[index].bookMark = newPro;//eror
      dataPro[index].webUrl = newPro;//eror
  
      mood = "create";
      submittt.innerHTML = "create";
    }
  }
 

function clearData() {
  bookMark.value = "";
  webUrl.value = "";
}

// read
function showData() {
  // console.log("httt");
  var cartona = "";
  for (var i = 0; i < dataPro.length; i++) {
    cartona += `
           <tr>
              <td>${i}</td>
              <td>${dataPro[i].bookMark}</td>
              <td>     <a id="vist" href="${dataPro[i].webUrl}" target="_blank" class="text-white btn bg-success bg-opacity-75 visit-url">
              <i class="fa-solid fa-eye pe-2"></i>Visit
            </a></td>
            
         
            <td><button class=" btn btn-outline-danger " onclick="update(${i})" id="upDate">update</button></td>


            <td><button onclick=" deleteData(${i})" id="Delete">delete</button></td>
            </tr>
        `;
    // console.log(cartona);
  }
  var btnDelete = document.getElementById("deleteAll");
  document.getElementById("tbody").innerHTML = cartona;
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `
  <button onclick="deleteAll()" class=" my-3" >delete</button>
    `;
  } else {
    btnDelete.innerHTML = ``;
  }
}
// delete from array
function deleteData(i) {
  // console.log(i);
  dataPro.splice(i, 1);
//   localStorage.setItem("website", JSON.stringify(websiteArray));

  localStorage.setItem( "prodacts" , JSON.stringify(dataPro));
  showData(dataPro);
}
// delete all
function deleteAll() {
  localStorage.clear();
  dataPro = [];
  showData();
}
// update
function update(i) {
  // console.log(i)
  bookMark.value = dataPro[i].bookMark;
  webUrl.value = dataPro[i].webUrl;
//   submittt.innerHTML = "Update";
//   mood = "update";
  index = i;
//   scroll({
//     top: 0,
//     behavior: "smooth",
//   });
//   clearData()

updateBtn.classList.remove("d-none");
submitBtn.classList.add("d-none");
}


function updatepro(){
    var newPro = {
        bookMark: bookMark.value,
        webUrl: webUrl.value,
      };
      dataPro.splice(index, 1, newPro);

        // if (mood === "create") {
        //   dataPro.push(newPro);
          localStorage.setItem("prodacts", JSON.stringify(dataPro));
          // console.log(dataPro);
          clearData();
          showData(dataPro);
        // } else {
        //   dataPro[index].bookMark = newPro;//eror
        //   dataPro[index].webUrl = newPro;//eror
      
        //   mood = "create";
        //   submittt.innerHTML = "create";
        
        
    submitBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
        
          // }
}


//regex

function validTestName() {
  var regerName= /^[a-z|A-Z|\d]{3,}$/;

  if (regerName.test(bookMark.value)==true) {
    bookMark.classList.add("is-valid");
    bookMark.classList.remove("is-invalid"); 
    
    
    return true;
}

  else{
  bookMark.classList.add("is-invalid");
  bookMark.classList.remove("is-valid");
  
  return false;
}



}
function validTestUrl() {
  var regerUrl =/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;


  if(regerUrl.test(webUrl.value)==true){
  
    webUrl.classList.add("is-valid");
    webUrl.classList.remove("is-invalid");
   
 
    return true;
  }
  
  else{
    webUrl.classList.add("is-invalid") ;
    webUrl.classList.remove("is-valid");
    
 
    
    return false;
  }
}

// siteName.addEventListener('input', validTestName);
// siteUrl.addEventListener('input', validTestUrl);
// function valid() {
//   var regex ={
//     bookMark: /^(A-Z){4}$/ ,
//     webUrl:/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/]\w*)?$/,
  
//   }

// }