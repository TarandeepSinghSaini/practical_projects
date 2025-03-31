function changeCSS(){
    let switchTo = document.getElementById("theme-button").innerHTML;
    if(switchTo == "Dark Mode"){
        document.getElementById("stylesheet").href = "darkTheme.css";
        document.getElementById("theme-button").innerHTML = "Light Mode";
    }else{
        document.getElementById("stylesheet").href = "lightTheme.css";
        document.getElementById("theme-button").innerHTML = "Dark Mode";
    }
}