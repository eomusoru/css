Modern CSS Architecture
===

Tips and tricks for a clean and modular CSS code? Here is a small resume for Presentation/modern_css_architecture.pdf


PRESENTATION RESUME

1. Modern CSS architecture
- What is a good CSS Architecture
- Bad Practices
- Conclusions
- Solutions
- Best practices

2. CSS Methodologies 
Use methodologies and naming conventions to write a good CSS architecture.

- OOCSS (Oriented Object CSS)
- SMACSS (Scalable and Modular Architecture for CSS)
- BEM (Block, element, modifier)

3. CSS Documentation
Use KSS to generate CSS Documentation

Steps:
a. Install KSS via NodeJS
b. Download KSS Example folder 
c. Run command 
<code>kss-node integration/ output-name/ --template doc/template --less integration/common.less</code>

kss-node     					-> Use kss tool 
output-name/ 					-> Folder where the CSS Documentation will be generated
--template   					-> Specify that we are going to use a template for our documentation
doc/template 					-> Source of the template used for documentation
--less		 					-> Specify if we usee css/less/sass etc
integration/common.less    		-> File where we have included all partials

4. Build CSS like a LEGO
Example of how to write a modular CSS Architecture.

We are going to write a modular CSS which contains 2 elements and 2 modifiers.

_blocks.less and _buttons.less 	-> 2 elements
_functions.less 				-> Functions that are reponsible to extend the elements
ui_variant.less 				-> Function that generation 2 elements and 2 modifiers
colors.less  					-> Call the ui_variant function for 5 colors
components.less 				-> Include all files