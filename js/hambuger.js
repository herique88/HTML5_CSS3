
window.onload = function() {
    
    let btn = document.querySelector(".menu");

    btn.addEventListener("click", function(e){
      
        if(e.target.href != null) {
            document.getElementById('check').checked = false;
            btn.display = false;
            
        }
      
    });
};


