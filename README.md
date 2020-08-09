# Voting app example

Inspired by the docker example-vote-app. 

Each service contains two dockerfiles. 

1. A classic docker in docker image, with a build layer and a runtime layer
2. A watch mode image, which install dependencies but mounts src folder as a volume. This allows the runtime to have hot-reloading. The idea is to have docker (and docker-compse) as the only dependencies, while still providing a decent developer experience.

