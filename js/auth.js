class Auth {
    constructor() {
        document.querySelector('body').style.display = "block";
        const auth = localStorage.getItem('auth');
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if(auth != 1) {
            window.location.replace("/")
        } else {

        }
    }

    logOut() {
        localStorage.removeItem('auth');
        window.location.replace("/");
    }
}