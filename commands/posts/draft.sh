# Name based on given input
name=$1

# Get post date from name (yyyy-mm-dd)
date=${name:0:10}

# Get url from name (removing the yyyy-mm-dd. from prefix)
url=${name:11}

echo "Creating new draft: $name"

echo "Creating markdown file with template"
sed "s/post-name/${name}/g; s/post-url/${url}/g; s/post-date/${date}/g;" commands/posts/template.md > posts/drafts/${name}.md

echo "Creating post image folder"
mkdir posts/drafts/images/${name}

echo "Post created successfully :)"
