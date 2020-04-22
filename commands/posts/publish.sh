# Name based on given input
name=$1

echo "Publishing $name draft"

echo "Moving post file to published folder"
mv posts/drafts/${name}.md posts/published/

echo "Moving post images to published folder"
mv -v posts/drafts/images/${name} posts/published/images/${name}

echo "Committing and pushing published post"
git add .
git commit -m "chore(publish): publish last post"
git push origin master

echo "Running deploy script"
npm run deploy
