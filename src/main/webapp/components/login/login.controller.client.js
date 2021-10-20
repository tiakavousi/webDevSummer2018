(function(){
    var userServiceClient= new UserServiceClient();
    var $username,
        $password,
        $loginBtn;
    function init(){
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');

        $loginBtn.click(login);
    }
    init();
    function login(){
        var user = {
            "username" : $username.val(),
            "password" : $password.val(),
        };
        userServiceClient.login(user)
        .then(navigateToProfile);
    }
    function navigateToProfile(){
        window.location.href = "../profile/profile.template.client.html"    
    }
})();