document.querySelector("form").addEventListener("submit", login)
    let arr = JSON.parse(localStorage.getItem("signUpdata")) || []
    function login(event) {
        event.preventDefault();
        let email1 = document.querySelector("#email").value;
        let password1 = document.querySelector("#password").value;
          
        let flag=false;
        for (let i = 0; i < arr.length; i++) {
            if (email1 == arr[i].email && password1 == arr[i].password) {
                flag=true
                break
            } else {
                flag=false
               
            }
        }
        if(flag){
            window.location.href="index.html"
        }
        else{
            alert("Wrong Credentials");
        }
        document.querySelector("#email").value=""
        document.querySelector("#password").value=""
    }