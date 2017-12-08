// Fetch the PHP module (but don't actually run it yet)
const binderModule = require('./binder.php')();

// Hook stdout and stderr up to the console
binderModule.getStdout().on('data', function (data) {
    console.info(data);
});
binderModule.getStderr().on('data', function (data) {
    console.warn(data);
});

// Run the PHP module, capture its result Closure
// and cast it to a JavaScript function we can call
const binder = binderModule.execute().getNative();

// Call the PHP closure function returned from binder.php, from JavaScript!
binder(document);
