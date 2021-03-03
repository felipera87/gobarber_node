# What is this project?

It is not something useful, it's purpose is just for study/practice only. It is the backend of GOBARBER project from the rocketseat bootcamp.

## Start local database container for this project

For the first time:

```
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

In case you already have the container:

```
$ docker start gostack_postgres
```

## Tests

To run the tests:

```
$ yarn test
```

This will also create the coverage folder, you can check a friendly coverage report on `coverage/lcov-report/index.html`
