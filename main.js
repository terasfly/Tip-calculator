const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    error = document.querySelector(".error");

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 3000);
};
const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == "") {
        // console.log("please add  a number");
        error.style.display = "block";
        hideError();
    } else if (isNaN(bill)) {
        error.textContent = "Please enter a number";
        error.style.display = "block";
        hideError();
    } else {
        let amount = bill * rate;
        console.log(typeof tipAmt);
        // console.log(bill);
        // tipAmt = Math.ceil(tipAmt);
        // console.log(tipAmt);
        tip.innerHTML = `Tip: $ ${amount}`;
        console.log(tip);

        // let totalBill = Number(bill) + tipAmt;
        // total.textContent = `Total Bill: $${totalBill}`;
    }
};

btn.addEventListener("click", calculateTip);