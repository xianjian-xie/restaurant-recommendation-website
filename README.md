# Module 2 Group Assignment

CSCI 5117, Spring 2021, [assignment description](https://canvas.umn.edu/courses/217951/pages/project-2)

## App Info:

* Team Name: TODO
* App Name: TODO
* App Link: <https://TODO.firebaseapp.com/>

FireBase Account:
umnwebproj2@gmail.com
qweasdzxc1!

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDYEMRkasmcIv2MSX-qpYuvbDxSD30GC_Q",
    authDomain: "umnwebproj2-20e19.firebaseapp.com",
    projectId: "umnwebproj2-20e19",
    storageBucket: "umnwebproj2-20e19.appspot.com",
    messagingSenderId: "343897096907",
    appId: "1:343897096907:web:b166076d01f00f4bffd14e",
    measurementId: "G-6JMSZVKDGB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

### Students

* First Last, x500@umn.edu
* ...


## Key Features

**Describe the most challenging features you implemented
(one sentence per bullet, maximum 4 bullets):**

* ...

Which (if any) device integration(s) does your app support?

* ...

Which (if any) progressive web app feature(s) does your app support?

* ...



## Mockup images

**[Add images/photos that show your mockup](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) along with a very brief caption:**



The first picture shows a log in page, users need to log in before using our app.
![Home page](/MockUp/p1.png?raw=true)

This is the main page after log in. Users can see their unconfirmed trip information on the main page. The user can create a commute plan from origin to destination by certain transport methods.
![Home page](/MockUp/p2.png?raw=true)



This is the trip plan page. The user can create a commute plan from origin to destination by certain transport methods.
![Home page](/MockUp/p3.png?raw=true)



This is the page if walk method is chosen. A map would show. The user can monitor his/her location, steps and heart rate if app is on
![Home page](/MockUp/p4.png?raw=true)



This is the page if bike method is chosen. A map with Minneosta Ride Bike location would shown (need to integrate with Nice Ride if possible)
![Home page](/MockUp/p5.png?raw=true)



This is the page if metro method is chosen. The user can get time estimation of when light rail,bus would come to the nearest transit location (metro data already found). A notification would be sent to user if light rail/bus is close.
![Home page](/MockUp/p6.png?raw=true)


This is the commutes summary homepage. Previous commute plans are listed and a brief summay would be provided. The user can also save his favourite plan.
![Home page](/MockUp/p7.png?raw=true)

![Home page](/MockUp/p8.png?raw=true)

This is the general flow of these pages.
![Home page](/MockUp/flow.png?raw=true)

For desktop experience, users can click "start my trip" button on "trip plan" page. Then this trip will be recorded. Users can confirm this pending trip manually either on "dashboard" page or "commute" page on another computer after finishing this trip.

Reponsive web would be developed and PWA features such as add to home screen would also be integrated in.

## Testing Notes

**Is there anything special we need to know in order to effectively test your app? (optional):**

* ...



## Screenshots of Site (complete)

**[Add a screenshot of each key page](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository)
along with a very brief caption:**

![](https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif)



## External Dependencies

**Document integrations with 3rd Party code or services here.
Please do not document required libraries (e.g., Vue, Vuefire, Firebase).**

* Library or service name: description of use
* ...

**If there's anything else you would like to disclose about how your project
relied on external code, expertise, or anything else, please disclose that
here:**

...
