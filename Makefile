build-dev:
	docker build -t client .

build-local:
	docker build -t client-production -f Dockerfile.local .

build-production:
	docker build -t client -f Dockerfile.production .