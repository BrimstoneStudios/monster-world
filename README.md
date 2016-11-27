# Monster World
# =============

Javascript style guide used: http://javascript.crockford.com/code.html

## Run Locally

Run the local server `gulp server`
Navigate to `localhost:8080`

## Other Gulp commands

`gulp styles`
`gulp js`
`gulp watch`

## Architecture

# model.js:
Init the compontent's object

# controller.js:
Defines any method that changes the state.
Speaks to view.js through a `playerLocation()` method call.

# view.js
Defines the playerLocation method.
Controls the text and location of cursor's on the player's monitor.
The player's sprite is managed here.

# state.js
This is the ultimate state machine for your component.
Do ONLY state changes here.

Choose a starting character and a starting monster. Roam around the world defeating and catching other monsters in random monster encounter fights.

Use the Monster net to catch a wild monsters. Damaging monsters increases the chance of a successful catch.

Controls:

Movement = arrows

Space = select

Shift = open/close menu


Live demo - http://abkendal.github.io/monster-world