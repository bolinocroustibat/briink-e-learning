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


## Data

There is no data base nos persistent data system for now.
Some fake data for demo purposed is stored as JSON files in the `/data` folder, but there are constants and can't be deleted, modified or added.
- `teachers`
- `students`, with their relations with teachers
- `homeworks`, with their relation with teachers
- `submitted-homeworks`, with their relations with homeworks and students

## Backend

### Endpoints

The backend part is a classical REST API with the followinf endpoint


## Frontend

## TODO

This app is a demo to show the REST organisation and some basic frontend navigation proposal. Here is the list of things to do:

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

- Separate pages into React reusable components

- Authentication
All the endpoints must be protected with propre authentication.
Teachers and students can login with their email and password, and have different access scopes.
Teachers can only acces homeworks they have created.

- Endpoint to list all the possible scoring systems, consumed by the teacher homework creation form

- Add a Docker compose file with the database and the server

- Use TypeScript instead of JavaScript

- Add CSS styling, using Tailwind CSS, Bootstrap or custom-made CSS for example

- Manage alerts, PUT requests, alertes when a student upload the same homework, etc.