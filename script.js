/// inputs
const celsiusInput = document.getElementById('celsiusInput');

const celsiusCheck = document.getElementById('celsiusCheck');
const farenheitCheck = document.getElementById('farenheitCheck');
// result
const result = document.getElementById('Resultado');

// button calculate
const button = document.getElementById('calcularbtn');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if(celsiusCheck.checked){
        console.log("Celsius to Farenheit");
        let farenheit = (celsiusInput.value * 9/5) + 32
        result.innerText = `${farenheit} Grados Farenheit`
    } else if(farenheitCheck.checked){
        console.log("Farenheit to Celsius")
        let celsius = (celsiusInput.value - 32) * 5/9
        result.innerText = `${celsius} Grados Celsius`
    }
})
