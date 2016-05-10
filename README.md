
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
		|-server/
			|-controllers/
			|-services/
			server.js
		|-test/
		|-progress/
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

###How to write unit tests and run them?
All the test specs should be put inside the `spec/` folder. We use test framework called **Jasmine** to execute unit tests. If you want to execute the unit test, open up `testRunner.html` inside of `spec/` folder. The tests will run in browser. 
If you are going to create a new spec, you need to code up the `**Spec.js` file and put into the `spec/` folder. Open up `IncludeSpec.js` and add a line to it:

    require('./yourtestSpec.js');

Then run the command 

    npm build-test
        
Once webpack has finished bundling the test files, you can open `testRunner.html` as before to see the results.

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


*04/03/2016*
Added a progress folder. A markdown to keep track of current development progress. Take any feature not yet implemented from the list and get started working on them. If you finished a feature, edit the file and put your name in the table. Also don't forget to mark it as completed. Also please add new requirements to the list.
#How to use the application
1. Open ./build/app/index.html
2. Click "New Images" to get a set of images to tag.
3. Enter a tag into the "Tag" input field.
4. Move images that belong to that tag into the dark grey region.
5. Press the blue cloud button to commit the tagging.
6. If you are happy with the tagging, go to step 2.
7. If you are unhappy with the tagging, go to step 4.
8. If you want to use the same images with a different tag, go to step 3.
