# The Unix Command Line

## Goal

- Learn how to use basic bash commands in a Unix/Linux Terminal.
- Learn how to manipulate files and folders without needing a graphical user interface.
- Learn how to download and install to your computer using command line.

Hyper terminal is recommended to be more consistent with windows and mac users and is very customizable.

bash is the shell that will be using primarily.

- Download and install hyper terminal
- Downlaod and install git
  - Check git bash here

## Understanding the Command Line

**Kernel** refers the actual program that interfaces with the hardware, so it is the core of operating system

**Shell** in computing refers to the user interface for us human to be able to interact with the kernel 

Two variance of Shell:

1. Graphical User Interface (GUI) it is the finder on mac or explorer on windows to access and find your files
2. Command Line Interface (CLI)

Bash = Bourne Again Shell is a CLI for the unix system. Linux and mac is unix like system, it's different from the windows which uses DOS.

Why Use the Command Line?

1. Greater Control
2. Speed

## Command Line Techniques and Directory Navigation

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

## Creating, Opening, and Removing Files

**`*` (asterisk)** means all files

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

## Resources

- [Hyper](https://hyper.is/)
- [Git version control](https://git-scm.com/)
- [Hacker Typer](http://hackertyper.com/)
- [Unix Linux Cheatsheet](http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/)
- [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)