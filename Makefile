.PHONY: install dev build test start-backend

install:
	npm install
	cd backend && npm install

dev:
	npm run dev

start-backend:
	cd backend && node index.js

build:
	npm run build

test:
	npm run test
