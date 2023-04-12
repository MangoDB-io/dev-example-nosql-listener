This is a fork of [MariaDB's NoSQL Listener example](https://github.com/mariadb-corporation/dev-example-nosql-listener)
that replaces MariaDB MaxScale and MariaDB Community Server with
[FerretDB](https://github.com/FerretDB/FerretDB) and PostgreSQL.

# Quickstart

```
$ git clone https://github.com/FerretDB/example.git

$ cd example

$ docker compose pull

$ docker compose up
```

Note: if you are updating from the previous version, run:

```
$ docker compose down

$ docker system prune --volumes --force

$ rm -fr data
```

Then open [http://localhost:8888/](http://localhost:8888/) and use that example application.

If you have `mongosh`, you can use it to connect to FerretDB. For example:
[![asciicast](https://asciinema.org/a/577061.svg)](https://asciinema.org/a/577061)

You can see data in PostgreSQL using `psql`. For example:
[![asciicast](https://asciinema.org/a/577073.svg)](https://asciinema.org/a/577073)
