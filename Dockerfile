FROM ubuntu:latest

WORKDIR /app

ADD . /app

RUN apt-get update && apt-get install -y \
unzip \
php-cli \
git-all \
php-zip \
php-pgsql \
phppgadmin \
openssl \
php-pdo \
php-pdo-mysql \
php-pdo-pgsql \
php-pdo-sqlite \
sqlite3 \
php-mbstring \
php-tokenizer \
php-xml \
apache2 \
libapache2-mod-php \
composer \
&& rm -rf /var/lib/apt/lists/*

RUN composer global require "laravel/installer"

# RUN pip install -r requirements.txt

EXPOSE 80

ENV NAME World

# CMD ["python", "app.py"]