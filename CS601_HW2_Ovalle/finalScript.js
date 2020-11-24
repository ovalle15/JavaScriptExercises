
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
    
       /*Checks for errors and when the user needs to cancel and exit the program */ 
        function checkers1() {
            
            console.log("name");
            console.log(name);
            try {
                // When the user clicks on cancel the name value return will be null
                if (name === null) {
                    alert("This program ends here!");
                    // This is flag that tells the init function to stop the execution of the sequence of function execution
                    state.shouldExit = true
                }
                else if (name === "") {
                    // if the user doesn't enter anything, the program will ask to enter the name again
                   name = prompt('You need to enter your name, How would you like to be called today ?');
                }
                else {
                    // if the user correctly inter the name, it will execute the updateMessage function and the set the exit flag to false
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
                // Same here, it will check first if the previous program has been executed and not exited
                if (state.shouldExit === false) {
                    // if that is the case it will prompt the user to enter the numbers
                    numbers = prompt("Please enter two numbers separated by a " +
                        "comma (e.g. 1, 2)").split(",");
                        // checks if the user exits the program or enters a different lenght of numbers 
                    if (numbers === null || numbers.length === 1) {
                        // if the statement above is true, then the flag is set to true
                        state.shouldExit = true;
                    }
                    // if the user enters the correct lenght then the function that adds the two numbers is triggered 
                    if (numbers.length === 2) {
                        enterNumbersAlertAndCalculate()
    
                    } else {
                        // it will ask again if the user enter an incorrect number 
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
                // checks if the program has not be exited (press cancel)
                if (state.shouldExit === false){
                    // prompts the user to continue if the statement above is true
                    messageSecond = prompt("Do you want to keep adding numbers? (e.g Yes/No)");
                    promptAgain()
                }
            }
            catch (e){
                TypeError("The following error was found"+e)
            }
            return state;
        }
        
        // This function initiates the function sequence excution
        function init(){
            display();
            debugger;
            checkers1();
            // checks for the flags is at any time this flag is true, the program should exit and
            // the other functions should not be executed
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
    // You must click in the body to be able to get the program running 
    const bodyEl = document.querySelector('body');
    bodyEl.addEventListener("click", initPrompts);
    
    