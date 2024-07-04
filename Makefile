.PHONY: build-prod start-prod stop-prod build start stop nuxt-build dev cleanup test lint lint-fix lint-prettier type-check
# Load environment variables
include .env
export

# Docker production
build-prod:
	docker build -t $(PROJECT_NAME) .

start-prod:
	docker run -d -p 8080:8080 $(PROJECT_NAME)

stop-prod:
	docker stop $(PROJECT_NAME) && docker rm $(PROJECT_NAME)

# Docker tasks
build:
	docker-compose -p $(PROJECT_NAME) build

start:
	docker-compose up -d

stop:
	docker-compose down

#  Nuxt operations
nuxt-build:
	npm run build

dev:
	npm run dev

cleanup:
	npx nuxi cleanup

# Testing
test:
	npm run test

# Cleaning, Formatting, Linting, and Vetting
lint:
	npm run lint:check

lint-fix:
	npm run lint:fix

lint-prettier:
	npm run lint:prettier

type-check:
	npx nuxi typecheck

# Help
help:
	@echo "Usage instructions:"
	@echo "  make build-prod     - Build the [Production] Docker containers"
	@echo "  make start-prod     - Start the [Production] Docker containers"
	@echo "  make stop-prod      - Stop the [Production] Docker containers"
	@echo "  make build          - Build the Docker containers"
	@echo "  make start          - Start the Docker containers"
	@echo "  make stop           - Stop the Docker containers"
	@echo "  make nuxt-build     - Build the Nuxt application"
	@echo "  make dev            - Live reloading during development"
	@echo "  make cleanup        - Clean up Nuxt build artifacts"
	@echo "  make test           - Run tests"
	@echo "  make lint           - Lint code"
	@echo "  make lint-fix       - Fix lint issues"
	@echo "  make lint-prettier  - Format code with Prettier"
	@echo "  make type-check     - Type-check the Nuxt application"

# Usage instructions:
# - To build the [Production] Docker containers: make build-prod
# - To start the [Production] Docker containers: make start-prod
# - To stop the [Production] Docker containers: make stop-prod
# - To build the Docker containers: make build
# - To start the Docker containers: make start
# - To stop the Docker containers: make stop
# - To build the Nuxt application: make nuxt-build
# - For live reloading during development: make dev
# - To clean up Nuxt build artifacts: make cleanup
# - To run tests: make test
# - To lint code: make lint
# - To fix lint issues: make lint-fix
# - To format code with Prettier: make lint-prettier
# - To type-check the Nuxt application: make type-check
