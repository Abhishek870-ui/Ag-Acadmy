/*Eg02
    Create JSON object using follwoing variable
        @data
    JSON keys are
        @login
        @logout
        @setCredentials
        @clearCredential
    JSON values are function definitions of
        @login
        @logout
        @setCredentials
        @clearCredential
        */
var data = {
    login: login,
    logout: logout,
    setCredentials: setCredentials,
    clearCredentials: clearCredentials
};
function login() {
    return "Welcome to Login Module...!";
}
function logout() {
    return "Welcome to logout module";
}
function setCredentials() {
    return "Welcome to setCredentials module";
}
function clearCredentials() {
    return "Welcome to clearCredentials module";
}
document.write(data.login() + "<br>");
document.write(data.logout() + "<br>");
document.write(data.setCredentials() + "<br>");
document.write(data.clearCredentials() + "<br>");
