# Meme-Me-Man 

## Project Planning
An overview of planned steps for my first project while learning and becoming more comfortable with ReactJS.

<br>

### Description

_**Meme-Me-Man** is a single-page app portraying a robotic face that spits out memes (and/or gifs depending on further API integration) and displays them on the page based on user interactions, i.e. the user pushing his nose button to generate a random meme (and/or gif), which will be displayed in his mouth as he spits them out. If search bar left empty, returns random.  If not, narrows field.

<br>

### Wireframes

![Mobile View](https://i.imgur.com/qWGXzYK.png)


![Tablet View](https://i.imgur.com/GBgf8oC.png)


![Desktop View](https://i.imgur.com/X6rVZMM.png)

<br>

### MVP

_**Meme-Me-Man**, in his most basic form, is a fairly simple but creatively conceived meme/content generating app designed in the shape of a cartoonish/robotic face that, when pushed on the nose, will grab a random meme for the user and display it in his mouth._

<br>

#### MVP Goals

- _Integrating the various components into a cohesive whole._
- _Pulling in the desired data/images via an Axios call to the API (or possibly API's)._
- _Displaying the image data pulled from the API, in by passing props correctly through to the right component(s)._
- _Incorporating functionality through the use of state and functional components._
- _Using React Router to allow changes to take place on the page without needing to refresh._
- _A resulting MVP product that fits the basic description of a meme generating app designed in a creative and unique way._
- _Going forward this could also be a fertile testing ground and training area for furtherance of CSS skills, as many different versions of it could be rendered with different styling on the components._

<br>

#### MVP API

> Information regarding the API(s) used in the project:

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| imgFlip |      yes      | _api.imgflip.com_ | _https://api.imgflip.com/get_memes_ |
| Possible additions|      TBD      | TBD | TBD |

Sample Query Results:

```json
[
    {
        "text": "One does not simply",
        "x": 10,
        "y": 10,
        "width": 548,
        "height": 100,
        "color": "#ffffff",
        "outline_color": "#000000"
    },
    {
        "text": "Make custom memes on the web via imgflip API",
        "x": 10,
        "y": 225,
        "width": 548,
        "height": 100,
        "color": "#ffffff",
        "outline_color": "#000000"
    }
]


```

<br>

#### MVP Libraries & Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _A JavaScript library for creating user interfaces. Will be used in the overall building of the site, allowing small re-useable individual components to hook together and pass data to where it needs to be to render correctly on the page, in this case composing the face of a meme-generating app character._ |
| React Router | _The standard routing library for React. Keeps the UI in sync with the url, enabling the building of a single page app that can be navigated without the page needing to refresh over and over as the user navigates._ |
| Axios | _A JavaScript library used to simplify the task of making HTTP requests from the browser, this is useful for integration with APIs and will be used to grab meme/gif images and pull them into the page to be displayed._ |

<br>

#### MVP Components

```
src
|__ assets/
      |__ misc
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Eyes.jsx
      |__ Home.jsx
      |__ Main.jsx
      |__ Nav.jsx
      |__ Button.jsx
      |__ Meme.jsx
      |__ Footer.jsx
      |__ Index.jsx
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Holds together other components._ |
|    Header    | functional |   n   |   n   |   n   | _Header info - may hold Nav._ |
|  Navigation  | functional |   n   |   n   |   n   | _Navigation to different possible views with changes in components._ |
|     Main     | functional |   n   |   n   |   m   | _Default face view of app._ |
|    Index     | functional |   n   |   n   |   y   | _Renders the actual changes to the DOM._ |
|    Button    | functional |   n   |   y   |   y   | _Generates meme when clicked._ |
|    Footer    | functional |   n   |   n   |   n   | _Holds more info - possibly containing Nav._ |
|    Meme    | functional |   n   |   y   |   n   | _Hold the meme returned from API._ |


<br>

#### MVP Timeframes

> Estimations of time-frames spent on building the project, its individual components, and various functionalities:

| Task             | Priority | Roughly Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| App Setup & Installing Dependencies|    M     |     2 hrs      |     TBD     |    TBD    |
| Basic Layout & Components Setup      |    H     |     3 hrs      |     TBD     |     TBD     |
| Working with API      |    H     |     3 hrs      |     TBD     |     TBD     |
| Correctly rendering components & handle passing data      |    H     |     3 hrs      |     TBD     |     TBD     |
| Adding routing & MVP functionality via state      |    H     |     3 hrs      |     TBD     |     TBD     |
| Improving styling       |    H     |     3 hrs      |     TBD     |     TBD     |
| Testing & improvement of responsive design / media queries       |    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL            |          |     20 hrs      |     TBD     |     TBD     |

<br>

### Post-MVP

- _Lots of Post-MVP ideas for potentially different versions via different stylings, adding of further face elements with more interaction and functionality, alternate characters, etc..._
- _Could take user input to use different APIs to display other stuff in the mouth - cartoons, gifs, etc.._
- _Could use project as a dojo of sorts down the road to practice different things.  For example, various ways of styling, manipulating locations of different parts of the face with CSS, add animations, etc..  Could also plug different API's with differing functionality into the app to work with displaying different types things returned by the API - i.e. videos, gifs, weather forecasts, what have you.._
- _Could use router via nav bar to add various faces that it could change to._
- _Could make a female-styled version, Meme-Me-Ma'am... etc._

<br>

***

## Project Delivery

> This section will be updated as I progress through the development process, serving as a chronicle of sorts as I track my work.

### Code Showcase

> This section will include brief code snippets responsible for various elements and functionality from the project that I'm proud of, along with brief descriptions.

### Code Issues & Resolutions

> Any major issues or roadblocks encountered during the project will be listed here, along with details of how they were resolved, for educational purposes and personal future reference.