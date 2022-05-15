let myFunction = () => {
    // Get the checkbox
    let checkBox = document.getElementById("toggle");
    const myTimeout = setTimeout(() => {
        if (checkBox.checked == true) {
            document.body.style.background = "#121111";
            console.log("dark");
        } else {
            document.body.style.background = "#8800e7";
            console.log("light");
        }  
    }, 300);
   
}