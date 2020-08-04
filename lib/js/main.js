// get the refrences
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref(); //establish a refrefrence to the root of the data base

/**
 * Updates the database with the username and message.
 */
function updateDB(event){ // our call back function
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let value = {
        // make 2 colloms
        NAME: username,
        MESSAGE: message
    }

    // make a row
    database.push(value); 
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);
// .on is an event listener that listens to when data is added
// READ INFORMATOION from m database

function addMessageToBoard(rowData){ // callback function

    let row = rowData.val();
    console.log(row);

    // 
    let messageContainer = document.querySelector(".allMessages");
    let newP = document.createElement("p");
    newP.innerText = row.NAME + ": " + row.MESSAGE;
    messageContainer.appendChild(newP);


}