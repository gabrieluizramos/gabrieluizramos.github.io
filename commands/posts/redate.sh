# Type based on initial argument provided by NPM Script
type=$1

# Current date provided as initial CLI argument
current=$2

# Target dated provided as second CLI argument
target=$3

post=$(ls posts/${type}/images | grep ${current})
if [[ -z "$post" ]]; then
  echo "Post not found! :("
  exit
fi

echo "Redating post $post -> $target"
title=${post:11}
name=${target}.${title}
file="${name}.md"

echo "Changing post file date"
mv posts/${type}/${post}.md posts/${type}/${file}

echo "Changing image folder date"
mv posts/${type}/images/${post} posts/${type}/images/${target}.${title}

echo "Changing post content related dates"
content=$(cat posts/${type}/${file})
content=${content//$current/$target}
echo "$content" > "posts/${type}/${file}"
