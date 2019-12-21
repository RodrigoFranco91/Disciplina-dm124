const timer = 1000;
const task = () => console.log('An operation just happened!');

setTimeout(task, timer);

console.log('Is it ended?');