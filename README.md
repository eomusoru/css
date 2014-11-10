Modern CSS Architecture
===

<p>Tips and tricks for a clean and modular CSS code? Here is a small resume for Presentation/modern_css_architecture.pdf</p><br />
<hr /><br />
<h1>PRESENTATION RESUME</h1>
<br />
<h2>I Modern CSS architecture</h2><br />
<ul>
    <li>What is a good CSS Architecture</li>
    <li>Bad Practices</li>
    <li>Conclusions</li>
    <li>Solutions</li>
    <li>Best practices</li>
</ul>
<br /><br />

<h2>II CSS Methodologies </h2>
<p>Use methodologies and naming conventions to write a good CSS architecture.</p><br />

<ul>
<li>OOCSS (Oriented Object CSS)</li>
<li>SMACSS (Scalable and Modular Architecture for CSS)</li>
<li>BEM (Block, element, modifier)</li>
</ul>

<h2>III CSS Documentation</h2>
<p>Use KSS to generate CSS Documentation</p>

Steps:
<ol>
<li>Install KSS via NodeJS</li>
<li>Download KSS Example folder</li>
<li>Run command</li>
</ol><br />
<code>kss-node integration/ output-name/ --template doc/template --less integration/common.less</code>
<br />
<strong>kss-node</strong> > Use kss tool <br />
<strong>output-name/</strong> > Folder where the CSS Documentation will be generated<br />
<strong>--template</strong> > Specify that we are going to use a template for our documentation<br />
<strong>doc/template</strong> > Source of the template used for documentation<br />
<strong>--less</strong> > Specify if we usee css/less/sass etc<br />
<strong>integration/common.less</strong> > File where we have included all partials<br />

<h2>IV Build CSS like a LEGO</h2>
<p>Example of how to write a modular CSS Architecture.</p>

<p>We are going to write a modular CSS which contains 2 elements and 2 modifiers.</p>

<strong>_blocks.less and _buttons.less</strong> > 2 elements<br />
<strong>_functions.less</strong> > Functions that are reponsible to extend the elements<br />
<strong>ui_variant.less</strong> > Function that generation 2 elements and 2 modifiers<br />
<strong>colors.less</strong> > Call the ui_variant function for 5 colors<br />
<strong>components.less</strong> > Include all files