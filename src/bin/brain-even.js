#!/usr/bin/env node
import greeting from '..';
import even from '../games/even';

greeting(even, 'Answer \x1b[31m"yes"\x1b[0m if number even otherwise answer \x1b[31m"no"\x1b[0m.');
