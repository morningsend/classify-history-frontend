
# Front-end
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

The front-end for the HexHack touch table project. It uses the React.js library created by Facebook to do the cool things you will see when using this app. Please see the guide below on how to run the development environment on your computer.

##How to start development.

###Preparation
If you haven't install node.js, please do so first before continuing.

>https://nodejs.org/en/

Go ahead and install the latest nodejs from its website.

Then clone this repository by typing the commands at the terminal:

	git clone https://github.com/superawesomegroup-softwareengineering/front-end

You should see a folder named **front-end** at the current working directory.

Change into the app's directory, and update the dependencies.
 
	$ cd front-end
	$ npm update

Install the build tools we are going to use: Webpack

	$ npm install -g webpack webpack-dev-server

###Folder structure

Take some time to explore the repository and familiarize where the files are. Below is a snapshot of the folder structure.

	Front-end (root)
		|-node_modules/
		|-html mockup/
		|-app/
			|-build/
			|-components/
			|-lib/
			|-less/
			|-fonts/
			index.js
			index.html
		|-server/
			|-controllers/
			|-services/
			server.js
		|-test/
		package.json
		travis.yml
		README.MD
		webpack.config.js
		webpack-stats.json
		
The front-end and back-end related stuff are in `app/` and `server/` folder respectively. The front-end needs a separated build process than the back-end, therefore we keep them separate. However, they will be able to share code such `npm`  packages. When developing, you will most likely to work with files in these folders.

####About the `app/` folder
The content inside `app` folder is what is served to the end user then he visits our website. It is important that you put files to where it belongs. The files `index.html` and `index.js` are entry points to our app. You should not need to modify it frequently. 

 * All React.js comonents are stashed inside `components/` folder, any new ones you create, please put the `.jsx` files in here.
 * All style sheets are inside the `less` folder. LESS is called a CSS preprocessor. It is an extension to regular CSS that makes writing CSS easier for large projects. The files have extension `.less` 
 * `build` folder contains webpack generated files that is served to the user inside a browser.
 * `lib` contains extra javascript libraries/ jQuery plugins we need
 * `fonts` contains font files

####About the `server/` folder
The back-end does not use any face shiny new JavaScript (e.g. "ES2015", "TypeScript") syntax, so we don't need to run webpack on `server/` folder. However, it is developed with a framework called Express.js.

###Front-end development workflow
You need to have several windows open at the same time: a code editor, chrome/firefox, terminal/cmd with current working directory set project root. 

1. Make some changes to the files in `app/` folder.
2. run the command `npm run build` from terminal. 
3. Open `index.html` to view the changes.

##Changes and Progress
Please document all the major changes here:

*1/02/2016*
A small step forward. Integrated a touch event library into the front-end components, `<Draggable />` can be used to make anything DOM object draggable in the browser. You use it like this:

	```html
		<Draggable>
			<img src="flower.png" /> 
			<--! this will be made draggable -->
		</Draggable>

*29/01/2016*
The front-end and back-end repositories will be merged into one. Any existing back-end code written in Python will be ported over to Node.js. We are aiming to develop a tiny interface around the database, which will most likely to be Mongodb or MySQL. Just don't want to handcraft all the SQL queries.
