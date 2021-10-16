(function(){
    console.log("hello world");
    var registerBtn = $("#registerBtn");
    var usernameFld = $("#username");
    var passwordFld = $("#password");
    var password2Fld = $("#password2");
    registerBtn.click(registerHandler);
    function registerHandler(){
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();
        var userObj = {
            username: usernameStr,
            password: passwordStr
        };     
        fetch("/register",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(userObj),
                    "credentials": "include"
                }
        ).then(successfulRegisteration, failedRegisteration)
    }
    function successfulRegisteration(){
        window.location.href = "./profile.template.client.html";
    }
    function failedRegisteration(){
        alert("oops registration failed!");
    }
})();