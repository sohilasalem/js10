var siteName=document.getElementById('siteName');
var siteUrl=document.getElementById('siteUrl');
var submit=document.getElementById('submit');
var nameError = document.getElementById("nameError");
var poductContainer=[];
var indexOfWebsite ;

function addSite(){
    if(validateProductUrl()   && validateProductName()){
    var site={
        name:siteName.value,
        url:siteUrl.value
    }
    // console.log(site);
    poductContainer.push(site)
    displayData();
    addToLocalStorage();
    clearForm();
}else{
    alert("error");
  }
}
// displayData()
// clearForm()

function clearForm(){
    siteName.value=null
    siteUrl.value=null
}

function displayData(){
    // console.log(poductContainer[i]);
        var newSite='';
    for(var i=0; i<poductContainer.length; i++ )
        // console.log(poductContainer[i]);

        {
            // console.log(poductContainer[i]);
            // newSite+=siteName.value+siteUrl.value
             newSite+=`
             <tr>
               <td>${indexOfWebsite ,i}</td>
              <td>${poductContainer[i].name}</td>  
              <td>
              <a href="${poductContainer[i].url}">
              <button  class="btn btn-visit bg-warning text-white" data-index="${indexOfWebsite}">
              <i class="fa-solid fa-eye pe-2"></i>Visit
              </button>
              </a>
            </td>
            <td>
              <button onclick="deleteProduct(${i})" class="btn btn-delete bg-danger text-white pe-2"  data-index="${indexOfWebsite}">
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
              </tr>`
        }

document.getElementById('tableContent').innerHTML=newSite
}

function deleteProduct(i) {
    poductContainer.splice(i, 1);
    console.log(poductContainer);

    displayData();
    // addToLocalStorage();
  }

  function addToLocalStorage() {
    localStorage.setItem("poductContainer", JSON.stringify(poductContainer));
  }

  
function validateProductName(){
    var nameRegex = /^[A-Za-z]/;
    if(nameRegex.test(siteName.value)){
      console.log("match");
      siteName.classList.add("is-valid");
      siteName.classList.remove("is-invalid")
      return true;
    }else{
      console.log("not match");
      siteName.classList.add("is-invalid");
      siteName.classList.remove("is-valid");
      return false;
    }
  }
  function validateProductUrl(){
    var urlRegex = /^(https:\/\/)(www\.){0,1}[A-Za-z]{1,}(\.com)$/;
    if(urlRegex.test(siteUrl.value)){
      console.log("match");
      siteUrl.classList.add("is-valid");
      siteUrl.classList.remove("is-invalid")
      return true;
    }else{
      console.log("not match");
      siteUrl.classList.add("is-invalid");
      siteUrl.classList.remove("is-valid");
      return false;
    }
  } 
