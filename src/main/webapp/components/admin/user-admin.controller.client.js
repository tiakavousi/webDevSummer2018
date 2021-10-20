
(function(){
    var userServiceClient = new UserServiceClient();
    function init(){
        userServiceClient.findAllUsers()
        .then(renderUsers);
    }
    init()

    function renderUsers(users){
        var $tbody = $("tbody");
        $tbody.empty();
        users.forEach(user => {
            let $tr = $("<tr>");
            let $td = $("<td>");
            $td.append(user.firstName);
            $tr.append($td);

            $td = $("<td>");
            $td.append(user.lastName);
            $tr.append($td);

            $td = $("<td>");
            $td.append(user.username);
            $tr.append($td);

            $td = $("<td>");
            $td.append("******");
            $tr.append($td);

            $td = $("<td>");
            $td.append("hey@gmail.com");
            $tr.append($td);

            $td = $("<td>");
            $td.append(user.role);
            $tr.append($td);

            $td = $("<td>");
            var deleteBtn = $("<button class='btn btn-primary'>Delete</button>");
            deleteBtn.click(deleteUser);
            deleteBtn.attr("id", user.id);
            $td.append(deleteBtn);
            var editBtn = $("<button class='btn btn-primary'>Edit</button>");
            $td.append(editBtn);
            $tr.append($td);
            $tbody.append($tr);

        });
    }

    function deleteUser(event){ 
        var $button =$(event.currentTarget);
        var id = $button.attr("id");

        userServiceClient.deleteUser(id)
        .then(userServiceClient.findAllUsers)
        .then(renderUsers);
    }
})();