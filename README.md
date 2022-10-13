# StockTrack

This project is about creating a React App to search and track finance data such as Stocks, Forex and Cryptocurrency.

[Click to browse!](stocktracking.netlify.app)

## Description

This project is about creating an app called "StockTrack". It allows users to find real time stock, forex and crypto data from an API called TwelveData and Yahoo Finance. It has a search function which allows users to input the stock name, forex pair and cryptocurrency symbol in their respective pages and retrieve the prices, exchange rate and the cryptocurrency prices in the searched currency. It also allows the user to add in their favourites to a portfolio so that they can track the prices of the searched items.

### Technical Used

The app was created using React JS. Other libraries such as React-Router-Dom and Alice Carousel was used to navigate the app and show the effects of the carousell respectively.

Async was used to fetch the data from the API.

CSS was also used to create the background effects and beautify the data rendered.

### Wireframes

Pages such as Home, Stocks, Forex, Cryptocurrency and Portfolio are used to naviage around the app. The main App is used to filter the data and render the results to the respective pages. StockCarousel, ForexCarousel and CryptoCarousel are used to create the carousel effect on the pages. NavBar is the compoenent which directs the users to the respective pages with links.  
![Wireframe](https://i.ibb.co/Bw0tVzx/Screenshot-2022-07-01-at-3-03-29-PM.png)

### User Stories

### Stock Function

This stock search page allows users to input the stock of the data they wish to retrieve. This search input can be in the form of the name of the company or the stock symbol. For example , if the user wish to retrieve the stock price of Apple Inc. stock in USD, they can either input 'apple' or 'aapl'. Both terms will render the result of Apple Inc. stock name ,price and 24 hours percentage change.

![StockSearch](https://i.ibb.co/nz7NKJS/Screenshot-2022-06-30-at-8-04-34-PM.png)

### Forex Function

The forex search page allows the users to search the forex data. For example , users shall input SGD/EUR and they will be able to see the data of the current exchange rate and the 24 hour percentage change.

![ForexSearch](https://i.ibb.co/fxRwZ4T/Screenshot-2022-06-30-at-8-05-07-PM.png)

### Crypto Function

This cryptocurrency search allows users to search the cryptocurrency prices. Users shall input the cryptocurrency symbol and currency, for example BTC/USD , and the BTC name , price in USD and 24 hours percentage change will be rendered. Users can also search it in other currencies, such as BTC/SGD to obtain the price in SGD.

![CryptoSearch](https://i.ibb.co/grCprbT/Screenshot-2022-06-30-at-8-45-28-PM.png)

### Portfolio

When the stocks, forex or cryptocurrency is searched, their data can be stored in the portfolio of the user by pressing the star icon. The data will be stored in the My portfolio page.

![Favourites](https://i.ibb.co/TMfV287/Screenshot-2022-06-30-at-8-11-00-PM.png)

## Planning and Development Process

### Problem-Solving Strategy

#### Pages

Pages are set up using React-Router-Dom and used as links and componenets for the purpose of this app. As the results of stocks, forex and cryptocurrency are different in format (eg. prices and exchange rate), it will be simpler to seperate them into different pages so that each pages can render the results in the different formats. Hence 3 different pages are set up to render the 3 different types of financial data.

For the inputs, it would also be simpler to set them up in the respective pages as the inputs will be saved and passed into the respective functions for the rendering of the data. The filtering of data for all the 3 types of data are saved in the App.js as they are similar. Hence saving them in App.js allows for quicker coding as the functions can be duplicating. The different states are then prop into different pages for mapping the data display.

#### Components

The Navbar component is created for the purpose of design of the navigation bar and navigate users to different pages.

Carousell pages are set up for the rendering of major stock, forex and cryptocurrency data in a carousell effect. This would allow the app to look more interactive with the dynamic movement of the data.

The rendering of data through the API with a fixed array of input for the carousel effect was more difficult to solve. In the end, forEach was used to input the data into the API and mapped out the different data.

### Unsolved problems

#### Stock Search

Future improvement can be made by allowing users to change the currency so that they can see the stock prices in their preferred currency instead of just USD.
List unsolved problems which would be fixed in future iterations.

#### Crypto Function

The search can be improved by allowing users to search both the name or the symbol to get the cryptocurrency prices data. A drop down menu can also be implmented to allow users to select the closest match.

#### Portfolio

This page can be further improved by allowing users to input buy orders at the current price and track their buy orders. The portfolio can allow users to have a overall portfolio value data and see their profit or losses on their buy orders.

## APIs Used

TwelveData API (https://twelvedata.com/) - This API was used to retrieve the price by inputting the symbol. For the cryptocurrency app, the name and the symbol was both available in the API to display.
Yahoo Finance API (https://yfapi.net) - This API was added for the stocks to be searched with either the name or symbol. The API was used as an autocomplete function hence it will filter out the closest matched stock data with your input. Thereafter, the symbol was retrieved from the data to input into the TwelveData API for data fetching.

However, one thing to note is that the Yahoo Finance API key changes everyday. The key in the codes will need to be updated.

## Acknowledgments

I would like to thank Desmond for the guidance and encouragement for this unit as this unit has more complicated concepts and he was very helpful and encouraging along the way in explaining to us.

I would also like to thank Nyna for the homework guidance , thus allowing me to grasp the concepts faster and explain any misconceptions I have.

I would also like to thank Zhen Hao in guiding me during the course and on using the Yahoo Finance API as it has a configuration portion which was hard to understand.

And to all my SEI-37 classmates for all the help one way or another.

## References
