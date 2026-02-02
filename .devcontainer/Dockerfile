FROM debian:13.3

RUN apt update -y && \
  apt install -y \
  git \
  curl

COPY ./scripts ./scripts

RUN sh ./scripts/install-claude-code.sh
ENV PATH=$PATH:/root/.local/bin
