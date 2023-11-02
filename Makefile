stats:
	docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}\t{{.PIDs}}"
down:
	docker compose down

pull:
	docker compose pull

build:
	docker compose build

start-grafana:
	docker compose up -d influxdb grafana

k6:
	docker compose run k6 run --vus 1 --duration 30s /scripts/basic.js

srv1:
	docker compose down srv01 && docker compose up srv01

start-service:
	docker compose up srv01 srv02 srv03 loadbalancer