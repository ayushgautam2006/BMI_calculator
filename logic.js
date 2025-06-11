document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmiForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
      showResult("❗ Please enter valid weight and height.", "red");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    const bmiRounded = bmi.toFixed(2);
    const message = getBMICategory(bmi);

    showResult(`Your BMI is <strong>${bmiRounded}</strong><br>${message}`, "#333");
  });

  function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight ";
    if (bmi < 25) return "Normal weight ";
    if (bmi < 30) return "Overweight ";
    return "Obese ";
  }

  function showResult(text, color) {
    resultDiv.innerHTML = text;
    resultDiv.style.color = color;
  }
});
