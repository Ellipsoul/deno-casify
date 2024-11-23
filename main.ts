import { parseArgs } from 'jsr:@std/cli';
import { toKebabCase, toSnakeCase } from 'jsr:@std/text';
import { bgGreen, blue, magenta, red, yellow } from 'jsr:@std/fmt/colors';

// Parse and type the command line arguments
const flags = parseArgs(Deno.args, {
  boolean: ['snake', 'kebab'],
  string: ['text'],
  default: { text: 'Hello, world!' },
});

// Prompt the user for their age
const age = prompt('Enter your age: ');

// Exit if the user is not old enough
if (parseInt(age!) < 21) {
  console.log(red('You are not old enough to run this command 💀'));
  Deno.exit();
}

// Print a success message
console.log();
console.log(bgGreen('ACCESS GRANTED'));
console.log();

// Use the native confirm dialog to ask the user if they are sure
const shouldProceed = confirm('Wait, r u sure?');

// Exit if the user does not confirm
if (!shouldProceed) {
  console.log(red('Terminated 💀'));
  Deno.exit();
}

// Print the text in uppercase, kebab case, or snake case
console.log();
console.log(yellow(flags.text.toUpperCase()));

flags.kebab && console.log(blue(toKebabCase(flags.text)));
flags.snake && console.log(magenta(toSnakeCase(flags.text)));

console.log(flags);
