# ExpressReactBase
Express backend API with a React frontend boilerplate for my projects. Maybe it will be useful to you too :)

<h2><u>Table of Contents</u></h2>
<a href="#why">Why is this a thing?</a>
<a href="#what">What is this?</a>
<a href="#how">How does it work?</a>

<div id="why">
<h3>Why is this a thing?</h3>
This is a project meant to have boilerplate code to:<br>
<ul>
  <li>Allow for anyone to pick up a ready to use Express API with React Front End codebase and get moving on their project</li>
  <li>Have several examples for users new to Express and/or React to get them quickly going</li>
</ul>
</div>

<div id="what">
<h3>What is this?</h3>
This app was built by using: 
<ol>
  <li>Express-generator to first create an express app</li>
  <li>Creating a /client folder and running create-react-app</li>
  <li>I then modified server.js to demonstrate an API route while ready to serve a react frontend in production</li>
</ol>
</div>

I followed the below tutorial that is linked from the <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> github:<br>
https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/

<h3>Cool. How do I use this?</h3>
In order to run this app you should run npm install in both the root and /client directories in order to install their dependencies.

Root install
<pre>
  npm install
</pre>

Navigate to client and install
<pre>
  cd client
  npm install
</pre>

Once this done you want to go back to root and start the app
<pre>
  npm start
</pre>

Viola! You should see the basic create-react-app webpage.
If you enter in http://localhost:3000/api/getdata you should get json back.

<div id="how">
<h3>How does it work?</h3>

<p>Honestly, this is best explained in the original tutorial under the section "The Rub":</p>
https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/ <br>

<p>In development, npm start will concurrently run two servers on two different ports. The express api server will run on 1337, while the react server will run on 3000. The package.json in /client lists localhost:1337 as its proxy, so you don't have to specify localhost:1337/api/getdata to get data in your localhost:3000 reat app, but just use /api/getdata in your code and it should work.</p>

<p>In production, you will want your server to use npm run server. This will run the express server which will serve your react app from /client/build. This means you <i>must</i> <b>go into client and do npm run build</b></p>
<pre>
  cd client
  npm run build
</pre>
<p>The create-react-app uses webpack to bundle/compile what often looks like a big hairy react app with many components down to a few javascript files. These optimized, production ready files are put into /client/build.</p>
</div>





