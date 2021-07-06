Pub/Sub Node.js deployment to GKE -> Dataflow -> BigQuery
===================================

- app.js        - simulate server code > execute GET request and sent simulate data to "pubsub"
- package.json  - setup file to install node dependencies (files necessary to connect to GCP/pubsub)
- Dockerfile    - config file user by docker to convert node.js app code into deployable containers
- key.json      - identity file to authenticate with pubsub (create service account, give pubsub publisher permission, download the json key and save as key.json together with     app.js file)
- views folder  - index.html, stream.html is return when GET request calls for "ip:8080/" & "ip:8080/stream"

Step 0. Setup pubsub in GCP, Setup Tables in BQ, Setup Dataflow
--------------
- Create Topic in GCP pubsub
- Modify "topic" in app.js to be the same with pubsub
- Modify "payload" in app.js to be the same with BQ table 
- e.g. JSON message >> {"message":"Hello world"} || BQ Table Field name >> message STRING

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

Step 3. Create container with docker and push commit to Container Registry
---------------
1) docker build -t [APP-NAME] .
2) docker images    
3) docker container create [IMAGE-ID]
4) docker ps -a    
5) docker commit [CONTAINER-ID] [ANY-CONTAINER-NAME]:version1
6) docker tag [ANY-CONTAINER-NAME]:version1 asia.gcr.io/grp1-implementation/phx-mdh-repo:version1
7) docker push asia.gcr.io/grp1-implementation/phx-mdh-repo:version1
- phx-mdh-repo is the [Container registry Name]
- asia.gcr.io is CR in asia
- grp1-implementation is your [PROJECT-ID]

Step 4. Create GKE Cluster
---------------
- Create GKE cluster with access to all cloud APIs or single API

Step 5. Deploy from Container Registry
---------------
- click on the 3 dots, deploy to GKE
- Expose & get ext ip address
- Test server 

Dataflow setup
---------------
- Dataset ID [project_name:dataset] project_name:phx_dataflow_sql
- BigQuery output table: [project_name:dataset.tablename] project_name:phx_dataflow_sql.phx_ps_df_messages
- setup storage:	gs://storage_name

BigQuery
---------------
BigQuery output table: [project_name:dataset.tablename] grp1-implementation:phx_dataflow_sql.phx_ps_df_messages
temporary location: gs://storage_name/tmp
