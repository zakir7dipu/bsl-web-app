class AuthUser {
    constructor(id,employee_id,name,email, avatar, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.token = token;
    }

    saveUser() {
        let user = {
            id: this.id,
            name: this.name,
            email: this.email,
            avatar: this.avatar,
        }
        localStorage.setItem("user",JSON.stringify(user))
        if(localStorage.getItem('token')){
            localStorage.removeItem('token')
        }
        localStorage.setItem("token",JSON.stringify(this.token))
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getAuthorisation() {
        return JSON.parse(localStorage.getItem('token'));
    }

    logOut() {
        return localStorage.clear();
    }
}
export default AuthUser;
