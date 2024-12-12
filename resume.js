
    function skills()
     { 
        var para = document.getElementById("skills");
         para.style.display = (para.style.display === "none") ? "block" : "none"; 
     }
     function lan()
     { 
        var lan = document.getElementById("lan");
         lan.style.display = (lan.style.display === "none") ? "block" : "none"; 
     }
     function edu()
     { 
        var edu = document.getElementById("edu");
         edu.style.display = (edu.style.display === "none") ? "block" : "none"; 
     }
     function ct()
     { 
        var ct = document.getElementById("ct");
         ct.style.display = (ct.style.display === "none") ? "block" : "none"; 
     }
     function add()
     { 
        var add = document.getElementById("add");
         add.style.display = (add.style.display === "none") ? "block" : "none"; 
     }
    
     function pass()
      { 
        var enteredPassword = document.getElementById("password").value; 
        var correctPassword = "shan@1234";
         
         var secretMessage = document.getElementById("resume1");
          if (enteredPassword === correctPassword) { 
             secretMessage.style.display = "block"; // Display the secret message
              return true;
              // Allow form submission if needed
               } else { message.textContent = "Password is incorrect!";
                 message.className = "error"; 
                secretMessage.style.display = "none"; // Hide the secret message 
                return false; // Prevent form submission


                 } }


                 function audio()
                 { 
                    var para = document.getElementById("audio");
                     para.style.display = (para.style.display === "none") ? "block" : "none"; 
                 }
                 function vid()
                 { 
                    var para = document.getElementById("vid");
                    alert("THANKS FOR THE LIKE 🥰");
                   
                     para.style.display = (para.style.display === "none") ? "block" : "none"; 
                 }

                 function doller()
                  {
                     alert("HINT: MY USUAL PASSWORD ");
                 }
                

                