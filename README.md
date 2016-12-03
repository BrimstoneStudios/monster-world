# Monster World
## Game Instructions

Choose a starting character and a starting monster. Roam around the world defeating and catching other monsters in random monster encounter fights.

Use the Monster net to catch a wild monsters. Damaging monsters increases the chance of a successful catch.

Controls:

Movement = arrows

Space = select

Shift = open/close menu

## Style Guide
Javascript style guide used: http://javascript.crockford.com/code.html

## Run Locally

Run the local server `nmp start` OR `webpack-dev-server`
Navigate to `localhost:8080`

## Other Useful Commands
- To lint your javascript: `npm run lint`
- Running webpack `webpack --progress --colors`
`gulp watch`

## Architecture

### model.js:
Init the compontent's object

### controller.js:
Defines any method that changes the state.
Speaks to view.js through a `playerLocation()` method call.

### view.js
Defines the playerLocation method.
Controls the text and location of cursor's on the player's monitor.
The player's sprite is managed here.


Live demo - http://brimstonestudios.github.io/monster-world/
