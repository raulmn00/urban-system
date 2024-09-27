import PromptSync from 'prompt-sync';

const readPrompt = PromptSync({});

const name = readPrompt('Qual é o seu nome? ');
console.log(name);
