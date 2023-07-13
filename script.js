  var tablinks=document.getElementsByClassName("tab-links");
     var tabContents=document.getElementsByClassName("tab-content");
     function openTab(tabname){
       for(tablink of tablinks){
        tablink.classList.remove("activ-link");
       }

       for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("activ-link");
       document.getElementById(tabname).classList.add("active-tab");
       
     }
      var sideMenu=document.getElementById("sideMenu"); 
      function openmenu(){
        sideMenu.style.right="0";
      }
    function closemenu(){
        sideMenu.style.right="-200px";
     }

     const scriptURL = 'https://script.google.com/macros/s/AKfycbwm1j5p08G9Ai4BShP1LkWD2pylne7BV6dwkaGeQ5q7hSLzAIUhjV4VMwL29jWJZ7h7/exec'
     const form = document.forms['submit-to-google-sheet']
     const Msg=document.getElementById("msg")
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      Msg.innerHTML="Message sent Sucessfully"
      setTimeout(function(){
        Msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})