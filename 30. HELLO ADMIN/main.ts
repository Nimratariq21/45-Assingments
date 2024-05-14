
let userNames: string[] = ['admin','user1','user2','user3','user4','user5'];

userNames.forEach(userNames => {
    if (userNames === 'admin') {
        console.log("Hello admin would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});