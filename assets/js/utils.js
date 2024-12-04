const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
const calorieForm = document.getElementById("calorie-form");
const calorieSubmit = document.getElementById("calorie-submit");

bmiSubmit.addEventListener("click", function (event) {
  const height = parseFloat(document.getElementById("bmi-height").value) / 100;
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const result = weight / (height * height);

  if (!isNaN(result) && result > 0) {
    if (result < 18.5)
      document.getElementById("bmi-result").innerHTML = "SEU IMC = " + result.toFixed(1) + " (Magreza)";
    else if (result < 24.9)
      document.getElementById("bmi-result").innerHTML = "SEU IMC = " + result.toFixed(1) + " (Peso normal)";
    else
      document.getElementById("bmi-result").innerHTML = "SEU IMC = " + result.toFixed(1) + " (Sobrepeso)";
  }
  else {
    alert("Insira um valor válido!");
  }
});

calorieSubmit.addEventListener("click", function (event) {
  let bmr, need;
  const gender = document.getElementsByName("gender");
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("calorie-height").value);
  const weight = parseFloat(document.getElementById("calorie-weight").value);
  const activity = document.getElementById("activity").selectedIndex;

  alert(gender);

  if (age <= 80 && age >= 15 && height > 0 && weight > 0) {
    if (gender[0].checked) {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    else if (gender[1].checked) {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    else {
      alert("Escolha um gênero!");
      return;
    }
    if (activity == 0) need = bmr;
    else if (activity == 1) need = bmr * 1.2;
    else if (activity == 2) need = bmr * 1.465;
    else if (activity == 3) need = bmr * 1.375;
    else if (activity == 4) need = bmr * 1.55;
    else if (activity == 5) need = bmr * 1.725;
    else need = bmr * 1.9;

    document.getElementById("calorie-result").innerHTML = "SUA NECESSIDADE CALÓRICA = " + Math.round(need) + " cal/dia";
  }
  else
    alert("Insira um valor válido!");
});