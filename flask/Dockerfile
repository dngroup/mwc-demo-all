FROM debian:stable
MAINTAINER nherbaut@labri.fr
EXPOSE 8080
RUN apt-get update
RUN apt-get install build-essential python-dev python-pip apt-utils gunicorn --yes 
RUN pip install flask
RUN apt-get install dnsutils --yes
COPY . /opt/frontend
WORKDIR /opt/frontend
CMD gunicorn --log-level debug --log-file - -b $HOSTNAME:8078 "frontend:bootstrap(abox_uri='"${MWCSTORAGE_PORT_8079_TCP_PORT}"')"

