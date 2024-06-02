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
        var prefix = value.substring(0, 1); //$
        var numericValue = value.substring(1);//10000
        
        // Convert numeric value to integer and increment by 10
        numericValue = parseInt(numericValue);
        if(buttonId[0]=='1'){
            numericValue += 10;
        }
        else if(buttonId[0]=='2'){
           numericValue -= 10;
        }
        
        // Update the content of the element
        newdiv.innerHTML = prefix + numericValue;
    });
}
