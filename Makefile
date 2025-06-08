VERSION ?= $(shell git rev-parse --short HEAD)

build:
	docker build -t weather-next-app:${VERSION} .

run: build
	docker run -d -p 3000:3000 weather-next-app:${VERSION}
