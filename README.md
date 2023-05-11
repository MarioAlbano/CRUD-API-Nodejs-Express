## CRUD with Node.js and Express

A simple CRUD application using Node.js and Express. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on a courses array.

### Dependencies

This application requires the following dependencies:

- Node.js
- Express

To install the dependencies, run the following command:

npm install express

### Running the Application

To run the application, run the following command:

npm start

The application will be available at [http://localhost:3000](http://localhost:3000).

### Endpoints

The following endpoints are available:

#### Create

To create a new course, send a POST request to `/cursos` with the following JSON payload:

{
"name": "New Course"
}


#### Read

To retrieve a list of all courses, send a GET request to `/cursos`.

To retrieve a single course, send a GET request to `/cursos/:index`, where `:index` is the index of the course to retrieve.

#### Update

To update a course, send a PUT request to `/cursos/:index`, where `:index` is the index of the course to update. Include the new course name in the JSON payload:

{
"name": "New Course Name"
}


#### Delete

To delete a course, send a DELETE request to `/cursos/:index`, where `:index` is the index of the course to delete.

### License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
I hope this helps!

