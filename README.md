# front-end
The front-end for the HexHack touch table project. It uses the React.js library created by Facebook to do the cool things you will see when using this app. Please see the guide below on how to run the development environment on your computer.

You will need to following things:
Linux,
Internet,
and the following tools:
Git,
Latest version of NPM and Node.js
If you haven't got those tools listed above, you can install them from 

sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm

we also need a development server that will serve the website:

npm install webpack-dev-server@1.12.1 -g

Then you need to clone/pull this repository to your local hard drive. The setup have been done. You can fire up the development server by cd into the repository's directory and execute the following commands:

webpack-dev-server --progress --colors --port 8050

Then you can go to http://localhost:8050/webpack-dev-server/ to view webpack server status.

go to http://localhost:8050/index.html/ to view the test website I have written.

Webpack Dev server will load the index.html file and compile all react JSX code into java script behind the scene and watcht for any changes you make to the files in assets/js folder. If you have made an error, it will show you in the console.


Note: Please develop the React.js code using ES5 syntax for now 

The React components reside in the (front-end)/assets/js folder, and all the css files are in assets/css folder.
The home page is in index.html.

If you want to know how this project is setup, here is a link to a tutorial:

http://owaislone.org/blog/webpack-plus-reactjs-and-django/

and this one: 

https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html

More information and tutorial about React.js

http://facebook.github.io/react/

There tons of tutorials on the web about react, do a few of them to get a feel about React as a framework.
