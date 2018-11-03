FROM python:3.6.7-stretch

ENV PYTHONUNBUFFERED 1
RUN mkdir /src
WORKDIR /src
COPY . /src/
RUN pip install -r requirements.txt


