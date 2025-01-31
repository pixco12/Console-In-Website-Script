# Console-In-Website-Script
This is a js script that allows you to use and see the console of your website from the website itself. Why would i need this? Example your coding on a tablet and arent able to access console through inspect element, instead you can paste this script into your website and you will be able to see your console and even interact with it.

# How to setup
To setup you must :

1. Open up the html of the website page you want it in.
2. Copy and paste `<script src="https://cdn.jsdelivr.net/gh/pixco12/Console-In-Website-Display-Script@latest/script.js?ts=" + new Date().getTime()"></script>` into the body at the beginning of the body (make sure its before all your scripts). (the Date and getTime is to cache bust and get the latest commit)
3. Your all set! Read the instructions on how to use.

# How to use

- Click on the console icon at the bottom right of the website page you pasted the script in to view the console.
- To execute a js command go to the console and enter the thing you want to execute into the text box and click the execute button above the text box.

# Update Log

- Fixed Bugs
- Changed console icon
- Added a way to execute js commands in the console display
