class UserServiceClient {
    findAllUsers() {
        return fetch("/api/user")
            .then(response => {
                return response.json();
            });
    }

    deleteUser(id) {
        return fetch(`/api/user/${id}`, {
            method: "DELETE",
        });
    }

    login(user){
        return fetch("/login", {
            method:"post",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(user),
            credentials:"include"
        })
    }

    updateUser(user,id){
        return fetch(`/api/user/${id}`, {
            method:"put",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include'
        });
    }
    
    profile() { 
        return fetch('/profile', {
            'credentials': 'include'
        })
        .then(response => response.json());
    }

    register(userObj){
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