# Command Line, Git, and Github

## The Unix Command Line

### Goal

- Learn how to use basic bash commands in a Unix/Linux Terminal.
- Learn how to manipulate files and folders without needing a graphical user interface.
- Learn how to download and install to your computer using command line.

Hyper terminal is recommended to be more consistent with windows and mac users and is very customizable.

bash is the shell that will be using primarily.

- Download and install hyper terminal
- Downlaod and install git
  - Check git bash here

### Understanding the Command Line

**Kernel** refers the actual program that interfaces with the hardware, so it is the core of operating system

**Shell** in computing refers to the user interface for us human to be able to interact with the kernel 

Two variance of Shell:

1. Graphical User Interface (GUI) it is the finder on mac or explorer on windows to access and find your files
2. Command Line Interface (CLI)

Bash = Bourne Again Shell is a CLI for the unix system. Linux and mac is unix like system, it's different from the windows which uses DOS.

Why Use the Command Line?

1. Greater Control
2. Speed

### Command Line Techniques and Directory Navigation

**`~` (Tilda)** is the location of your home directory

Up and Down arrow to look for the last command you used 

- **`ls`** list all the items inside the directory
- **`cd`** change directory with the name of chose directory inside the current directory
- **`cd ~`** to go back to the home directory
- **`cd ..`** to go back one level or to the parent of the current directory
- **`clear`** to clean the entire terminal screen
- **`Ctrl + A`** to put the cursor on the beginning of the line
- **`Ctrl + E`** to put the cursor on the end of the line
- **`Ctrl + U`** to clear the current command without executing it, it will clear the entire line and you can write a new command
- **`pwd`** print working directory

  ```sh
  $ ls
  $ cd Documents/
  $ cd Documents/Learn/Languages/
  $ cd ~
  $ cd ..
  ```

### Creating, Opening, and Removing Files

- **`*` (asterisk)** means all files
- **`mkdir`** to create a new directory
- **`touch`** to create or update file
- **`rm`** to remove/delete file
- **`rm *`** removes all the files inside the directory
- **`rm -r`** to remove a directory and all the files/folder inside the currenct directory
- **`rm -rf`** removes ll the files/folders inside the directory without asking for confirmation

  ```sh
  $ mkdir FolderName
  $ touch text.txt
  $ rm text.txt
  $ rm *
  $ rm -r FolderName
  ```


## Git, Github and Version Control

### Goal

- Using git for version control and collaboration
- Git forking, branching and cloning
- Using GitHub as a remote repository
- Checkout and rolling back changes with git
- Using git and GitHub

### Version Control Using Git and the Command Line

- `git init` to inialize the current directory as a repository
- `git status` to see what's inside the staging area
- `git add` to add the file in to the staging area and to start tracking changes in it
- `git add .` to add all the files of the current directory on staging area.
- `git commit -m ''` to commit file/files to version control with `-m` flag for commit message
  - commit message is really important, it helps you keep track of what changes you have made in each commit.
  - commit message are written in the present tense and this is the best practice.
- `git log` to see all the log of the commits with hashes
- `git diff` to check the differences between the version of the file and the last save point in the get repository.
- `git checkout` to revert or rollback to the last position in our local repository.

  ```sh
  $ git init
  $ git add fileName
  $ git commit -m 'Complete chapter1'
  $ git add .
  $ git log
  $ git diff chapter3.txt
  $ git checkout chapter3.txt
  ```

### Github and Remote Repository

- Create/Sign up with for a github account it's free and confirm you're email after you registered.
- Create a new repository and name it according to your project
- Copy the address of the github repository
- `git remote add origin` to tell our local repository that we created a remote repository and want to transfer our files remotely
- `origin` is the name of your remote, you can change it, but best practice is to keep it like that
- `git push -u origin master` pushes our local repository into the remote repository using `-u` flag to links up the remote and local repositories, then push it towards the remote (origin) and push it the branch (master).
- `master branch` is the default branch or the main branch of all your commits.

### Gitignore

- ignore files are things, settings, passwords, keys that you don't want others to see
- create a `.gitignore` file and save all the files/folders you want to ignore
- `git rm --cached -r .` to remove all the files to staging area.
  - `r` flag for recursive

### Cloning

- `git clone`  to pull down all the commits and versions of a remote repository and to store the files on your working directory.

  ```sh
  $ git clone https://github.com/username/project.git
  ```

### Branching and Merging

- only put the into the master branch once you've tested and know that everything is working fine. then bring your code back to the working copy ready for shipment and deployment.
- `git branch branchName` to create a new branch named "branchName".
- `git branch` to check all the branch you have for current project directory.
- `git checkout branchName` to switch branch to the "branchName".
- `git merge branchName` to merge the branch "branchName" to the master branch
  - make sure when mergin branch to master, you are inside the master branch

### Forking and Pull Requests

- forking a remote repository, will give you your own copy and a have full permissions to to do whatever you like with the copy of the repository.


## Resources

- [Hyper](https://hyper.is/)
- [Git version control](https://git-scm.com/)
- [Hacker Typer](http://hackertyper.com/)
- [Unix Linux Cheatsheet](http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/)
- [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
- [Github](https://github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)