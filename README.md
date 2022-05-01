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



## Backend

### Endpoints


## Frontend

## TODO

- Create models, mapped on the DB architecture

- Separate into reusable components

- Authentication
All the endpoiunts must be protected with propre authentication.
Teachers and students can login with their email and password, and have different access scopes.
Teachers can only acces homeworks they have created.

- Database
    - Create the database and its architectures, with the tables:
    - students
    - teachers
    - universities
    - scorings
    - homeworks
    - submitted_homeworks
Can use an ORM like Prisma

- Add a Docker compose file with the database and the server

- Use TypeScript instead of JavaScript

- Add CSS styling, using Tailwind CSS, Bootstrap or custom-made CSS for example
