let userName = prompt("Who's there?", "");

if (userName === "Admin") {
    let password = prompt("What's the password?", "");

    if (password === "The Master") {
        alert("Welcome!");
    }

    else if (password === "" || password === null) {
        alert("Cancelled!");
    }

    else {
        alert("Wrong Password!");
    }
}

else if (userName === "" || userName === null) {
    alert("Cancelled!");
}

else {
    alert("I don't know you!");
}