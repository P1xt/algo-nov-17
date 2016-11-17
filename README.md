# JavaScript Algorithm Challenge - November 9 through 16

I would like to challenge everyone to solve the following algorithmic problem over the next week. Consider the problem carefully, take your time, edit your solution as many times as you want.

## The Challenge
This is a "code golf" challenge which means: Solve the following algorithmic challenge using the fewest characters of code possible. Every character (alpha, numeric, whitespace, punctuation, ANYTHING) between the beginning brace` "{"` and the ending brace `"}"` will count as one character. 

For instance:
```
function rideP1xt(g, c) { return g };
```
would receive a score of 10 because there are 10 characters between the braces (including spaces). Note, that newlines and tabs count as characters as well.

You are aiming for the "lowest score" possible.

### Answers to questions about the challenge#

@Omegga  - Passing logic in as default parameters, though wildly clever, wouldn't be acceptable.

@Velenir - Yes, you can pollute the global namespace. Yes you can rewrite the function as an arrow function, though it should be testable by calling `rideVelenir("ABSTAR", "USACO")` and nothing except the comet and group should be passed in via parameters (no shaving off bytes by declaring or initializing anything outside the function or as default parameters to the function).

#### The rules (totally unenforceable, but hey, be honest, you'll learn more):

* Post your solution in spoiler tags.
* One solution per camper, but you can edit your post (and thus your solution) as many times as you want until the challenge is over.
* Name the function you create `ride<Forum Name>` where `<Forum Name>` is your name on the forums, my solution would be in a function named `rideP1xt`
* Solve the problem yourself. Don't google for an answer, don't hit stack overflow, don't read other camper's answers.
* To the extent that it's possible, limit yourself to one post in this thread (so it'll be easier for me to round up everybody's answers at the end.
* Please avoid discussion after you've solved the problem until the challenge is over, so you don't spoiler others and mess up their chances to solve the problem on their own.

## The Problem

> It is a well-known fact that behind every good comet is a UFO. These UFOs often come to collect loyal supporters from here on Earth. Unfortunately, they only have room to pick up one group of followers on each trip. They do, however, let the groups know ahead of time which will be picked up for each comet by a clever scheme: they pick a name for the comet which, along with the name of the group, can be used to determine if it is a particular group's turn to go (who do you think names the comets?). The details of the matching scheme are given below; your job is to write a function which takes the names of a group and a comet and then determines whether the group should go with the UFO behind that comet.

> Both the name of the group and the name of the comet are converted into a number in the following manner: the final number is just the product of all the letters in the name, where "A" is 1 and "Z" is 26. For instance, the group "USACO" would be 21 * 19 * 1 * 3 * 15 = 17955. If the group's number mod 47 is the same as the comet's number mod 47, then you need to tell the group to get ready! (Remember that "a mod b" is the remainder left over after dividing a by b; 34 mod 10 is 4.)

> Write a function named ride<Forum Name> where <Forum Name> is your name on the forums which takes as parameters the name of the comet and the name of the group and figures out whether according to the above scheme the names are a match, and returns the string "GO" if they match and "STAY" if not. The names of the groups and the comets will be a string of capital letters with no spaces or punctuation, up to 6 characters long.

> 
> rideX("COMETQ", "HVNGAT");
> Should Return: GO

> rideX("ABSTAR", "USACO");
> Should Return: STAY



## Helpful Notes:

Any camper who wants can join in this, if you're not up to the JavaScript section of FCC yet, hit [codecademy (javascript lessons)](https://www.codecademy.com/learn/javascript)  or [The Net Ninja's JavaScript Tutorial on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET) and then code your solution on [repl.it](https://repl.it/languages/javascript). Once you've got it working, copy the code into a post here (inside spoiler tags, of course). 

### You might also find the following helpful:
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
### You create spoiler tags by enclosing your spoiler text in between `[details="Spoiler"]Text you want to hide[/details]`

Here's exactly how to put a code snippet inside a Spoiler tag. You can copy it directly (be sure to get the blank line at  the top) and paste it into your post, then replace the `function rideX` part with your own function.

    
    [details=Spoiler]

    ```javascript

    function rideX(cometName, groupName) {
      
    }

    ```

    [/details]

I will be testing all solutions using Node.js 6.5 (so you can feel free to use any ES6 that will run in 6.5, which is most of it).

@JacksonBates Wrote up a handy tutorial on how to use Mocha and Chai to write a handy test runner to double check that your function produces the correct values here: 
http://forum.freecodecamp.com/t/testing-your-own-code-using-mocha-and-chai-simple-example/44149 

## When the challenge ends:

Here's a handy countdown timer so you know how long before the challenge ends:
https://countingdownto.com/countdown/javascript-algorithm-challenge-november-9-through-16-countdown-clock

The morning after the challenge ends, I'll first test everyone's answer to ensure it's correct, then run a script to character count all of the correct solutions. 

## The Reward?

Aside from the pure fun of practicing creating algorithms, I don't have a lot to offer. Though I will post the names of everyone who solved the problem, with a special list of those who solved it the most succintly as an edit to this post


## The Results

### All Participants
----------
Zsoltime,
BenGitter,
NewBorn,
JacksonBates,
Jenovs,
Omegga,
Velenir,
kevcomedia,
joelpeyton,
alichristensen,
ZackWard,
Nacla01,
RayBB,
appleJax,
NicksIdeaEngine,
Cirych,
Bhavik


### Top Five by solution character count
----------
Velenir - 76 characters    
Omegga - 80 characters    
kevcomedia - 83 characters    
ZackWard - 93 characters    
RayBB - 93 characters     
