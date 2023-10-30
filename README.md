$npm install axios
Axios is required for React and it is stored in Node Modules.
Inside a file called "Package-lock.json" everything is very similar to the "Package.json" file. 
Essentially the package.json is the project itself, but the package-lock ensures version control with other users. 
DONT WORRY YOU WONT TOUCH PACKAGE-LOCK.
Should you install axios locally or globally? --- Locally
Time to create a project.
As usual, we make an "index.js",
but we use the package.json for running the program.
This is done by adding index.js to main the "main" key, and adding a keyword linked to the program under scripts.
We then use '$npm start' to run the program.

Now more on interacting with JSON...
import <file> from <file path> wont necessarily work. 
const <filename> = require("file path") works better but lets just fix our import method
Go to the package.json and add "type: module,"
Now use "import <file> from '<file>' assert {type:'json'};" YOURE DONE

So lets say that you imported a json full of objects.

This is perfect for mapping!
    ex. tasks.map((task) => {
        console.log(task)
    })
Or Filetering!
    ex. let completedTasks = tasks.filter((tasks) => {
        return task.completed === true
    })
Desturcture these methods by adding the KWARGS to the methods arguments.
    ex. tasks.filter(({task, id, completed})=> {
        return completed === true
        });

In the words of ant, "axios is like a 2 liner
that fetches data
and automatically jsonifies it
just syntax sugar, way better than get fetch
have to import it tho"

Using the .then method...

    import axios from "axios';

    axios.get("insert url here")
        .then((resp)=>{
            console.log(resp)
        })

using await method...
    const getPokemon = async() =>{
        try{
            let respose = await axios.get("url")
            console.log(response)
        }
        catch (err){
            console.log(err.message)
        }
    }

Lesson 2: What is React and Vite?
React is used for frontend.
Vite is yet another middle man like every other software package.
$npm create vite
then select React
then select Javascript
it then gives you to-do list of terminal commands to run.
One of these is asking you to npm install.
This will enable all dependencies necessary for a react project. All automatically!
Inside Package.json the "dev" comoand runs "vite"
Vite will be ready in a specific port.
This live server has html elements not present on your own HTML.
These html elements are traced back to your src/main.jsx file. which then points to App.jsx
Thats the html, so what about the CSS?
It is coming from App.CSS and index.CSS.
It is recommended to do your styling in App.CSS.

The next key feature is the use of html within a js function.
All of your html features are wrapped between <> and </>.
