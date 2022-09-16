# Installations

## VS Code
- Based on your OS, download vs code from the [official site](https://code.visualstudio.com/download)

### Helpful Extensions
- Live server
- Auto save on window change
- Code Runner
- CSS Peek
- HTML CSS Support
- Path Intellisense
- JS JSX Snippets
- Prettier

## NPM and Node
- Based on your OS, download nodejs from the [official site](https://nodejs.org/en/download/)
- npm comes along with it
- Always download the LTS version
<pre>
node -v
npm -v
</pre>

## Git
### Github
- Go to github.com and create an account
- Remember your username, email and password
- Go to [git website](https://git-scm.com/downloads) and follow the instructions

### For Mac
- Install homebrew or Macports (prefer homebrew)
- To install homebrew, go to the [website](https://brew.sh/) and copy paste the command in the terminal
- In your terminal, type the following command
<pre>
brew install git
</pre>
- After installation, type the following command to check the git version
<pre>
git --version
</pre>

### One time git setup (For all OS)
- Go to terminal or cmd and type the following commands 
<pre>
git config --global user.name "your_github_username"
</pre>
<pre>
git config --global user.email "your_github_email"
</pre>

### Git push using UI
- Open only the folder you want to push in vs code
- Go to source control tab (left panel 3rd button) and click on Initialize Repository
- Click on the + icon infront of the files you want to push
- Once it shows in staged changes, write a message and click on commit
- Post that, click on publish branch (or push, or sync changes)
- If it asks for private or public repository, go for public, unless you have some secret personal code
- Enter your github password if prompted

### Git push using terminal
- Open terminal/cmd/git terminal in vs code
- Go to the folder you want to push using cd
<pre>
git init .
</pre>
- Go to github.com and create a new repository
- Keep it public, and don't initialize it
- Write the following one time command
<pre>
git remote add origin https://github.com/your_github_username/your_github_repo_name.git
</pre>
- To check, type the following command
<pre>
git remote -v
// You will see 2 urls
</pre>
- Whenever you are done with your changes for the files, and want to push it, type the following commands
<pre>
git status // Shows you the status of the files, untracked, added, deleted, modified
git add filename // Adds the given file
git add . // Adds all the files
git commit -m "commmit_msg" // Commits all the added files till now with the given commit message
git push -u origin master // Pushes to master(default) branch, one time, next time just use git push
</pre>

