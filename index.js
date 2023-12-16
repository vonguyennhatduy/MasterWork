
document.getElementById("switchButton").onclick = function () {

    var SetTheme = document.getElementById("myBody");
    document.getElementById("myBody").classList.toggle("dark");

    var theme;
    if(SetTheme.classList.contains("dark")){
        console.log("dark mode");
        theme = "DARK";
    }else {
        console.log("light mode");
        theme = "LIGHT";
    }
    // lưu vào LocalStorage
    localStorage.setItem("PageTheme" , JSON.stringify(theme));

};

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
    document.getElementById("myBody").classList = "dark";
}

