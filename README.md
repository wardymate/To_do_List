# Todo Challenge ![Travis](https://travis-ci.org/wardymate/todo_challenge.svg?branch=master)

Details of the Challenge Below:

Where I am and things I struggled with. Initial intention was to test with protractor and use karma jasmine for my unit tests. Build the app on an express server. Struggle with automating a slenium server using Grunt. Managed to get Grunt to start a selenium server for my protractor tests. However still struggled with getting grunt-express-server to start my node server automatically. Tried a few other options - grunt-express, grode-nodemon all unsuccessful. So at the moment my build fails although my first protractor test passes when I run it locally with starting the node serverin a separate bash session. Although unseccesfull I feel I have learnt a lot about using Grunt and exploring different packages that are availbale and how to add them.

I decided to proceed with starting my unit tests and this is the stage I am up - ran into a small issue where karma was not finding the todoList variable in the first line of my controller - resolved now.

Will proceed with writing unit tests for my controller/s and build so working version locally that does not store tasks.
second stage will be to create storage via an api on the node server.



* Deadline: submit completed pull request by 9am on Monday
* You may use whatever level of JavaScript you feel comfortable with - pure JS, jQuery, Angular, or whatever weird and wonderful framework you want to try. Extra points for DogeScript

## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

Good luck!

