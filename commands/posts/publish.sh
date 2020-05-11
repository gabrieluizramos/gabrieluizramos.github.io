# Name based on given input
name=$1

echo "Publishing $name draft"

echo "Moving post file to published folder"
mv posts/drafts/${name}.md posts/published/

echo "Moving post images to published folder"
mv -v posts/drafts/images/${name} posts/published/images/${name}

echo "Removing draft from post path"
sed -i '' "s/draft\///g;" posts/published/${name}.md

echo "Committing and pushing published post"
git add .
git commit -m "chore(publish): publish post $name"
git push origin develop

echo "Running deploy script"
npm run deploy
