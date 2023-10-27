#### Introduction

- A novice attempt in creating a simple React Image Search project that try to utilizes React Query for data fetching and caching. The project allows users to search for images using the Unsplash API.

- Unsplash Images: https://react-vite-unsplash-images.netlify.app/

#### Setup (If you want to run in localhost)

- npm install
- npm run dev
- sign up for an Unsplash Account
- register an app
- authorization : public authentication
- get Access Key from Unsplash
- create .env file and put Access Key in .evn
- Note: in VITE project naming key in .env start with: VITE\_"NAME" ("NAME": what name you want to provide)

#### Unsplash Info

Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications. The Unsplash API is widely used by developers to enhance the visual content of their applications or websites.

[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)

In order to use the Unsplash API to fetch images for your application, you will need to sign up for an account with Unsplash. This will allow you to obtain an API key that you can use to authenticate your requests.

#### Find the API Key and Correct URL for Searching Images

- register an app
- authorization : public authentication
- search functionality : search photos

After signing up for an Unsplash account, you will need to locate your API key and the correct URL to use when searching for images using the Unsplash API. This information can be found in the API documentation provided by Unsplash.

#### Setup ENV Variables in VITE

- .env : must be created in root folder, in VITE project key name start with VITE\_"NAME" ("NAME": you want to provide)

Environment variables can be used to store sensitive information, such as your Unsplash API key.

#### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.

When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.

The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.

Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.
