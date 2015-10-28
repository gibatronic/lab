.PHONY: index

.SILENT:

index:
	rm -f index.html; \
	curl -X GET \
			 -o index.html \
			 -s http://127.0.0.1/lab/ \
			 && echo done \
			 || echo fail; \
	sed -i '' \
	    's/<\/head>/<link href="\/lab\/icon.png" rel="icon" type="image\/png"><\/head>/' \
	    index.html
