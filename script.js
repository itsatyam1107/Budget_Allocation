let symbol = '';
let sum = 0; 
let textFieldValue2; 

function updateCurrency() {
    const selectCurr = document.getElementById('Currency');
    const selectedCurr = selectCurr.value;

    const symbolMap = {
        '1': '$',
        '2': '₹',
        '3': '€',
        '4': '¥'
    };
    symbol = symbolMap[selectedCurr] || ''; 

    updateAllCurrencySymbols();
    sumValues();
}

function updateContent() {
    const dropdown = document.getElementById('options');
    const textField = document.getElementById('valueInput');
    const last = dropdown.value.slice(-1);

    const targetElement = document.getElementById(last);
    targetElement.innerHTML = symbol + textField.value;

    updateAllCurrencySymbols();
    sumValues();
}

function updateAllCurrencySymbols() {
    for (let i = 1; i <= 5; i++) {
        const element = document.getElementById(i);
        if (element) {
            const currentValue = element.innerHTML.substring(1);
            element.innerHTML = symbol + currentValue;
        }
    }

    document.getElementById('Spent').innerHTML = symbol + sum;
    const remaining = textFieldValue2 - sum;
    document.getElementById('Remaining').innerHTML = symbol + remaining;
    document.getElementById('bug_label').innerHTML = "Budget "+symbol;
    document.getElementById('prefix').innerHTML = symbol;

}

function sumValues() {
    sum = 0; 
    textFieldValue2 = parseInt(document.getElementById('Budget').value) || 0;

    for (let i = 1; i <= 5; i++) {
        const element = document.getElementById(i);
        if (element) {
            const currentValue = parseInt(element.innerHTML.substring(1)) || 0; 
            sum += currentValue;
        }
    }

    document.getElementById('Spent').innerHTML = symbol + sum;
    document.getElementById('Remaining').innerHTML = symbol + (textFieldValue2 - sum);
}


const incrementButtons = document.getElementsByClassName('increment_class');
for (let i = 0; i < incrementButtons.length; i++) {
    incrementButtons[i].addEventListener('click', function() {
        const remaining = parseInt(document.getElementById('Remaining').innerHTML.substring(1)) || 0;

        if (remaining === 0 && this.id[0] === '1') { 
            alert("You don't have any budget remaining.");
            return;
        }

        const buttonId = this.id;
        const newDiv = document.getElementById(buttonId[1]);
        let numericValue = parseInt(newDiv.innerHTML.substring(1)) || 0;
        numericValue += (buttonId[0] === '1') ? 10 : -10;

       
        if (numericValue < 0 && buttonId[0] === '2') {
            numericValue = 0;
        }

        newDiv.innerHTML = symbol + numericValue;
        sumValues();

       
        updateButtonStates();
    });
}

function updateButtonStates() {
    const remaining = parseInt(document.getElementById('Remaining').innerHTML.substring(1)) || 0;
    for (let i = 0; i < incrementButtons.length; i++) {
       
        incrementButtons[i].disabled = (remaining === 0 && incrementButtons[i].id[0] === '1'); 
    }
}

function check() {
    const budgetInput = document.getElementById('Budget');
    const valueInput = document.getElementById('valueInput');

    if (isNaN(parseInt(budgetInput.value)) || budgetInput.value === '') {
        alert("Please enter the budget first.");
        valueInput.value = '';
    } else {
        const remaining = parseInt(document.getElementById('Remaining').innerHTML.substring(1)) || 0;
        const value = parseInt(valueInput.value) || 0;
        if (remaining < value) {
            alert("You have exceeded your budget.");
            valueInput.value = '';
        }
    }
}

function set_remaining() {
    const rem = document.getElementById('Remaining');
    const bug = document.getElementById('Budget');
    const bugVal = parseInt(bug.value) || 0;
    rem.innerHTML = symbol + bugVal;
}
updateCurrency(); 
