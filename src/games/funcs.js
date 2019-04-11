import greeting from '..';

export const getRandom = (a, b) => Math.floor(a + Math.random() * (b - a));

export const startGame = (game, rules) => greeting(game, rules);
