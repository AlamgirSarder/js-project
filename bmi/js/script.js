const calculate_btn = document.querySelector(".calculate_btn");
const clear_btn = document.querySelector(".clear_btn");

calculate_btn.addEventListener("click", () => {
    const ageInput = document.querySelector(".ageinput");
    const ftInput = document.querySelector(".ft");
    const incInput = document.querySelector(".inc");
    const weightInput = document.querySelector(".weight");
    const resultDiv = document.querySelector(".result");

    const age = parseInt(ageInput.value);
    const ft = parseFloat(ftInput.value);
    const inc = parseFloat(incInput.value) || 0; 
    const weight = parseFloat(weightInput.value);

    ageInput.classList.remove("ageborder");
    ftInput.classList.remove("ftborder");
    weightInput.classList.remove("weightborder");

    if (!age || age < 2 || age > 120) {
        ageInput.classList.add("ageborder");
        resultDiv.innerHTML = "<p>Please enter a valid age (2-120).</p>";
        return;
    }
    if (!ft) {
        ftInput.classList.add("ftborder");
        resultDiv.innerHTML = "<p>Please enter your height.</p>";
        return;
    }
    if (!weight) {
        weightInput.classList.add("weightborder");
        resultDiv.innerHTML = "<p>Please enter your weight.</p>";
        return;
    }


const x = ft+"."+inc;
const cm = x * 30.48;
console.log(cm);

const mm = cm/100;

const bmi = weight / (mm * mm);


let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    resultDiv.innerHTML = `
        <p>Your BMI is <strong>${bmi.toFixed(1)}</strong> (${category})</p>
    `;

});





clear_btn.addEventListener("click",()=>{
    const ageInput = document.querySelector(".ageinput");
    const ftInput = document.querySelector(".ft");
    const incInput = document.querySelector(".inc");
    const weightInput = document.querySelector(".weight");
    const resultDiv = document.querySelector(".result");

    ageInput.value= "";
    ftInput.value = "";
    incInput.value = "";
    weightInput.value = "";
    resultDiv.innerHTML = "";

    ageInput.classList.remove("ageborder");
    ftInput.classList.remove("ftborder");
    weightInput.classList.remove("weightborder");
})