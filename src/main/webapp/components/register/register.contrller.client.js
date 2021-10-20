
(function(){
    var userServiceClient = new UserServiceClient();
    var registerBtn = $("#registerBtn");
    var usernameFld = $("#username");
    var passwordFld = $("#password");
    var password2Fld = $("#password2");
    

    registerBtn.click(registerHandler);
    function registerHandler(){
        var $role = $("input[type='radio'][name='role']:checked").val();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            role: $role
        };
        userServiceClient.register(userObj)     
            .then(successfulRegisteration, failedRegisteration);
    }
    function successfulRegisteration(){
        window.location.href = "../profile/profile.template.client.html";
    }
    function failedRegisteration(){
        alert("oops registration failed!");
    }
})();
