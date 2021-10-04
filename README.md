# 2021-Accessibility-Toolbar

## Demo
https://jesseearley.github.io/2021-Accessibility-Toolbar/

## Description
The Accessibility Toolbar (2021 version) is a reformatted and updated version of my previous Accessibility Toolbar project (https://github.com/JesseEarley/accessibilitytoolbar). This project allows you to quickly add accessibility tools to the front-end of your website for your website visitors to help them navigate your website more effectively. The features include:

### Grayscale
This feature will convert your website to grayscale on the fly.

### Highlight Links
This feature will highlight all of the links on a page.

### Change Contrast
This feature will invert the colors on a page.

### Increase Text Size
This feature will increase the text size across all elements on a page. (Note: This feature will change the font-size for the 'HTML' element. In order to properly make use of this feature, your font-styles should be in **rem** units.

### Increase Curosr
This feature will increase the curosr size for both the regular **pointer** and **hand** cursors. 

## Installation
1. Copy markup between the HTML comments
2. Paste into your webpage or project
3. Include CSS and JS files

## Customization
The Accessibility Toolbar has base styles, so please style as necessary to incorporate into your website or project. The CSS file does have 3 variables to allow for additional customization:
- --accessibility-tools-wrapper: Specify width of the toolbar - default is 100%
- --accessibility-tools-highlightColor: Specifcy the color that links should be highlighted in when **Highlight Links** option is selected  - default is #f00
- --accessibility-tools-textSize: Specify the base font size when **Increase Font Size** is selected  - default is 16px (See note above about Increase Text Size feature)
