FROM ruby:2.6.5

RUN apt-get update -qq && \
  apt-get install -y build-essential \
  libpq-dev \
  nodejs \
  vim

RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn

RUN mkdir /app_name
ENV APP_ROOT /app_name
ENV LANG C.UTF-8
WORKDIR $APP_ROOT

COPY ./Gemfile $APP_ROOT/Gemfile
COPY ./Gemfile.lock $APP_ROOT/Gemfile.lock
RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]
ADD . $APP_ROOT