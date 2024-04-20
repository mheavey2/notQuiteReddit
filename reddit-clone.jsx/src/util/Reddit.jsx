// refer to https://github.com/reddit-archive/reddit/wiki/OAuth2 for authorisation parameter variables

let userToken;
let userId;
const CLIENT_ID = "lxTjXwgGGeFcYktpZ2hEgA";
const TYPE = "code";
const REDIRECT_URI = "http://localhost:5173";
const DURATION = "temporary";
const SCOPE = "read";
const searchBaseURL = "https://api.reddit.com/search?q=";

const Reddit = {
  // step 1: get access token

  getAuth() {
    const UniqueAuthInstanceId = Math.random();
    console.log(
      `The unique instance ID for this authentication is: ${UniqueAuthInstanceId}`
    );

    const authorisationURL =
      "https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}";
    window.location = authorisationURL;
    console.log("authentication received");
  },

  // step 2: get username data from Reddit

  // step 3: fetch the results for search input
  async searchItem(searchInput) {
    // top 10 results,sorted by relevance
    const searchEndpoint = `${searchBaseURL}${searchInput}&sort=relevance&limit=1`;

    return fetch(searchEndpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const searchResults = data.children.map((child) => ({
          subreddit: child.data.subreddit,
        }));
        console.log(searchResults);
        return searchResults;
      });
  },
};

export default Reddit;
