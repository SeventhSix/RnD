var exec = require('child-process-promise').exec;

exec('notepad')
   .then(function (result) {
       var stdout = result.stdout;
       var stderr = result.stderr;
       console.log('======================================================================================');
       console.log('stdout: ', stdout);
       console.log('======================================================================================');
       console.log('stderr: ', stderr);
       console.log('======================================================================================');
    })
   .catch(function (err) {
    console.log('======================================================================================');
    console.error('ERROR: ', err);
    console.log('======================================================================================');
});