//Get the string from the page
//Controller function

function getString() {

    document.getElementById('alert').classList.add('invisible');

    let string = document.getElementById('userString').value;

    let revString = reverseString(string);

    displayString(revString);

}

//Reverse the string
//Logic function

function reverseString(string) {

    let revString = [];

    //Reverse the string using a FOR LOOP

    for (let index = string.length - 1; index >= 0; index--) {
        revString += string[index];
    }

    return revString;

}


//Display the reversed string to the user
//View function

function displayString(revString) {

    //Write to the page

    document.getElementById('msg').innerHTML = `Your string reversed is: ${revString}`;

    //Show the alert box
    
    document.getElementById('alert').classList.remove('invisible')
}