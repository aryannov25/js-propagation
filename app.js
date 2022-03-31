document.getElementById("pt1").addEventListener("click" , function(a){
    console.log("SuperParent Clicked"); 
    a.stopPropagation();
})

document.getElementById("pt2").addEventListener("click" , function(a){
    console.log("Parent Clicked");
    a.stopPropagation();
})

document.getElementById("pt3").addEventListener("click" , function(a){
    console.log("Child Clicked"); 
    a.stopPropagation();
})