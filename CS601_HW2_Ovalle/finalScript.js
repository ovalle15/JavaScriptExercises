
// /* Global variables */
// var message ="Welcome to my site!!";
// var name;
// var numbers = [];
// var arraySize = numbers.length;
// var sum = 0;
// var messageSecond;
//
// /*displays the welcome message */
// function display() {
//     alert(message)
// }
// /* displays an updated version of the message */
// function updateMessage() {
//     debugger;
//     // assigns the length of the name to a variable that can be use within the function
//     var nameLength = name.length
//     // checks if the length is greater than 0, so it will prompt the user to ask for a name again
//     if (nameLength > 0 ) {
//         message = "Welcome to my site " + name + " !!";
//         alert(message)
//     }
//     else {
//         name = prompt('How would you like to be called today ?')
//         debugger;
//         // updateMessage();
//     }
// }
// /* allows for the input of a number and calculates the sum of those two numbers */
// function enterNumbersAlertAndCalculate() {
//     // checks if the length of the array is two ,if not it prompts the user again
//     if (numbers.length !== 2)  {
//         numbers = prompt("Please enter two numbers separated by a comma (e.g. 1, 2)")
//     }
//     // if the condition above is not met, the function will continue to execute
//     else {
//         sum = parseInt(numbers[0]) + parseInt(numbers[1])
//         message = "The sum of your two numbers is: " + sum
//         alert(message)
//         // Checks if the sum meets the criteria and displays an alert message accordingly
//         if (sum > 10) {
//             alert("That is a big number")
//         } else {
//             alert("That is a small number")
//         }
//     }
// }
// /* This function prompts the user to choose between continue adding numbers or not*/
// function promptAgain(){
//     // this variable fetches the message from the global scope
//     var response = messageSecond.toLocaleLowerCase();
//     // Checks for a response that is "yes" and will continue to execute  until otherwise
//     while  (response === "yes") {
//         // it needs to continue to prompt and save the new value in the variable numbers so it can be use
//         // in the enterNumbersAlertAndCalculate function
//         numbers = prompt("Please enter two numbers separated by a comma (e.g. 1, 2)").split(",")
//         enterNumbersAlertAndCalculate();
//         messageSecond = prompt("Do you want to keep adding numbers? (e.g Yes/No)");
//         // after updating the messageSecond response , the response also has to be updated
//         response = messageSecond.toLocaleLowerCase();
//         // The numbers array had to be reset so the new numbers enter can be calculated.
//         numbers = []
//     }
//     (alert("Thanks for visiting, that was fun !!")) ;
// }
//
//
// /*Executing functions*\
//
//
// /* Welcomes the visitor with an alert **/
// display()
// /* Prompts the visitor for his her name**/
// name = prompt('How would you like to be called today ?')
// console.log(name);
// /* displays the updated Message**/
// updateMessage()
// /* Asks the visitor to enter two numbers with a prompt and calculates the two numbers*/
// numbers = prompt("Please enter two numbers separated by a comma (e.g. 1, 2)").split(",")
// enterNumbersAlertAndCalculate()
// /* It prompts the user to continue or not the addition */
// messageSecond= prompt("Do you want to keep adding numbers? (e.g Yes/No)");
// promptAgain()








// function initPrompts() {
const initPrompts = () => {
    /* Global variables */
    var message = "Welcome to my site!!";
    var name;
    var numbers = [];
    var sum = 0;
    var messageSecond;
    // var state = true;
    const state = {
        shouldExit: true
    };

    /*displays the welcome message */
    function display() {
        alert(message)
    }

    /* displays an updated version of the message */
    function updateMessage() {
        // debugger;
        name = prompt('How would you like to be called today ?');
        // debugger;
        while (name.length < 1) {
            name = prompt('You need to enter your name, How would you like to be called today ?')
        }
        message = "Welcome to my site " + name + " !!";
        alert(message);
    }

    /* allows for the input of a number and calculates the sum of those two numbers */
    function enterNumbersAlertAndCalculate() {
        // checks if the length of the array is two ,if not it prompts the user again
        while (numbers.length !== 2) {
            numbers = prompt("Please enter two numbers separated by a comma (e.g. 1, 2)")
        }
        // if the condition above is not met, the function will continue to execute
        sum = parseInt(numbers[0]) + parseInt(numbers[1])
        message = "The sum of your two numbers is: " + sum
        alert(message)
        // Checks if the sum meets the criteria and displays an alert message accordingly
        if (sum > 10) {
            alert("That is a big number")
        } else {
            alert("That is a small number")
        }
        return numbers;
    }


    /* This function prompts the user to choose between continue adding numbers or not*/
    function promptAgain() {
        // this variable fetches the message from the global scope
        var response = messageSecond.toLocaleLowerCase();
        // Checks for a response that is "yes" and will continue to execute  until otherwise
        while (response === "yes") {
            // it needs to continue to prompt and save the new value in the variable numbers so it can be use
            // in the enterNumbersAlertAndCalculate function
            numbers = prompt("Please enter two numbers separated by a comma (e.g. 1, 2)").split(",")
            enterNumbersAlertAndCalculate();
            messageSecond = prompt("Do you want to keep adding numbers? (e.g Yes/No)");
            // after updating the messageSecond response , the response also has to be updated
            response = messageSecond.toLocaleLowerCase();
            // The numbers array had to be reset so the new numbers enter can be calculated.
            numbers = []
        }
        alert("Thanks for visiting, that was fun !!");
    }


    /*Executing functions*\

    /* Welcomes the visitor with an alert **/
    function checkers1() {
        // name = prompt('How would you like to be called today ?')
        console.log("name");
        console.log(name);
        try {
            if (name === null) {
                alert("This program ends here!");
                state.shouldExit = true
            }
            else if (name === "") {
               name = prompt('You need to enter your name, How would you like to be called today ?');
            }
            else {
                updateMessage();
                state.shouldExit = false;
            }
        }
        catch (e) {
            TypeError("The following error was found" + e)
        }
        return state;

    }
    function checkers2() {
        try {
            if (state.shouldExit === false) {
                numbers = prompt("Please enter two numbers separated by a " +
                    "comma (e.g. 1, 2)").split(",");
                if (numbers === null || numbers.length === 1) {
                    state.shouldExit = true;
                }
                if (numbers.length === 2) {
                    enterNumbersAlertAndCalculate()

                } else {
                    numbers = prompt("You need to enter two numbers separated by " +
                        "comma (e.g 1, 2").split(",");
                    if (numbers.length === 2) {
                        enterNumbersAlertAndCalculate();
                    } else {
                        state.shouldExit = true
                    }
                }
            }
        } catch (e) {
            TypeError("the following error was found" + e)
        }
        return state;
    }


    function checkers3() {
        try {
            if (state.shouldExit === false){
                messageSecond = prompt("Do you want to keep adding numbers? (e.g Yes/No)");
                promptAgain()
            }
        }
        catch (e){
            TypeError("The following error was found"+e)
        }
        return state;
    }

    function init(){
        display();
        debugger;
        checkers1();
        if (state.shouldExit === true ) return;
        debugger;
        checkers2();
        if (state.shouldExit === true ) return;
        debugger;
        checkers3();
        if (state.shouldExit === true ) return;
    }

    init()

};

const bodyEl = document.querySelector('body');
bodyEl.addEventListener("click", initPrompts);

