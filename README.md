# Tooltip

### Remarks:
- Tooltip is a feature to hover or click on element and display info or image as popup on elements.


![First page](./src/images/readme.PNG)

## **Instruction for installation:**
- [npm install --save-dev webpack](https://webpack.js.org/guides/installation/)

- [npm i less](https://www.npmjs.com/package/less)

- [npm i less-loader](https://www.npmjs.com/package/less-loader?activeTab=versions)

- [npm i nodemon](https://www.npmjs.com/package/nodemon)

- [npm i webpack-cli](https://www.npmjs.com/package/webpack-cli)


## **Qualtrics integration:**

First you should pass the id element as an array in the Qualtrics.SurveyEngine.addOnReady function.
where you need click or hover you should add a span(or other elements) with id="tooltip" . Then you should also insert a span (or other elements) with id="tooltip-content" for the popup windows.
If you need to do this in a questionnaire with several items, you should only enter a number for the item id.
At the end you should just put CSS in (Style => Custom css) and JS in (General=>Footer=>js).

E.g. 

### Qualtrics.SurveyEngine.addOnReady(function(){
    window.textTooltip([
          {
            "id": "tooltip-1"
          },
          {
            "id": "tooltip-2"
          }
        ]);
### })

< span id="tooltip-1">Element 1</ span>
< span id="tooltip-1-content">Popup Fenster 1</ span>

< span id="tooltip-2">Element 2</ span>
< span id="tooltip-2-content">Popup Fenster 2</ span>
###
 etc.