// DEMO: Normal Function vs Arrow Function

const student = {
    name: "Sri Pallav",

    // 1. Regular Function losing 'this' inside timeout
    regularGreeting: function() {
        console.log("Regular function outside timeout:", this.name); // "Sri Pallav"

        setTimeout(function() {
            // 'this' gets lost!
            console.log("Regular function inside timeout:", this.name); // undefined
        }, 500);
    },

    // 2. Arrow Function keeping 'this' safely (Lexical this)
    arrowGreeting: function() {
        setTimeout(() => {
            // 'this' is preserved from the parent!
            console.log("Arrow function inside timeout:", this.name); // "Sri Pallav"
        }, 1000);
    }
};

student.regularGreeting();
student.arrowGreeting();
