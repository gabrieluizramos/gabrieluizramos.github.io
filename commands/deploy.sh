# Clear current public directory
rm -rf public

# Clear and build files
gatsby clean
gatsby build

# Move builded files to root
mkdir ./docs
mv ./public/**/** ./docs/

# Commit and pushes
git add . && git commit -m 'release' git push origin master
