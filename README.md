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
<---HOOKS COMPONENTS PROPS--->
When react renders the Application, it actually creates a virtual copy. First, the code acts upon the virtual DOM. 
Maybe you want to change the Header to read something different with an EventListener. The virtual DOM will render the changed state and make a comparison. If the DOM is not the same as the virtual DOM then the Virtual will take over. State chandge triggers a comparison which will trigger a HOOK.

import React, { useState } from 'react';

function Example() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={() => addItem('New Item')}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

State changes can be reversed once the client refreshes the page. This keeps the experience unique to that specific client.

useEffect is used to trigger behavior when a dependency changes.

<---Responsive Web Design--->
Block = is things like 'body' , 'div', 'p', 'section....
By default they will take up the full width of the page.
Inline = is things like 'span', 'i', 'b', 'em' ...
These tighty wrap content and has no true dimensions.
Inline-Block = 'img'
Inline Block is the best of both worlds. It has dimensions but also will share horizontal space.

Talking about blocks (specifically divs); divs have the 'display block' attribute by default. Likewise, inline elements automatically have an 'inline' property. This can be seen in the inspect tools.

Now for inline-block. At first glance, inline-block might look similar to just inline. However as size grows, remember that everything is a box. Inline has no dimensions, so other inline elements will line up next to AND ON TOP OF to maintain the box shape. Inline-box will push its siblings out to the direction of the justify content.

.box {
    height: 100px;
    width: 100px;
    padding: 2px;
    margin: 10px;
    border: 2px solid black;
    display: inline-block;
}

Where this might get confusing is when elements have one of these properties and their children or parents have another property.

Now for the position property.

#theBox {
    position: relative;
    top : 20px;
    right: 30px;
} 

Position attribute affects the 'flow' of the elements on the page. For instance; a nav bar on a website will always follow you at the top of your screen with the 'position: absolute' property.

Absolute doesnt necessarily mean an element sticks to the top of your window, rather it could stick to the top of the container it is in if that containter holds what is called 'position: relative'

Now there is another position property called 'fixed'. Fixed references directly to the document. There are no relative parents.

Floats are a way to shift images or other elements to one side while other texts or images move around it. Like how word articles in a newspaper move around the pictures.

Elements with the clear property will refuse to share horizontal space with floated elements on the specified side.
Overflow
Normally, html elements will automatically expand their size to accomodate all of their children. However, if you explicitly set a height on an element, and it has more content than will fit in that height, the content will overflow from the container.
Set a fixed height #boxes.

#boxes {
    height: 700px;
}
All the boxes on the page won't fit in 700px of vertical space. Use the inspector to see how the content is flowing outside of its container.

If we want to control what happens when there is more content than fits in its container, we can set the overflow property. The most common value is overflow:hidden which makes the overflowing content invisible.

#boxes {
    height: 700px;
    overflow: hidden;
}
If you want the extra content to be accessible without messing up your layout, then overflow:scroll will make #boxes scrollable. If you think that #boxes will have too much content only some of the time, you may want to use overflow:auto. This will make the scrollbars appear only when necessary.