# Go to public pages
git checkout gh-pages

# Clear current public directory
rm -rf public

# Build files
gatsby build

# Clear all files
rm -v !("./public")

# Move builded files to root
mv ./public ./
rm -rf ./public

# Commit and pushes
git commit -am "release"
git push origin gh-pages
