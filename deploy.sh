echo "Running build script"
npm run build

echo "Deploying files to server..."
scp -r ./dist/* root@185.31.67.243:/var/www/frontend/

echo "Done!"

# password: Yq63]rpD,7Ih@5PsO]
