.PHONY: index

.SILENT:

index:
	curl -X GET \
			 -o index.html \
			 -s http://127.0.0.1/lab/ \
			 && echo done \
			 || echo fail
