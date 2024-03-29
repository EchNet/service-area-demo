# Make commands for development
# 
# `make run` runs an express dev server, listening on port 3000.

PIP=pip
PYTHON=python
NPM=npm

package-lock.json: package.json
	$(NPM) install

run: package-lock.json
	node server.js

clean:
	rm -rf ./deploy
