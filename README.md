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

## Getting Started
- `npm install`
- `nmp start`
- Navigate to `localhost:8080`

## Other Useful Commands
- To lint your javascript: `npm run lint`
- Running webpack `npm build`
- Running specs `npm test`

## Abilities
All abilities are built using the following scheme.

```js
mockAbility: {
  name: 'mockAbility',
  type: 'mockType',
  category: 'mockCategory',
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