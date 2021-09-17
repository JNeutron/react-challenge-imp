# React Challenge

## Objective
We would like to have you complete the following code test so we can evaluate your React skills.  Please place your code in a public Github repository and commit each step of your process so we can review it.

Your assignment is to create a simple Reddit client that shows the top 50 entries from Reddit.

## Show your work

1.  Create a Public repository
2.  Commit each step of your process so we can follow your thought process.

## Guidelines
To do this please follow these guidelines:
    
    - Use latests React Version (>= 17.0) Hooks, Function components, etc.
    - State management with Redux/Mobx.
    - Make sure your code is static by using Typescript or Flow.
    - Make HTTP requests with Fetch/Axios.
    - Support Mobile and Web with a slight change between those 2 designs.
    - It's a plus if you use Material-UI Design.
    - We really value testing. A lot.

## What to show
The app should be able to show data from each entry such as:

    - Title (at its full length, so take this into account when sizing your cells)
    - Author
    - entry date, following a format like “x hours ago”
    - A thumbnail for those who have a picture.
    - Number of comments
    - Unread status

In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture. You don’t have to implement the IMGUR API, so just opening the URL would be OK.

## What to Include

    - Pagination support
    - Indicator of unread/read post (updated status, after post it’s selected)
    - Dismiss Post Button (remove the post from the view, this should happen on memory)
    - Dismiss All Button (remove all posts from the view, this should happen on memory)
    - In case of an error, please implement some kind of error handling in the best way you can think of (This can be an alert).

## Resources

    - Reddit API: (Please read from 10 to 10 on each so we can see how you handle pagination.)
    GET: https://www.reddit.com/r/all/top/.json?t=all&limit=10
    
    In each page you will have an "after" key and "before" so you can read the key "after" and append it to the url like so to get the next 10 posts.
    https://www.reddit.com/r/all/top/.json?t=all&limit=10&after={{value_of_after_key}}
     
    - Example JSON file (top.json) is listed.

## Time Spent
You do not need to fully complete the challenge. We suggest not to spend more than 5 hours total, which can be done over the course of 2 days.  Please make commits as often as possible so we can see the time you spent and please do not make one commit.  We will evaluate the code and time spent.

What we want to see is how well you handle yourself given the time you spend on the problem, how you think, and how you prioritize when time is insufficient to solve everything.

Whenever you finish send us your repository to the following emails:

ro@plataforma.io

ed@plataforma.io
