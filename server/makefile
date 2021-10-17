express-chat-build:
	docker build -t 389798/express-chat-image .  
express-chat-rmi:
	docker rmi 389798/express-chat-image 
express-container-up:
	docker run --rm -p 3500:3500 --name 389798/express-chat-image express-chat-container 
express-container-inspect:
	docker exec -it express-chat-container /bin/bash 
express-container-down:
	docker stop express-chat-container 
mongo-build:
	docker pull mongo 
mongo-rmi:
	docker rmi mongo 
mongo-container-up:
	docker run --rm -p 27017:27017 --name mongo-chat-container --env-file=,/.dev.env -e MONGO_INITDB_ROOT_USERNAME=$MONGO_USER -e MONGO_INITDB_ROOT_PASSWORD=$MONGO_PASSWORD  mongo 
mongo-container-inspect:
	docker exec -it mongo-chat-container /bin/bash 
mongo-container-down:
	docker stop mongo-chat-container 
all-up:
	docker-compose up 
all-down:
	docker-compose down