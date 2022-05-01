run:
	npm run dev --prefix briink-app

build:
	npm run build --prefix briink-app && npm install --prefix briink-app --omit=dev --ignore-scripts --prefer-offline
