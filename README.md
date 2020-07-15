# Marathon Training Programs

As part of Code Institutes 2nd milestone project which should include the usage of HTML5,
CSS3 and JavaScript as coding languages, I quickly came up with the idea of creating
a simple page that lets a user select and track a training program based on their choices.

Talking to my mentor we also decided that the program should be somewhat interactive
and give the user a reason to come back after first visiting.

The short story here is: I am personally a big runner and initially I found it difficult
to find a simple training plan for my preparations to do marathons again. This site can produce 8 different training
programs depending on your choices or needs as well as it lets you track your progress and saves it locally. 
It's simple, it's easy it could be a good start for those who do not yet follow a plan 
to conquer their running goals.

## UX

The website is for those who want to run a marathon or a half marathon and importantly, for those who
need a simple plan which they can track and follow through with on a day to day basis.

This site tries to do that. It's overwhelmingly simple, leaves very little reason to be confusing or misleading
and it has some inspiring pictures of what it may look like getting up, getting out into the world, 
overcomming the temptation to stay inside and watch netflix (or coding videos).

The site has 3 pages:
* 1st introduction: A self-explanatory heading, what the site does + a background-photo of a runner in his habitat.
* 2nd invitation: site asks for a name and to pick a running plan from 3 parameters + another beautiful
background-picture showing what being on the road can be like, this time with a more casual runner.
* 3rd the program: main feature besides the program itself is to click on a day, marking it complete or skipped.
This page provides options for printing or sharing, however those features are not quite working as
they potentially should. For fun, an ispirational peptalk including the user's name has been added to a
carousel just below the training program table.

To make the site look more alive, hover effects has been added to buttons as well as a carousel on
page 1 and 3. I would have like to make it more vibrant adding more visual features, however I did not
find the time to do so. 

The only user story that has been researched and implemented has been my own. This is a very capable story since I have been
running for a long time, **however** it would have been much better to include other runner's story, besides
my mentor (I think he hates running), so they could give an honest opinion of what they actually need - 
and like.

Overall goal for the page is though, to learn how to code. **ALL** coding is new territory to me. That may very
well show in the actual code. Doing my best here.

#### Wireframing

This is something that I struggle a lot with spending time on. But about 4-6 hours did go into creating
3 simple pages using Figma. A lot of that time was dedicated just learning the program. 
I have uploaded the unimpressive wirefram as pdf [here](https://github.com/ableskewer/2nd-milestone-project-Code-Institute/tree/master/assets).

## Features

### Existing Features

- Feature 1 - When moving on from 1st page, you're invited to pick a program. This feature allows
you to make 3 choices and put in a name. The choices you make will produce a training program. Once you click
"Lets Go" you will get to 3rd page and the training program is right there.

- Feature 2 - When clicking on a specific day on the table a modal box appears and you can mark the day: completed,
partly completed or skipped. This saves your progress even if you browser is closed or computer restarts. As it says
it does not work in incognito.

- Feature 3 - Print button: will print a window of the table. This is all without coloring and not 
very impressive. Unfortunately the marked progress will not be included in the printout.

- Feature 4 - Share to facebook: this feature dont really work. I inteded it to make a scrennshot of the actual
table with whatever progress which was made and share that to a facebook feed.

- Feature 5 - A "Start Over" button on the 3rd page which will lead you to 2nd åage where you might want to chose 
different parameters for you training program.

- Feature 6 - If you have chosen parameters and thus a program has been created, the "Let's Go" button on 2nd page, will now also let you
know that it will delete all progress you have stored if clicking the button again. A button on the 3rd page where
the training program, "Start Over" will let you get to the 2 page again. Also the navbar can do that for you.

- Feature 7 - Navbar: the navigation bar is simple. Some bootstrap has been used for responsiveness: Most relevant
feature here is 1: it hides the link to the 3rd page, the "keep track" page if a program has not been generated. 
Should you somehow get to that 3rd page anyway, it will change upon loading and just look empty. 2: the page you are on
will be colored orange in the navbar.

### Features Left to Implement

- A proper share to facebook feature.
- A print feature in color that also shows the marked progress.
- A link to a page that explains some of the details in the program (perhaps most relevant).
- More different choices when choosing parameters in the training plan
(each added choice currently adds at least 4 more programs, so quite time consuming).
- Inspirational videoes of people running. And very importantly, looking happy whilst doing so.


## Technologies Used

- Figma for wireframing [Figma](https://www.figma.com/)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
- [JQuery](https://jquery.com) - to simplify DOM manipulation.
- [Bootstrap4](https://getbootstrap.com/) 
    - For styling ideas, better responsiveness over all devices, navbar-scroll effect and most important
    when creating rows and columns, latter which was done to a limited extent.
- [Google search engine](www.google.come)
    - This was by far the most used technology as I have learned so much code via asking google all my questions;
    finding tips and tricks and just generel basic knowledge about mentioned technologies. Later ill give a list of
    sites found through google which has been of great help.
- [FontAwesome](https://fontawesome.com/) - used one facebook font - Thanks!
- [Google Fonts](https://fonts.google.com/) - Found one font that I found great for this project: Raleway.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - The main focus of this project which was the subject of last chapter studying @ Code Institute.

## Testing

I have done no scripted testing. Just the most obvious: F5(refresh), responsiveness across all devices
 and cross browser usage. Developers tool and the console has been giving feedback so no errors
 would be left to sit.

- Does all links work? Absolutely! There are very few.

- Does the form on page work in all ways when adding info and submitting?
    - First Off - clicking submit will let you know that you need to fill in the form and make 3 choices.
    - As for saving to localStorage using developers tool and the console it has been a long process of getting my code to do what
    it needed to do. The console has been a big help in letting me know when errors appeared,
    if there was typos in the script, or if localStorage had keys with values.
    - The form submit button first deletes data in localStorage. Typing "localStorage" in console will let you see if that works.
    - As the users name is being used on page 3, it has a rule of maximum of 20 characters and a minimum of 1.
    Essentially I didnt want localStorage to be affected if those conditions was not met.
- Does the training programs appear as intended? What if you change them? 
    - The programs are created using parameters from localStorage which are added when
    using the form provided on page 2. This has all been manually tested with all 8 types of programs.
- What if you find a way to page 3 (keeptrack.html) without having filled in the form. 
    - You cannot actively do that as the navbar link to that page is not present unless the form
    has been filled. But if you do anyway, the page will be manipulated to display nothing but an empty program with the
     "start over" button still there returning the user to the form page (2nd page).
- How did you test responsiveness on all devices?
    - I used Mozilla Firefox and Google Chrome on my pc using their options for mobile view, table view etc.
    I used my own Iphone for viewing the page. It is not perfect but I have not found any major issues here.
    An example of imperfect would be the navbar and footer which does not appear transparent on my phone.
- What if I mark a day complete in the training program? Does it stay there forever?
    - LocalStorage saves the changes and loads it upon loading the page. This work for restarting pc,
    closing down the browser etc. It does not work in incognito as I opened a page there, marked the day
    and upon refresh the mark dissapeared. Also doens't work if you change browser or device.
- I have pasted my javacsript code into [jshint](https://jshint.com/) to help me find erros in the code
    - I have been mixing jquery and JavaScript (probably very bad?) as Im still learning how to code.
    As my site works I am currently not too concerned about that.
- I have run my html code through [here](https://validator.w3.org/) - to get rid of some basic errors in my html code.


## Deployment

This site is deployening Program](https://ableskewer.github.io/2nd-milestone-project-Code-Institute/).

This is more or less all I know about GibHub pages and cant unfortunately inform you about git-brances or
local code.

## Credits

### Content

Here is list of sites where I either copied some few lines of code or simply just 
read some information which lead me to write my own:

- List of pages where I did not copy any code but  read about how to use it:

stackoverflow.com/questions/1179928/how-can-i-put-a-vertical-line-down-the-center-of-a-div
stackoverflow.com/questions/13437446/how-to-display-selected-item-in-bootstrap-button-dropdown-title
stackoverflow.com/questions/37736056/button-type-button-vs-submit/37736165
stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link
stackoverflow.com/questions/9578348/best-way-to-execute-js-only-on-specific-page
stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set
stackoverflow.com/questions/25137460/localstorage-save-and-retrieve-css-of-an-element/25137656#25137656
stackoverflow.com/questions/7540085/disable-text-input-history
stackoverflow.com/questions/7614928/change-br-height-using-css/28310011
stackoverflow.com/questions/2714765/using-border-radius-and-box-shadow-together-css
stackoverflow.com/questions/8419354/get-html5-localstorage-keys
stackoverflow.com/questions/3391576/how-can-i-implement-prepend-and-append-with-regular-javascript
stackoverflow.com/questions/10845109/innerhtml-not-working-with-classname-in-js
stackoverflow.com/questions/2587669/can-i-use-a-before-or-after-pseudo-element-on-an-input-field
til.hashrocket.com/posts/v2s2gxgifj-submit-a-form-with-a-button-outside-the-form

www.youtube.com/watch?v=k8yJCeuP6I8&t=346s (LocalStorage video - GREAT)

www.w3schools.com (All sorts of lessons on CSS and Javascript/jqeuery)

myclabs.github.io/jquery.confirm/
freefrontend.com/css-text-animations/
freefrontend.com/css-input-text/


- List of sites and situtations where I directly copied some code:
    - getbootstrap.com/ - I copied buttons and forms but ended up not using it and doing the 
styling myself. HOWEVER - the Javascript for the navbar was directly copy/pasted only me changing
some basic things to the styling.
    - webdeasy.de/en/top-css-buttons-en/ - Copy pasted the "#1 Hover Glow Effect" -button. All credits goes to them.
    - css-tricks.com/examples/hrs/ hr-style-2 - Although the code is quite simple,
I did copy directly from here to style my horizontal lines
    - www.tablesgenerator.com/html_tables# This site creates the html for large tables.
    It was copy paste but nothing difficult, just time saving. Thanks ALOT!
    - support.imcreator.com/hc/en-us/articles/232392888-Creating-a-Facebook-share-link-on-your-page 
    As this didnt really work as I hope there is not much credit to give, but I am using copied code
    for my share-to-facebook option. So here you go. Credit.. Thank you!

### Media

- The photos used in this site were obtained from [unsplash](unsplash.com/) - Great content! Thank you!

### Acknowledgements

- The only ones being involved in this project has been myself and my great mentor Aaron Sinnott, 
mentor add Code Institute. What a guy!
