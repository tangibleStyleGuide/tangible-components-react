# Tangible React Components

Tangible is intended to be a visual language of styles, layouts, components, patterns, and rules that provide a consistent, thoughtful approach to user interface design.

When Tangible is implemented, we create the opportunity to focus on designing user experiences that are more meaningful, more engaging, more enriching, and ultimately more personal.

## Getting Started

### Prerequisites

Ensure you have a React app created - preferably with create-react-app.

1. The accordion UI was built using [react-accessible-accordions](https://www.npmjs.com/package/react-accessible-accordion?activeTab=dependents).
2. The modal dialogs were built using [react-responsive-modal](https://www.npmjs.com/package/react-responsive-modal).

### Installing

Download and add the tangible.css file to the css folder in your app. There are two options: tangible.css which is the full tangible library with all the UI component rules or there is the tangible-basic.css which has all the base and layout rules. Keep in mind that if you choose to use the tangible-basic.css you will need to add the corresponding UI component's css file for each UI element used.

1. In the App.js file import tangible.css

```
import "./assets/css/tangible.css";
```

## Setup

### Colors

To edit the colors of the app simply open the tangible.css file and **control + f** search for

- "/\* primary"
- "/\* secondary"
- "/\* primary text"
- etc. (they are listed in the file)

Then replace the hex or rgb value to your desired color

### Font

To edit the colors of the app simply open the tangible.css file and **control + f** search for "/\* font family"

### Icons

To edit the icons for things like checkboxes and radio buttons open the .css file and **control + f** search for "/\* icon path \*\". Then edit the url rule to the path of your prefered icon; remember to do this for all the states of the element.

### Customization

The tangible.css file follows [smaccs](https://smacss.com/) rules and is easy to parse and find elements. Despite this it is not recommended to edit the tangible.css file directly excluding simple things like font, color, text size, etc. If you need to redo a component for your app's needs you should create another .css file that overwrites that specific component.

```
import "./assets/css/tangible.css";
import "./custom-cards.css";
```

## Versioning

- (Current) [Version: 1.5.0](https://github.com/tangibleStyleGuide/tangible-components-react/commits/V1.5.0)
