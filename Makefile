start-dev:
	docker-compose run --service-ports --rm -it node pnpm dev --host

shell:
	docker-compose run --service-ports --rm -it node /bin/bash