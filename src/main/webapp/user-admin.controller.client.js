(function(){
    function init(){
        findAllUsers()
        .then(renderUsers);
    }
    init();

    function findAllUsers(){
        return fetch("/api/user")
        .then(response =>{
            return response.json();
        })
    }

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
            $td.append("Student");
            $tr.append($td);

            $td = $("<td>");
            var deleteBtn = $("<button>Delete</button>");
            deleteBtn.click(deleteUser);
            deleteBtn.attr("id", user.id);
            $td.append(deleteBtn);
            var createBtn = $("<button>Create</button>");
            $td.append(createBtn);
            $tr.append($td);

            $tbody.append($tr);

        });
    }
    function deleteUser(event){
        console.log(event);
        var $button =$(event.currentTarget);
        var id = $button.attr("id");

        fetch(`/api/user/${id}`, {
            method:"DELETE",
        })
            .then(findAllUsers)
            .then(renderUsers);
    }
})();