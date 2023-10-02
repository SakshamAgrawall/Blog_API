<div id="header" align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/8841/8841503.png" width="100"/>
</div>
<div align="center">
<h2>Hello ! <h2>
  <p>Saksham Agrawal here !</p> 
</div>

<!-- Links to social profiles  -->
<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/sagrawal16/ ">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
Note : The database is deployed on MongoDB Atlas. And the backend server will be deployed on Render. 
You can use Postman to make API calls to/from the database and verify. More on that under 'API Documentation'.

## Project Description

<b>Project Name : <i>BLOG API</i> </b>

<b>Backend Deployment:</b>

<a href="https://blogapi-cc93.onrender.com"/>
Live here
</a>

## Languages and Tools used:

 <div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://expressjs.com/images/express-facebook-share.png" title="ExpressJS" alt="ExpressJS" height="50"/>&nbsp;  
</div><br>

## **How To Run Locally**

- To run this project locally, use the following command in your CLI:

```bash
git clone https://github.com/SakshamAgrawall/Blog_API.git
```

- Open your favorite code editor and run Locally!
- make your own env file For frontend and backend and save them to there root directory -

```
PORT = 8080
MONGO_URI = 'mongodb clusted uri'
USERNAME = 'your_username'
PASSWORD = 'password'
APIKEY = 'your api key'
```

```
npm install
npm run start
```

- Go to any Browser and search localhost:8080
- Go to Postman search localhost:8080 for testing API

# API Documentation

- This API Documentation deals with the specifications of endpoints used for the blogApp
  <br>
- The GET method will Retrieve list of all blog posts from the database.
- The POST method will allow user to create post and store data in the database. An in-depth understanding of the usage of API endpoints is mentioned below.
- The PUT method will allow user to make changes in the previous post.
- The DELETE method will allow user to delete the post by ID

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**GET request for checking available blogPost**

**Request method**: `GET`

**URL if using Local Host**: `http://localhost:8080/posts`

**Auth required** : YES

**Data constraints/Schema**

```json
{
  "title": "",
  "content": "",
  "category_id": ""
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "_id": "65199df9208c1dc67c4326fb",
    "title": "pakistan vs india",
    "content": "team india match with pakistan",
    "category_id": {
      "_id": "65199d8e208c1dc67c4326f8",
      "name": "sports",
      "createdAt": "2023-10-01T16:25:50.086Z",
      "updatedAt": "2023-10-01T16:25:50.086Z",
      "__v": 0
    },
    "createdAt": "2023-10-01T16:27:38.031Z",
    "updatedAt": "2023-10-01T16:36:12.029Z",
    "__v": 0
  }
]
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized ACCESS"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**GET request for fetching based on passed ID**

**Request method**: `GET`

**URL if using Local Host**: `localhost:3000/posts/:id`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": true,
  "message": "Post get succeefully",
  "singlePost": {
    "_id": "65199df9208c1dc67c4326fb",
    "title": "pakistan vs india",
    "content": "team india match with pakistan",
    "category_id": {
      "_id": "65199d8e208c1dc67c4326f8",
      "name": "sports",
      "createdAt": "2023-10-01T16:25:50.086Z",
      "updatedAt": "2023-10-01T16:25:50.086Z",
      "__v": 0
    },
    "createdAt": "2023-10-01T16:27:38.031Z",
    "updatedAt": "2023-10-01T16:36:12.029Z",
    "__v": 0
  }
}
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized access"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## POST

POST is an HTTP method designed to send data to the server from an HTTP client. It requests the web server to accept the data enclosed in the body of the POST message.

**POST request for saving POST**

**Request method**: `POST`

**URL if using Local Host** : `http://localhost:8080/posts`

**Auth required** : `YES`

**Data constraints**

```json
{
  "title": "",
  "content": "",
  "category_id": ""
}
```

**Data example**

```json
{
  "title": "social people",
  "content": "social work is very useful and helpful",
  "category_id": "6519b2b51150e1eb583899be"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "message": "Post created successfully"
}
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized ACCESS"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## PUT

UPDATE is an HTTP method designed to Update data to the server from an HTTP client. It requests the web server to accept the data enclosed in the body of the update message.

**PUT request for Update Posts**

**Request method**: `PUT`

**URL if using Local Host** : `http://localhost:8080/posts/:id`

**Auth required** : `YES`

**Data constraints**

```json
{
  "title": "",
  "content": "",
  "category_id": ""
}
```

**Data example**

```json
{
  "title": "social people",
  "content": "social work is very useful and helpful",
  "category_id": "6519b2b51150e1eb583899be"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "message": "Post Update successfully"
}
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized ACCESS"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## DELETE

DELETE is an HTTP method designed to delete post to the server from an HTTP client.

**DELETE request for Deleting POST**

**Request method**: `DELETE`

**URL if using Local Host** : `http://localhost:8080/posts/:id`

**Auth required** : `YES`

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Post deleted successfully"
}
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized ACCESS"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group. and this api used to Retrieve the latest blog post from each unique category.

**GET request for checking available blogPost**

**Request method**: `GET`

**URL if using Local Host**: `http://localhost:8080/posts/latest/post`

**Auth required** : YES

**Data constraints/Schema**

```json
{
  "title": "",
  "content": "",
  "category_id": ""
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "_id": "6519b3eb1150e1eb583899ce",
    "title": "DANCING boy",
    "content": "DAnce is our nation",
    "category_id": "6519b2871150e1eb583899bb",
    "createdAt": "2023-10-01T18:01:15.789Z",
    "updatedAt": "2023-10-01T18:01:15.789Z",
    "__v": 0
  },
  {
    "_id": "6519b3561150e1eb583899c3",
    "title": "MEAN STACK",
    "content": "MEAN STACK HAVE TECH STACK MONGO ANGULAR REACT NODE",
    "category_id": "6517df742dc42e546995d09d",
    "createdAt": "2023-10-01T17:58:47.001Z",
    "updatedAt": "2023-10-01T17:59:33.437Z",
    "__v": 0
  },
  {
    "_id": "65199df9208c1dc67c4326fb",
    "title": "pakistan vs india",
    "content": "team india match with pakistan",
    "category_id": "65199d8e208c1dc67c4326f8",
    "createdAt": "2023-10-01T16:27:38.031Z",
    "updatedAt": "2023-10-01T16:36:12.029Z",
    "__v": 0
  },
  {
    "_id": "6519b4341150e1eb583899d2",
    "title": "social people",
    "content": "social work is very useful and helpful",
    "category_id": "6519b2b51150e1eb583899be",
    "createdAt": "2023-10-01T18:02:28.613Z",
    "updatedAt": "2023-10-01T18:02:28.613Z",
    "__v": 0
  }
]
```

### Error Response

**Code** : `Unauthorized`

**Reason** : `if the user not provide auth or apikey`

**Content example**

```json
{
  "error": "Unauthorized ACCESS"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```
