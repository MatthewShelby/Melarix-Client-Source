echo "Switching to branch master"
git checkout master

echo "building app..."
npm run build

echo "Deploying to  server..."
scp -r build/* serdev@5.75.205.222:/var/www/melarix.bridge.com/

echo "Done."
