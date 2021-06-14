function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    // Displaying the value
    var amt = 0;
    if(inputVal == ""){
       alert("Deposit unsuccessful. Current balance is GHC " + amt)
    }
    else{
       var input = Number(inputVal) + 0;
       alert("Deposit successful. Your new balnace is GHC " + input);
    }
  }