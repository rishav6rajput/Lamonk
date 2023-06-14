// const asp=document.querySelector(".nav-item1");
// function gf(){
//     
// };
// function gf(event) {
//     event.preventDefault();
//     // alert("called")
//     // console.log(event.getElementById());
document.getElementById("tab_description").onclick=function(){
    alert("hdf")
    document.getElementById("tab-1").style.display="block";}
// };
    
function openTab(event, tabId) {
  // Get all tab content elements
  var tabContents = document.getElementsByClassName("tab-content");
  
  // Hide all tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Get all tab button elements
  var tabs = document.getElementsByClassName("tab");
  
  // Remove "active" class from all tab buttons
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  
  // Show the selected tab content and mark the button as active
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}
