
(function(){
    var userServiceClient = new UserServiceClient();
    function init(){
        userServiceClient.findAllUsers()
        .then(renderUsers);
    }
    init()
    var $createBtn = $('#createBtn');
    $createBtn.click(createUser);

    var $updateBtn = $("#updateBtn");
    $updateBtn.click(updatePage);

    function renderUsers(users){
        var $tbody = $("tbody");
        $tbody.empty();
        users.forEach(user => {
            let $tr = $("<tr>");
            let $td = $("<td contenteditable>");
            $td.append(user.role);
            $td.attr("id", "role" + user.id);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "firstName" + user.id);
            $td.append(user.firstName);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "lastName" + user.id);
            $td.append(user.lastName);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "username" + user.id);
            $td.append(user.username);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "password" + user.id);
            $td.append(user.password);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "email" + user.id);
            $td.append(user.email);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "phoneNumber" + user.id);
            $td.append(user.phoneNumber);
            $tr.append($td);

            $td = $("<td contenteditable>");
            $td.attr("id", "dateOfBirth" + user.id);
            $td.append(user.dateOfBirth);
            $tr.append($td);
            $td = $("<td contenteditable>");

            var deleteBtn = $("<button class='btn btn-primary margined-btn admin-btn'>Delete</button>");
            deleteBtn.click(deleteUser);
            deleteBtn.attr("id", user.id);
            $td.append(deleteBtn);

            var editBtn = $("<button class='btn btn-primary margined-btn admin-btn'>Edit</button>");
            editBtn.click(editUser);
            editBtn.attr("id", user.id);
            $td.append(editBtn);
            $tr.append($td);
            $tbody.append($tr);

        });
    }
    function createUser(){
        var user = {
            role:$('#role').val(),
            password: $("#password").val(),
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            username: $("#username").val(),
            email: $("#email").val(),
            phoneNumber : $("#phoneNumber").val(),
            dateOfBirth : $("#dateOfBirth").val(),
        };
        userServiceClient.register(user)
        .then(()=>alert("user has been created"));
    }
    function updatePage(){
        $(".main-table").fadeOut(500).fadeIn(500);
        init();
    }
    function deleteUser(event){ 
        var $button =$(event.currentTarget);
        var id = $button.attr("id");
        
        userServiceClient.deleteUser(id)
        .then(userServiceClient.findAllUsers)
        .then(renderUsers);
    }
    function editUser(event){
        var $button = $(event.currentTarget);
        var id = $button.attr("id");

        var user = {
            role:$(`#role${id}`).text(),
            firstName: $(`#firstName${id}`).text(),
            lastName: $(`#lastName${id}`).text(),
            username:$(`#username${id}`).text(),
            email: $(`#email${id}`).text(),
            phoneNumber : $(`#phoneNumber${id}`).text(),
            password : $(`#password${id}`).text(),
            dateOfBirth : $(`#dateOfBirth${id}`).text(),
          };
        
          userServiceClient.updateUser(user,id)
          .then(updatePage);
    }
})();