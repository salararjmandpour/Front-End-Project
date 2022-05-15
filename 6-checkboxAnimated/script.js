const checkbox = document.querySelector(".checkbox");

let input = document.querySelector("input");

const check = () => {
    input.checked ? input.checked = false : input.checked = true;
}