document.querySelector("form").addEventListener("submit", submit)
    let arr=JSON.parse(localStorage.getItem("signUpdata")) || []

    function submit(event) {
        event.preventDefault();
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        let obj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
       }
    arr.push(obj);
    localStorage.setItem("signUpdata", JSON.stringify(arr));
    window.location.href="login.html"
    document.getElementById("firstname").value=""
    document.getElementById("lastname").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    }