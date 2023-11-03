
stats:
	docker stats 
down:
	docker compose down

pull:
	docker compose pull


k6:
	docker compose run k6 run --vus 1 --duration 30s /scripts/basic.js

srv1:
	docker compose down srv01 && docker compose up srv01

start-service:
	docker compose up srv01 srv02 srv03 loadbalancer