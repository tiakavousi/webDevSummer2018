(function(){
    var userServiceClient = new UserServiceClient();
    var $username,
        $firstName, 
        $lastName, 
        $updateBtn;
    var currentUser = null;

    function init(){
        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $updateBtn = $("#updateBtn");

        $updateBtn.click(updateUser);

        userServiceClient.profile()
            .then(renderUser);
    }

    init();

    function updateUser() {
        var user = {
          firstName: $firstName.val(),
          lastName: $lastName.val()
        };
        
        userServiceClient.findUserByUserId(user);
    }

    function renderUser(user){
        currentUser = user;
        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }
})();