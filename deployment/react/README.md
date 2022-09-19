# Deploying React Apps

## Deploying using Netlify UI
### Things to remember
- This method gives trouble when your react app is in a subfolder in the git repo, so prefer terminal method for that


## Deploying using Terminal
- Run the following command in a cmd/terminal
    <pre>
    npm i -g netlify-cli
    </pre>
- If facing issues with above command in mac, use the following command(might have to enter your password)
    <pre>
    sudo npm i -g netlify-cli
    </pre>
- Inside your react application, run the build command
    <pre>
    npm run build
    </pre>
- Make sure .gitignore file has the build/ folder included
- Run the following command to deploy
    <pre>
    netlify deploy
    </pre>
- Enter your unique site name and other fields, and if asked for publish directory, just put build/
- It will deploy a draft first, check it and if everything works, run the following command to publish to prod
    <pre>
    netlify deploy --prod
    </pre>
- If in case you're using React Router and the deployment is not working properly, create a file named _redirects in the public directory with the following content
    <pre>
    /* /index.html 200
    </pre>
### For mac for linux, If any commands give any auth error, put sudo before the command
