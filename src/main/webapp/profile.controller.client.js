(function(){
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

        profile()
            .then(renderUser);
    }

    init();

    function updateUser() {
        var user = {
          firstName: $firstName.val(),
          lastName: $lastName.val()
        };
        console.log(currentUser.id);
        fetch(`/api/user/${currentUser.id}`, {
            method:"put",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include'
        });
    }

    function renderUser(user){
        currentUser = user;
        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }

    function profile() {
        return fetch('/profile', {
          'credentials': 'include'
        })
        .then(response => response.json());
    }
})();