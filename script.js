function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calcular() {
    var expression = document.getElementById("display").value;
    try {
        var result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleSwitch = document.getElementById('toggleSwitch');
    toggleSwitch.addEventListener('change', toggleDarkMode);
});

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
