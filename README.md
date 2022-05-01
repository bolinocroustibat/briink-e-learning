# Briink e-learning app

This is a squeletton of a simple e-learning web platform that allows teachers to create homeworks and student to submit their homework.

Warning! It doesn't have any database, so all the data is static, it can't be created, modified or deleted. The fake static data can be found in the `/data` folder (see [data](##data) section of this document)

The main purpose of this project is to show how to create a simple backend/frontend web application using Next.js.

The next step in the project roadmap are listed as in the [roadmap](##Roadmap) section of this document, as well as TODO comments in the code.

## Run locally

Use one of the 3 methods below to run the app locally:

### ...without Docker

To run the development server:

```bash
cd briink-app && npm run dev
```
or
```bash
make run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and browse the test app.

### ...inside a Docker container

Run Docker.

Build the image, if not done almready, from the Dockerfile with:
```bash
docker build -t briink-app .
```

Run the container:
```bash
docker run -p 3000:3000 briink-app
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and browse the test app.

### ...using Docker Compose

```bash
docker-compose up -d
```

Docker Compose will forward the app to the default HTTP port 80.

Open [http://localhost](http://localhost) with your browser to see the result and browse the test app.

## Build for production

To build for production using NPM, use the following command:

```bash
cd briink-app && npm run build && npm install --omit=dev --ignore-scripts --prefer-offline
```
or
```bash
make build
```

## Data

### Fake data

There is no data base nos persistent data system for now.
Some fake data for demo purposed is stored as JSON files in the `/data` folder, but there are constants and can't be deleted, modified or added.
- `teachers.json`
- `students.json`, with their relations with teachers
- `homeworks.json`, with their relation with teachers and scoring systems which would be used as parameter sent to the external service to score the submitted homeworks
- `submitted-homeworks.json`, with their relations with homeworks and students

### Uploaded data

Uploaded data from the users (in this case, submitted homework PDF files from the student) will be stored in the `/data/uploaded` folder, `/data/uploaded/homework_id/student_id/`.

In the future, uploaded user data should be stored in a cloud sercice, like Amazon S3, Google Cloud Storage, etc.

## REST API Endpoints

The backend part is a classical REST API with the following endpoints:

- `/api/teachers`. Methods:
  - `GET`: Get all teachers
- `/api/teachers/:id`. Methods:
  - `GET`: Get teacher info
  - `POST`: Create teacher (NOT IMPLEMENTED)
  - `PUT`: Update teacher info (NOT IMPLEMENTED)
  - `DELETE`: Update teacher info (NOT IMPLEMENTED)
- `/api/students`/ Methods:
  - `GET`: Get all teachers
- `/api/students/:id`. Methods:
  - `GET`: Get student info
  - `POST`: Create student (NOT IMPLEMENTED)
  - `PUT`: Update student info (NOT IMPLEMENTED)
  - `DELETE`: Update student info (NOT IMPLEMENTED)
- `/api/homeworks`. Methods:
  - `GET`: Get all homeworks from a teacher or a student. Query parameters: `teacherId` or `studentId`
  - `POST`: submit a new homework from a teacher. Should be only accessible for teachers.
- `/api/homeworks/:id`. Methods:
  - `GET`: Get a specific homework. (NOT BEING CONSUMED IN THIS VERSION OF THE FRONTEND)
  - `PUT`: Modify a specific homework. (NOT BEING CONSUMED IN THIS VERSION OF THE FRONTEND)
- `/api/submitted-homeworks`
  - `GET`: Get the status, score and details about all submitted homeworks for a specific homework. Query parameter: `homeworkId`. Should be only accessible for teachers..
  - `POST`: Post a new homework submission from a student with its PDF file. Should be only accessible for students.

For now, permission/authorization is not implemented.

## Roadmap

This app is a demo to show the REST organisation and some basic frontend navigation proposal. Here is the list of things to do:

- Add CSS styling, using Tailwind CSS, Bootstrap or custom-made CSS. A branch [tailwind-css](https://github.com/bolinocroustibat/briink-e-learning/tree/tailwind-css) is already created for this purpose.

- Database
Create the database and its architecture. As a first draft, the minimal DB tables would be:
    - `users` (email, hashed password and external ath system)
    - `students` (related to user with a 1-to-1 relationship, related to teachers in a 1-to-many relationship)
    - `teachers` (related to user with a 1-to-1 relationship, and related to universities with a many-to-1 relationship)
    - `universities`
    - `scorings`
    - `homeworks` (related to teacher with a 1-to-1 relationship, and related to scorings with a 1-to-1 relationship)
    - `submitted_homeworks` (related to student with a 1-to-1 relationship, and related to homeworks with a 1-to-1 relationship)

A SQL-based RDMS like PostgreSQL is a good choice for this, as well as a no-SQL system like MongoDB. If using SQL-based RDMS, each table should have an `id` primary key and an all-purpose `others` binary JSON field for scalability.

A RDMS ORM like Primsa could be used to interact with the database from the Next.js code.

- Create authentication system and manage permissions:
  All the endpoints must be protected with proper authentication.
  Teachers and students can login with their email and password, and have different access scopes.
  Teachers can only access homeworks they have created.
  etc.

- Create frontend data models, mapped on the DB architecture/tables.

- Ass the database and the service to score the submitted homeworks to the docker compose file.

- Split pages into React reusable components, for example for the navigation bar/breadcrumb component.

- Create an endpoint to list all the possible scoring systems, consumed by the teacher homework creation form.

- Create a Docker Compose file to instanciate not only the app, but also the database and the service to score the submitted homeworks.

- Use TypeScript instead of JavaScript.

- Manage alerts, PUT requests, alerts when a student upload the same homework, etc.
