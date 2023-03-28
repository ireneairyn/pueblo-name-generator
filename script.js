function generatePuebloName() {
  return "Villacamellos de arriba";
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hello world");
  const button = document.getElementById("generate");
  button.addEventListener("click", () => {
    const response = document.getElementById("response");
    const responseText = generatePuebloName();
    response.innerText = responseText;
  });
});
