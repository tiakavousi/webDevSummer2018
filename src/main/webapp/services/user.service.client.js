
class UserServiceClient {
    constructor() {
        this.findAllUsers = findAllUsers;
        this.deleteUser = deleteUser;
        this.login = login;
        this.findUserByUserId = this.findUserByUserId;
        this.register = register;

        function findAllUsers() {
            return fetch("/api/user")
                .then(response => {
                    return response.json();
                });
        }

        function deleteUser(id) {
            return fetch(`/api/user/${id}`, {
                method: "DELETE",
            });
        }
        function login(user){
            return fetch("/login", {
                method:"post",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(user),
                credentials:"include"
            })
        }

        function findUserByUserId(user){
            return fetch(`/api/user/${user.id}`, {
                method:"put",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(user),
                credentials: 'include'
            });
        }
        function profile(currentUser) {
            return fetch('/profile', {
              'credentials': 'include'
            })
            .then(response => response.json());
        }

        function register(userObj){
            return fetch("/register",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(userObj),
                    "credentials": "include"
                }
            )
        }
    }
}