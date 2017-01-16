testadsf
# Monster World
Live demo - http://brimstonestudios.github.io/monster-world/

## Game Instructions
Choose a starting character and a starting monster. Roam around the world defeating and catching other monsters in random monster encounter fights.

Use the Monster net to catch a wild monsters. Damaging monsters increases the chance of a successful catch.

### Controls:
- Movement = arrow keys
- Select/Action = space key
- Open/Close Main Menu or Back = shift key

## Style Guide
Javascript style guide used: http://javascript.crockford.com/code.html

## Run Locally

Run the local server `nmp start` OR `webpack-dev-server`
Navigate to `localhost:8080`

## Other Useful Commands
- To lint your javascript: `npm run lint`
- Running webpack `webpack --progress --colors`
- Running specs `karma start`

## Architecture
We are running using ES6 modules. Each file is a single module that the app runs when necessary. When you create new functionality you can export that module using ES6 default export. When you need to use a module simply import it using ES6 imports. EX:

```js
/* rng.js */
export default function () {...};
```
```js
/* app.js */
import rng from './rng'
```

### model.js:
Init the compontent's object

### controller.js:
Defines any method that changes the state.
Speaks to view.js through a `playerLocation()` method call.

### view.js
Defines the playerLocation method.
Controls the text and location of cursor's on the player's monitor.
The player's sprite is managed here.

## Abilities
All abilities are built using the following scheme.

```js
scratch: {
  name: 'Scratch',
  type: 'normal',
  category: 'physical',
  power: 40,
  accuracy: 1,
  effect: '',
  func: function () {
    abilityUsed.call( this, battle.playerBattleMonster );
  }
}
```

## Battle

## Items

## Levels

## Monsters

## NPCS

## Player