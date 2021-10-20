(function(){
    var userServiceClient= new UserServiceClient();
    var $username,
        $firstName, 
        $lastName,
        $email,
        $phoneNumber,
        $dateOfBirth,
        $updateBtn;
    var currentUser = null;
    function init(){
        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $email = $("#email");
        $phoneNumber = $("#phoneNumber");
        $dateOfBirth = $("#dateOfBirth");
        $updateBtn = $("#updateBtn");
        userServiceClient.profile()
            .then(renderUser);
        $updateBtn.click(updateUser);
    }
    init();
    function updateUser() {
        var user = {
          firstName: $firstName.val(),
          lastName: $lastName.val(),
          email: $email.val(),
          phoneNumber : $phoneNumber.val(),
          dateOfBirth : $dateOfBirth.val()
        }; 
        userServiceClient.updateUser(user,currentUser.id);
    }

    function renderUser(user){
        currentUser = user;
        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $email.val(user.email);
        $phoneNumber.val(user.phoneNumber);
        $dateOfBirth.val(user.dateOfBirth);
        console.log(user.id);
    }
})();