# XPC 2017 PWA Demo

This sample shows some features of Progressive Web Apps in Angular. You can follow the branches (`feature/step1`, …) to recap the single steps shown in the talk.

## Setup

1. Install prerequisites (this sample was created with Node.js 7.10.0 and Angular CLI 1.0.6)
2. Clone the repository
3. Install the npm packages via `npm install`
4. Run `ng serve --prod`

## Push
While offline availability and the Web App Manifest work out of the box, setting up push requires some more steps. Please note that the push server included in this repository is a very simple implementation that only supports Android and Chrome as of now. There are third-party services that can handle more targets.

1. Create [a new Firebase project](https://console.firebase.google.com/project/).
2. Update the `gcm_sender_id` by using the `messagingSenderId` provided in the _Add App > Add Firebase to my Web App_ dialogue in the Firebase project’s settings (in order to support older versions of Chrome).
3. Set the API key shown in the Firebase project’s settings in `server.js` (line 5).
4. Start the (simple) local push server using `npm run push-server` in the terminal or command line.
5. Make sure to refresh the Service Worker enabled app so ensure that the push subscription was established.
6. You can send an arbitrary string to `http://[::]:8080/notify` in order to notify all registered clients.