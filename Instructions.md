# Overall Instructions

For this test we would like you to build a simple take-away ordering web app.

We have provided you a JSON file of dish names with prices and whether dishes are vegetarian or not. That file is located [here](/menu.json)
Please note that this particular restaurant names all its dishes after people.

Please refer to the User stores below to guide your work.

## Technologies

The app must be written in typescript using React. Otherwise you may use any additonal libraries you like.

We will look at how you choose to style your web app and you may use what ever styling libaries you like.

## Timing

We do not expect you to spend more than 2 - 4 hours on this test but if you wish to do more you are of course welcome to.

## User stories

```
1. As a customer
   So that I can check if I want to order something
   I would like to see a list of dishes with prices

2. As a customer
   So that I can order the meal I want
   I would like to be able to select some number of several available dishes

3. As a customer
   So that I can verify that my order is correct
   I would like to check that the total I have been given matches the sum of the various dishes in my order

4. As a vegetarian customer
   So that I can easily see which dish is appropriate for me
   I would like an easy to see identifier for vegetarion dishes.
```

## Acceptance criteria

```

Given I am on the app
When I want to order some food
Then I can see a a clear menu of options and their prices

Given I have chosen my meal
When I want to order it
Then I can add it to a basket

Given I have added items to the basket
When I want to check out
Then I can click a check out button to take me to the checkout screen

Given I have clicked check out
When I am on the check out page
Then I can see a clear list of what I ordered
And I can see each items price
And I can see a total price

Given I am vegetarian
When I look at the menu
Then I can easily see whether each option is vegetarian or not

Given I have added incorrect items to the basket
When I checkout
Then I can remove those options from the basket
And see the prices change to reflect this

```
