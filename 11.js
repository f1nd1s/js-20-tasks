window.onload = function () {
    const conversionType = prompt(
        "Enter 'C' to convert from Celsius to Fahrenheit or 'F' to convert from Fahrenheit to Celsius:"
    );

    if (conversionType === 'C' || conversionType === 'c') {
        let C = parseFloat(prompt("Enter temperature in Celsius:"));
        let f = (9 * c) / 5 + 32;
        document.getElementById("promptResult").textContent = `${c}°C is ${f}°F`;

    } else if (conversionType === 'F' || conversionType === 'f') {
        let f = parseFloat(prompt("Enter temperature in Fahrenheit:"));
        let c = (f - 32) * 5 / 9;
        document.getElementById("promptResult").textContent = `${f}°F is ${c}°C`;

    } else {
        alert("Invalid choice!");
    }
};
