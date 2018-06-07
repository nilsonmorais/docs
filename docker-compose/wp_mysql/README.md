Creates two containers with MariaDB and Wordpress.

## Usage:

```
mkdir wp-site && cd wp-site
wget https://raw.githubusercontent.com/nilsonmorais/docs/master/docker-compose/wp_mysql/docker-compose.yml -O docker-compose.yml
docker-compose up -d
```

It will create two folders:

* db: MariaDB Database files.
* wp: Wordpress files.

Change ports 8080 and 9080 to anyone you want.
