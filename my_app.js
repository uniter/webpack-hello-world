// Run the PHP file, capture its result Closure
// and cast it to a JavaScript function we can call
const binderModule = require('./binder.php')();

// Hook stdout and stderr up to the console
binderModule.getStdout().on('data', function (data) {
    console.info(data);
});
binderModule.getStderr().on('data', function (data) {
    console.warn(data);
});

const binder = binderModule.execute().getNative();

// Call the PHP closure function returned from binder.php, from JavaScript!
binder(document);
