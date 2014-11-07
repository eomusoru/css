Introduction
============


Front-end guidelines
--------------------

Due to the project's complexity, the team's size, and the geographic distance between its members, it can be very difficult to keep a clean code base.
That's why we have to write consistant code, quickly understandable by any colleague or future co-workers.

#### BASICS

We support IE8+ and are adhering to the "Graceful degradation" principles. This means that we can use most of the CSS3 features, as long as we provide a functional fallback for older browsers.
Typically, to make a gradient background we won't use the -ms-filter, displaying a flat background on IE8 and older.

#### BEM CSS

On a front-end point of view, to stick with good practices we chose to adopt a [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) inspired syntax for our CSS.
To quickly illustrate this naming convention we have `blocks`, `block__elements`, and `element--modifiers`
```
.block{}
.block__element{}
.block--modifier{}
```

This syntax is completed by javascript specific classes `.js-my-selector`, this allows us to move easily a javascript behavior from an element to another).

Then we have also some state specific class like `.is-visible` or `.is-animated`, often toggled by javascript.


#### JAVASCRIPT

The main guidelines are defined in the project's redmine at the [Javascript section](http://redmine.dnxnetwork.lu/projects/live-platform/wiki/Coding_standards#Javascript).

*More on that soon*

#### TWIG

First, we recommend to get familiar with the Twig templating language by reading the [TWIG Documentation](http://twig.sensiolabs.org/documentation).

*More on that soon*


Ressources
----------
Interactive mockups are created managed with [Invision app](https://projects.invisionapp.com/d/main/default/#/projects/608745/screens). This applications is useful to comment the designs and have it validated.

The main two fonts used on the project are **'Roboto'** and **'Lato'**

- [Download Roboto](http://www.fontsquirrel.com/fonts/download/roboto)
- [Download Lato](http://www.fontsquirrel.com/fonts/download/lato)

Graphic designers may also download the grid system files to help them structure the design of any page, these have the exact dimensions of the grid used by front-end developpers:

- Illustrator files: [960 Grid](https://drive.google.com/file/d/0B03y-fsHSXbja28yU1VfX3pUZE0/edit?usp=sharing), [1168 Grid](https://drive.google.com/file/d/0B03y-fsHSXbjemxxTi14N2puOHc/edit?usp=sharing)
- Photoshop files: [960 Grid](https://drive.google.com/file/d/0B03y-fsHSXbjWkl4ZHRNQjg2c28/edit?usp=sharing), [1168 Grid](https://drive.google.com/file/d/0B03y-fsHSXbjSVo4LXFxUF9VSEk/edit?usp=sharing)
- PNG files: [960 Grid](https://drive.google.com/file/d/0B03y-fsHSXbjbWRkZjNzSVEza2c/edit?usp=sharing), [1168 Grid](https://drive.google.com/file/d/0B03y-fsHSXbjNFNweTBqOWtHTWM/edit?usp=sharing)


Useful Links
------------
- Understanding the BEM syntax: [Mind BEMding](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- Official KSS website: [Knyle Style Sheets](http://warpspire.com/kss/)
- KSS's Node.js implementation: [Kss-node](https://github.com/hughsk/kss-node)
- HTML5 Semantic elements: [HTML5 Doctor](http://html5doctor.com/)
- TWIG templating language documentation: [TWIG](http://twig.sensiolabs.org/documentation)


How this styleguide is built ?
------------------------------

Built upon [KSS](https://github.com/kneath/kss) and its [Node.js](http://nodejs.org/) implementation, node-kss scans the **.less** files of the project, looking for comments written with its [specific syntax](http://warpspire.com/kss/syntax/).
To manually generate styleguides on your working copy, there is a few prerequisites:

1. Install [Node.js](http://nodejs.org/) on your machine.
2. Install the **kss-node** package: `npm install -g kss`
3. Create a folder outside of your local project ( e.g. **www/docs/** ).
4. Download a [styleguide template](https://github.com/htanjo/kss-node-template/archive/master.zip) and paste it at the root of your new folder.
5. Now you can simply generate the styleguide by running `kss-node` command with `--template` option, like below.


**Example:**
```
kss-node integration/ output-folder/ --template doc/template --less integration/common.less
```