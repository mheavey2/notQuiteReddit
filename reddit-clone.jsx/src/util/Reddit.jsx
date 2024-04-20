// refer to https://github.com/reddit-archive/reddit/wiki/OAuth2 for authorisation parameter variables

let accessToken;
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
    // get unigue ID for each authorisation request instance
    const UniqueAuthInstanceId = Math.random();
    console.log(
      `The unique instance ID for this authentication is: ${UniqueAuthInstanceId}`
    );

    const authorisationURL =
      "https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}";
    window.location = authorisationURL;
    console.log("authentication received");
  },

  // check if authentication is already available
  checkAuthentication() {
    if (accessToken) {
      return accessToken;
    }
  },

  // step 2: get username data from Reddit
  getUsername() {
    if (!accessToken) {
      return Promise.reject(new Error("Access token is missing"));
    }
    const userEndpoint = "";
    return fetch(userEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        const userName = data.display_name; //TODO:verify this is correct in api docs
        console.log(`username is: ${userName}`);
        userId = data.id; //TODO: also verify this
      });
  },

  // step 3: fetch the results for search input
  async searchItem(searchInput) {
    // top 10 results,sorted by relevance
    const searchEndpoint = `${searchBaseURL}${searchInput}&sort=relevance&limit=10`;

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
