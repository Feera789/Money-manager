document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.getElementById("year");
  const amountInput = document.getElementById("amount");
  const expenseChart = document.getElementById("expense-chart");

  for (let year = 2020; year <= 2040; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  function setMonthYear() {
    const now = new Date();
    const currentMonthIndex = now.getMonth();
    const currentYear = now.getFullYear();

    const initialMonth = months[currentMonthIndex];
    const initialYear = currentYear;

    monthSelect.value = initialMonth;
    yearSelect.value = initialYear;
  }

  setMonthYear();
});
