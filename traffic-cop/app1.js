var tc = require('traffic_cop_client');
var publisher = tc.createClient('localhost', 3542);
var subscriber = tc.createClient('localhost', 3542);

subscriber.subscribe('channel_one', 'channel_two', 'channel_three');
subscriber.on('message', function(channel, message) {
  console.log('Got message %s on channel %s', message, channel);
});

function doIt() {
    publisher.publish('channel_one', 'Hi there');

    setTimeout(doIt, 1500);
}

setTimeout(doIt, 1500);