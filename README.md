Node.js deployment to GKE
===================================

- app.js        - simulate server code > execute GET request and sent data to "pubsub"
- package.json  - setup file to install node dependencies (files necessary to connect to GCP/pubsub)
- Dockerfile    - config file user by docker to convert node.js app code into deployable containers
- key.json      - identity file to authenticate with pubsub (create service account, give pubsub publisher permission, download the json key and save as key.json together with     app.js file)
- views folder  - index.html, stream.html is return when GET request calls for "ip:8080/" & "ip:8080/stream"

Step 1. Go to cloud-shell and clone this repo. Install the dependencies.
--------------
- git clone https://github.com/duanH3/pubsub-with-nodejs.git
- cd pubsub-with-nodejs
- npm install

Step 2. Create key.json from Service account
---------------
- save key.json in the same director along with app.js
- type command in cloud shell to start server: node app
- test the server by clicking webpreview. test the stream by replacing "/?authuser=0" with "/stream"

Step 3. Create container with docker
---------------
1) docker build -t duan-node-app .
2) docker images //get img-id:			> 2debc979fbc8
3) docker container create 2debc979fbc8 	> 0c372a3a17cecacda81ee8746611461aab5bf5161a512519fceb63d232adc5bd
4) docker ps -a //get container id		> 0c372a3a17ce   
5) docker commit 0c372a3a17ce duan-phx-node:version1						>//commint to container registry
6) docker tag duan-phx-node:version1 asia.gcr.io/grp1-implementation/phx-mdh-repo:version1	>prep push to registry
7) docker push asia.gcr.io/grp1-implementation/phx-mdh-repo:version1


