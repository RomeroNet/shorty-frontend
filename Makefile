start-dev:
	docker run --rm -it -v ${PWD}:/app -w /app -p 3000:3000 -p 24678:24678 node:latest yarn dev --host