// function to check if a phone number is a valid U.S. phone number
function isValidUSPhoneNumber(phone_number) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(phone_number);
}

// function to handle "Check" button
document.getElementById("check-btn").addEventListener("click", function() {
  let pn_input = document.getElementById("user-input").value.trim();
  let validity_result = document.getElementById("results-div");

  if(!pn_input) {
    alert("Please provide a phone number");
    return;
  }

  if(isValidUSPhoneNumber(pn_input)) {
    validity_result.textContent = `Valid US number: ${pn_input}`;
  }
  else {
    validity_result.textContent = `Invalid US number: ${pn_input}`;
  }
});

// function to handle "Clear" button
document.getElementById("clear-btn").addEventListener("click", function() {
  document.getElementById("results-div").textContent = "";
});
