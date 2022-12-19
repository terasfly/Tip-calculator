const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const wallet = document.querySelector(".myWalletAfterPayment");
const btn = document.querySelector(".btn");

btn.addEventListener("click", calculateTip);

function calculateTip() {
    const saskaita = document.querySelector(".saskaita").value;
    const rates = document.querySelector(".rates").value;
    if (saskaita === "" || rates === "") {
        error.style.display = "block";
        error.textContent = "Please enter the number";
    } else if (isNaN(saskaita)) {
        error.style.display = "block";
        error.textContent = "Letters not accepted";
    } else {
        let suma = saskaita * rates;
        suma = Math.ceil(suma);
        tip.textContent = `Tip amount $${suma}`;
        let totalus = Number(saskaita) + suma;
        total.textContent = `Total Bill : $${totalus}`;
        console.log(suma);
        let answer = 3456 - totalus;
        wallet.textContent = `My wallet left : $${answer}`;
    }
}
