echo "Running preinstall script"

if [ -z $(which gatsby) ]; then
    echo "No Gatsby CLI found"
    npm i -g gatsby-cli
else
    echo "Gatsby CLI already installed"
fi
