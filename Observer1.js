let observers = [];

function attach(type) {
    observers.push(type);
}

function detach(type) {
    let newObservers = [];

    for (let observer of observers) {
        if (observer != type) {
            newObservers.push(observer);
        }
    }

    observers = newObservers;
}

function notify(message) {
    console.log("\nAnnouncement:");

    for (let observer of observers) {
        console.log(observer + " subscribers received: " + message);
    }
}

// Subscribers
attach("Holiday");
attach("Exam");
attach("Festival");

// Notifications
notify("Tomorrow is a holiday!");
notify("Prepare well for exams!");

// Remove Festival subscription
detach("Festival");

// Notify again
notify("Welcome back to school!");

const age=21
if(age<18){
    console.log("Not eligible")
}
else if(age==18){
    console.log("elligible,congrats")
}
else{
    console.log("elligible")
}