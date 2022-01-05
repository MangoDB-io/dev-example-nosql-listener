This is a fork of [MariaDB's NoSQL Listener example](https://github.com/mariadb-corporation/dev-example-nosql-listener)
that replaces MariaDB MaxScale and MariaDB Community Server with
[FerretDB](https://github.com/FerretDB/FerretDB) and PostgreSQL.

# Quickstart

```
$ git clone https://github.com/FerretDB/example.git

$ cd example

$ docker-compose pull

$ docker-compose up
```

Note: if you are updating from the previous version, run:

```
$ docker-compose down

$ docker system prune --volumes --force
```

Then open [http://localhost:8888/](http://localhost:8888/) and use that example application.

If you have a recent enough `mongosh`, you can use to connect to FerretDB. For example:
[![asciicast](https://asciinema.org/a/BhBD85JpeLPHrSdyL1jzNFkFq.svg)](https://asciinema.org/a/BhBD85JpeLPHrSdyL1jzNFkFq)
You can see data in PostgreSQL using `psql`. For example:
[![asciicast](https://asciinema.org/a/RgCtFAxvkkp26YRBO6FPSpEUJ.svg)](https://asciinema.org/a/RgCtFAxvkkp26YRBO6FPSpEUJ)
