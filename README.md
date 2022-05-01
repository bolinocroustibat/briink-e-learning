# Briink e-learning MVP

## Getting Started

```bash
cd briink-app
```

## Run locally

To run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run inside a Docker container

Run Docker.

Build the image, if not done almready, from the Dockerfile with:
```bash
docker build -t briink-app .
```

Run the container:
```bash
docker run -p 3000:3000 briink-app
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for production

To build for production using NPM, use the following command:
```bash
npm run build && npm install --omit=dev --ignore-scripts --prefer-offline
```

## Data

### Fake data

There is no data base nos persistent data system for now.
Some fake data for demo purposed is stored as JSON files in the `/data` folder, but there are constants and can't be deleted, modified or added.
- `teachers`
- `students`, with their relations with teachers
- `homeworks`, with their relation with teachers
- `submitted-homeworks`, with their relations with homeworks and students

### Uploaded data

Uploaded data from the users (in this case, submitted homework PDF files from the student) will be stored in the `/data/uploaded` folder, `/data/uploaded/homework_id/student_id/`.

In the future, uploaded user data should be stored in a cloud sercice, like Amazon S3, Google Cloud Storage, etc.


### Endpoints

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

## Frontend

## TODO

This app is a demo to show the REST organisation and some basic frontend navigation proposal. Here is the list of things to do:

- Rewrite in Typescript

- Database
    - Create the database and its architectures, with the tables:
    - students
    - teachers
    - universities
    - scorings
    - homeworks
    - submitted_homeworks
Can use an ORM like Prisma

- Create frontend data models, mapped on the DB architecture/tables

- Split pages into React reusable components, for example for the navigation bar/breadcrumb component

- Authentication
All the endpoints must be protected with propre authentication.
Teachers and students can login with their email and password, and have different access scopes.
Teachers can only acces homeworks they have created.

- Endpoint to list all the possible scoring systems, consumed by the teacher homework creation form

- Add a Docker compose file with the database and the server

- Use TypeScript instead of JavaScript

- Add CSS styling, using Tailwind CSS, Bootstrap or custom-made CSS for example

- Manage alerts, PUT requests, alertes when a student upload the same homework, etc.