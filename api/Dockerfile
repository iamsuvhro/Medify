FROM python:3-alpine3.7

WORKDIR /api

COPY requirements.txt requirements.txt  

RUN pip install -U  --upgrade pip

RUN apk add --no-cache jpeg-dev zlib-dev
RUN apk add --no-cache --virtual .build-deps build-base linux-headers \
    && pip install Pillow

RUN pip3 install -r requirements.txt


COPY . .