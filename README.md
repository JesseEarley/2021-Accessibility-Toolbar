# 2021-Accessibility-Toolbar

## Demo
https://jesseearley.github.io/2021-Accessibility-Toolbar/

## Description
The Accessibility Toolbar (2021 version) is a reformatted and updated version of my previous Accessibility Toolbar project (https://github.com/JesseEarley/accessibilitytoolbar). This project allows you to quickly add accessibility tools to the front-end of your website for your website visitors to help them navigate your website more effectively. It uses cookies to keep track of what features have been selected so that these features are active on the next visit. The features include:

### Grayscale
This feature will convert your website to grayscale on the fly.

### Highlight Links
This feature will highlight all of the links on a page.

### Change Contrast
This feature will invert the colors on a page.

### Increase Text Size
This feature will increase the text size across all elements on a page. (Note: This feature will change the font-size for the 'HTML' element. In order to properly make use of this feature, your font-styles should be in **rem** units.

### Increase Letter Spacing
This feature will increase the spacing between all letters on the page.

### Dyslexia Friendly Font
This feature will change the font for the entire page to one that is easier to read for those with dyslexia. 

### Increase Cursor Size
This feature will increase the curosr size for both the regular **pointer** and **hand** cursors. 

## Installation
1. Copy markup between the HTML comments
2. Paste into your webpage or project
3. Include project CSS and JS files
4. Include FontAwesome font file included in **index.html**

## Customization
The Accessibility Toolbar has base styles, so please style as necessary to incorporate into your website or project. The CSS file does have 4 variables to allow for additional customization:
- --accessibility-tools-wrapper: Specify width of the toolbar - default is 100%
- --accessibility-tools-highlightColor: Specifcy the color that links should be highlighted in when **Highlight Links** option is selected  - default is #f00
- --accessibility-tools-textSize: Specify the base font size when **Increase Font Size** is selected  - default is 16px (See note above about Increase Text Size feature)
- --accessibility-tools-letterSpacing: Specify the distance between letters when **Increase Letter Spacing** is selected - default is .2rem; 

## Usage
The toolbar can be triggered in a variety of methods:
- **ALT + SHIFT + A** keyboard combination 
- Tabbing to the **Display Accessibility Tools** link and pressing **Enter** 
- Using a mobile device and touching the accessibility icon in the top right of the screen

## Attributions and Thanks
- Thank you Derek Featherstone (https://twitter.com/feather) for teaching a full-day class on web accessibility at the 2015 An Event Apart conference in Washington D.C. It set me on the path of always considering accessibility from the start of any project rather than as an afterthought.
- Thank you Font Awesome for providing a free version of your font. As someone who is not great at creating artwork and icons from scratch, you've been a lifesaver.
- Thank you Digital X at Michigan State University for recognizing the web accessibility work that I've done and continue to strive to do.
