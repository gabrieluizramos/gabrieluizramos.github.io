# Go to public pages
git checkout gh-pages

# Clear current public directory
rm -rf public

# Clear and build files
gatsby clean
gatsby build

# Move builded files to root
mv ./public/* ./

# Commit and pushes
git commit -am "release"
git push origin gh-pages
