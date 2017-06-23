# Docker 

## Instalação

* Ubuntu (17.04): `apt-get install docker.io`

## Pós-configuração

* Adicione seu DNS ao `sudo vim /etc/docker/daemon.json`:
    ```
    {                                                                          
        "dns": ["8.8.8.8", "8.8.4.4"]
    }        
    ```
* Se você está usando o DNS do Google, certifique-se que não é bloqueado na rede, nesse caso, adicionar o DNS do seu provedor.
* Reinicie o serviço com ```sudo service docker restart```
* Confirme se seu usuários está no grupo `docker`, caso não esteja, adicionar.

## Comandos úteis

* Baixar uma imagem: 
```docker pull ubuntu:latest```

* Rodar o bash de uma imagem:
```docker run -i -t <IMG> /bin/bash```

* Criar uma imagem a partir de um Dockerfile:
```docker build -t "imagem:release" .```

* Ver os processos rodando:
```docker ps -a```

* Exportar uma imagem:
```docker save -o <DESTINATION> <IMG>```

* Importar uma imagem:
```docker load -i <IMG_FILE>```

## Dockerfile Example

```
#Use Ubuntu as base
FROM ubuntu:latest

#Define work dir
WORKDIR /app

#Add files do image
ADD . /app

#Install some packages 
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

#Install more packages (optional)
RUN composer global require "laravel/installer"

#Expose port 8000
EXPOSE 8000

#Define some env
ENV NAME World

# Run some script
# CMD ["python", "app.py"]
```

## Docker for Windows

* Adicionar no firewall as regras para dockerli: https://github.com/docker/kitematic/wiki/Common-Issues-and-Fixes


Esse Markdown foi feito com [dillinger].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[dillinger]: <http://dillinger.io>
