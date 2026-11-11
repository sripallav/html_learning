const getmyGithub = async () => {

    try{

        const response = await fetch ("https://api.github.com/users/sripallav");

        const data = await response.json();

        console.log(`The user login is ${data.login}`)
        console.log(`the user public repos are ${data.public_repos}`)

    }

    catch (error) {

        console.log("error" , error);

    }

}

getmyGithub();


//Task 2 (Fetch Sample App Data - Like a Real React App):

const gettododata = async () => {

    try{

        const responce1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        const data1 = await responce1.json();


        console.log(`Task title: ${data1.title}`);
        console.log(`completed status: ${data1.completed}`)

    }

    catch (error){

        console.log("error" , error);
    }
};

gettododata();












// const getMyGithub = async () => {
//     try{

//         const response = await fetch("https://api.github.com/users/sripallav");

//         const data = await response.json ();

//         console.log(data.login);
//         console.log(data.public_repos);

//     }
//     catch (error) { 

//         console.log("Error" , error);
//     }
// };

// getMyGithub();

