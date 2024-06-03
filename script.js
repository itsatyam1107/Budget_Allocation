// Get all elements with class "increment_class"
var incrementButtons = document.getElementsByClassName('increment_class');

// Iterate over the collection and add event listeners to each button
for (var i = 0; i < incrementButtons.length; i++) {
    incrementButtons[i].addEventListener('click', function(event) {
        // Inside the event listener function, "this" refers to the button being clicked
        var buttonId = this.id;
        console.log(buttonId);//
        12
        // Get the element with id "1"
        var newdiv = document.getElementById(buttonId[1]);//2
        
        // Get the current value of the element
        var value = newdiv.innerHTML;//$10000
        
        // Extract the prefix and numeric value

        var numericValue = value.substring(0);//10000
        
        // Convert numeric value to integer and increment by 10
        numericValue = parseInt(numericValue);
        if(buttonId[0]=='1'){
            numericValue += 10;
        }
        else if(buttonId[0]=='2'){
           numericValue -= 10;
        }
        
        // Update the content of the element
        newdiv.innerHTML = symbol + numericValue;
        sumValues();
    });
}
let symbol = '';

function updateContent() {
    // Get the dropdown and text field elements
    var dropdown = document.getElementById('options');
    var textField = document.getElementById('valueInput');
    var select_curr = document.getElementById('Currency');

    // Get the selected option and text field value
    var selected_curr = select_curr.options[select_curr.selectedIndex].value;
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    console.log(selectedOption);
    var textFieldValue = textField.value; 
    var last = selectedOption[selectedOption.length - 1];
    console.log(last);
    var targetElement = last;
    
    // Determine the symbol based on the selected option
    if (selected_curr == "1") {
        symbol = '$';
    } else if (selected_curr == "2") {
        symbol = '₹';
    } else if (selected_curr == "3") {
        symbol = '€';
    } else if (selected_curr == "4") {
        symbol = '¥';
    }

    // Get the target element to update
    var targetElementElement = document.getElementById(targetElement);

    // Update the inner content of the target element
    targetElementElement.innerHTML = textFieldValue;
    sumValues();
}

function sumValues() {
    let sum = 0;
    var bug = document.getElementById('Budget');
    var textFieldValue2 = parseFloat(bug.value); //20000
    
    // Iterate over elements with IDs 'element1' to 'element5'
    for (let i = 1; i <= 5; i++) {
        let element = document.getElementById(i);
        
        // Get the current value of the element, convert it to a number, and add it to the sum
        let currentValue = parseFloat(element.innerHTML);
        
        // Check if the value is a number before adding to sum
        if (!isNaN(currentValue)) {
            sum += currentValue;
        }
    }
    
    if (sum > textFieldValue2) {
        alert("You don't have enough budget");
        return;
    }

    // Display the sum in the 'sumResult' element
    document.getElementById('Spent').innerHTML = `${symbol}${sum}`;
    
    var remaining = textFieldValue2 - sum;
    document.getElementById('Remaining').innerHTML = symbol + remaining;
    document.getElementsByClassName('set_curr').innerHTML=symbol;
}
