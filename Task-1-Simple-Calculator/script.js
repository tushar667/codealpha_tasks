let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}
