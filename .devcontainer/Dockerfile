FROM debian:13.3

RUN apt update -y && \
  apt install -y \
  git \
  curl \
  make

COPY ./scripts ./scripts

RUN sh ./scripts/install-claude-code.sh
ENV PATH=$PATH:/root/.local/bin

RUN sh ./scripts/install-go.sh
ENV PATH=$PATH:/usr/local/go/bin
ENV PATH=$PATH:/root/go/bin

RUN sh ./scripts/install-gopls.sh

RUN sh ./scripts/install-nodejs.sh
ENV PATH=$PATH:/usr/local/nodejs/bin

RUN sh ./scripts/install-pnpm.sh
