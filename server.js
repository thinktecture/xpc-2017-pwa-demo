const webpush = require('web-push'),
  restify = require('restify');

const pushSubscriptions = [];
webpush.setGCMAPIKey('');

const server = restify.createServer();

server.use(restify.bodyParser());
server.use(
  function crossOrigin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.post('/subscribe', (req, res, next) => {
  if (!pushSubscriptions.includes(req.body)) {
    console.log('Subscribed');
    pushSubscriptions.push(req.body);
  }

  res.send(200);
  return next();
});

server.post('/notify', (req, res, next) => {
  pushSubscriptions.forEach(subscription => webpush.sendNotification(subscription, JSON.stringify({
    notification: {
      title: req.body,
      body: 'Pushnachricht von der XPC 2017!',
      icon: '/assets/launcher-icon-3x.png'
    }
  }))
    .then(success => console.log('successfully notified'))
    .catch(err => console.error(err)));

  res.send(200);
  return next();
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
