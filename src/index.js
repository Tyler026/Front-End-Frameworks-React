import React from 'react';
import ReactDOM from 'react-dom';

// Table

// ReactDOM.render(
//     React.createElement(
//         'table',
//         null,
//         React.createElement(
//             'tr',
//             null,
//             React.createElement(
//                 'th',
//                 null,
//                 'Firstname',
//             ),
//             React.createElement(
//                 'th',
//                 null,
//                 'Lastname'
//             ),
//         ),
//         React.createElement(
//             'tr',
//             null,
//             React.createElement(
//                 'td',
//                 null,
//                 'Janet',
//             ),
//             React.createElement(
//                 'td',
//                 null,
//                 'James',
//             ),
//         ),
//         React.createElement(
//             'tr',
//             null,
//             React.createElement(
//                 'td',
//                 null,
//                 'John',
//             ),
//             React.createElement(
//                 'td',
//                 null,
//                 'Jameson',
//             ),
//         ),
//     ),

// Convert the functions using ES2015

// function hasUsernameAndPassword(user) {
//     return user.name.length > 0 && user.password.length > 0;
// }

// function filterInvalidUsers(users) {
//     var validUsers = [];

//     for (var user of users) {
//         if (hasUsernameAndPassword(user)) {
//             validUsers.push(user);
//         }
//     }

//     return validUsers;
// }

// function userToFormattedString(user) {
//     return 'name: ' + user.name + '\nrole: ' + user.role;
// }

// var users = [
//     {
//         name: 'Kirk Douglass',
//         password: 'iamspartacus',
//         role: 'revolutionary'
//     },
//     {
//         name: 'Charlie Chaplain',
//         password: '',
//         role: 'tramp'
//     },
//     {
//         name: 'Harrison Ford',
//         password: 'AnythingButSnakes',
//         role: 'archaeologist'
//     }
// ];

// var validUsers = filterInvalidUsers(users);

// for (var i = 0; i < validUsers.length; i++) {
//     console.log(userToFormattedString(validUsers[i]));
// }

const hasUsernameAndPassword = (user) => {
    return user.name.length > 0 && user.password.length > 0;
}

const filterInvalidUsers = (users) => {
    let validUsers = [];

    for (let user of users) {
        if (hasUsernameAndPassword(user)) {
            validUsers.push(user);
        }
    }

    return validUsers;
}

const userToFormattedString = (user) => {
    return 'name: ' + user.name + '\nrole: ' + user.role;
}

let users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

let validUsers = filterInvalidUsers(users);

for (let i = 0; i < validUsers.length; i++) {
    console.log(userToFormattedString(validUsers[i]));
}

// Convert the functions using ES2015

// function DieBag(numberOfFaces) {
//     this.values = [];

//     for (var iterationCount = 0; iterationCount < 3; iterationCount++) {
//         for (var faceCount = 0; faceCount < numberOfFaces; faceCount++) {
//             this.values.push(faceCount + 1);
//         }
//     }
// }

// DieBag.prototype.drawValue = function() {
//     return this.values.shift();
// };

// DieBag.prototype.shuffle = function() {
//     for (var i = 0; i < this.values.length; i++) {
//         var temp = this.values[i];
//         var swapIndex = Math.floor(Math.random() * this.values.length);
//         this.values[i] = this.values[swapIndex];
//         this.values[swapIndex]= temp;
//     }
// };

// DieBag.prototype.itemsRemaining = function() {
//     return this.values.length;
// }

// var bag = new DieBag(10);
// bag.shuffle();

// while (bag.itemsRemaining()) {
//     console.log(bag.drawValue());
// }

class DieBag {
    constructor(numberOfFaces) {
    this.values = [];

    for (var iterationCount = 0; iterationCount < 3; iterationCount++) {
        for (var faceCount = 0; faceCount < numberOfFaces; faceCount++) {
            this.values.push(faceCount + 1);
        }
    }
}

    drawValue() {
    return this.values.shift();
};

    shuffle() {
    for (var i = 0; i < this.values.length; i++) {
        var temp = this.values[i];
        var swapIndex = Math.floor(Math.random() * this.values.length);
        this.values[i] = this.values[swapIndex];
        this.values[swapIndex]= temp;
    }
};

    itemsRemaining() {
    return this.values.length;
}

const bag = new DieBag(10);
bag.shuffle();

while (bag.itemsRemaining()) {
    console.log(bag.drawValue());
}


    