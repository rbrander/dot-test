// testing out the dot templating library
const dot = require('dot');

// one way to generate, is in real time using the template function to create
// the template function that will be used to render the final markup given data
const template = dot.template("<h1>Hi {{=it.foo}}!</h1>");
const result = template({foo:"hello world"});
console.log('result:', result);

// second approach; have all the templates in their own folder and compile them ahead
// of time so you don't spend time during a request waiting for the template function
// to be built.  I assume you could only use defs this way.
const dots = dot.process({ path: "./views"});
console.log('with url:', dots.tester({
  title: 'take a look at this',
  subtitle: 'a simple placeholder image sized 300x200',
  url: 'http://placehold.it/300x200'
}));

console.log('without url:', dots.tester({
  title: 'nothing to see here',
  subtitle: 'no one sees, no one knows'
}))

