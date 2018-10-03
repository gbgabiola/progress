# [Pre-Programming- Everything you need to know before you code](https://www.udemy.com/pre-programming-everything-you-need-to-know-before-you-code/)

## Course Overview
1. Learn and understand computer, learn about machine code, how to use OS especially linux, 2 persons changed computers forever.
2. How Internet works and why it was invented. How browsers and websites works.
3. Understand tech stacks, what front-end and back-end entails, most common learned programming languages.
4. Basic Concepts of Programming
5. Concept of the API, tackle the great trio of confusion which are frameworks, libraries, IDE.
6. Tackle Content Management Systems, why WordPress is the most common used in the internet. Why shopify and weebly are not advisable.
7. Advanced Concepts worth knowing like OOP, Model Controller Paradigms, CI, Git commits.
8. Tech trends, resposive design, platform as a service like parse, Full stack, hybrid app, SWIFT.
9. Wrap up, Talk about for those who want to learn how to program, how to pick what to learn and where to start.

## 01 The Basics

### Why care about computers?
Why it's useful to learn this
- Although everyone uses computers, few people actually
know how they work
- Programmers are very well paid
- If you want to learn how to program, you need to know the basics of computers first
- It will help you understand how computers communicate

### What is a computer?
What computers are and what they do
- A computer is anything that can compute, which means it can determine an amount or number when given certain rules
- Things that are technically computers: calculators, watches, wearables, cash registers, etc.
- Your brain is also a kind of computer
- Computers can solve problems
- They take instructions, run calculations, and give you a solution
- Computers are all around you

**Fact:** The word computer was created to d**escribe people who solved mathematically problems.

### How does a computer work?
How computers do what they do
- Without humans to operate the computers, they're just dumb machines that don't do anything
- By giving them specific instructions and commands, humans are communicating with the Central Processing Unit (CPU), the core of the computer, where the problem
gets solved
- CPUs = tiny silicon boxes attached to the motherboard
- There are only two companies that make CPUs for personal computers: Intel and AMD
- Within these squares there are thousands of transistors that are microns in diameter
- A transistor is a wire that can transfer electricity
- The smallest CPU transistor is 0.05 microns
- A processor is like a small calculator. It transfers electricity in circles, which we call a clock, and is measured in MIPS (Millions of Instructions Per Second)
- Computers have permanent and temporary memory
- Permanent memory is build in the form of a hard drive which stores your files
- Temporary memory is called RAM (Random Access Memory), and here the information is stored just for the duration of the program you're running

### How do computers send & receive information
How computers communicate
- In the world of computing there are tons of peripherals: monitors, keyboards, mice, track pads, etc.
- Peripherals are external devices that allow you to give your computer input
- The computer receives the input and responds with an output on the monitor
- As a programmer, the code you write is the input that the computer receives
- The response will depend on your coding abilities

### Machinespeak & The Matrix
The language of computers
- Computers have their own language called machine code, which is really hard to understand for humans
- Peripherals and other devices communicate through machine code
- The simplest version of machine code consists of 0s and 1s (beeps and boops), also called a binary system  
1 = Yes, 0 = No
- The motherboard transfers messages to the processor by sending electricity through the wires in the board
- Letting electricity go is a 1 and stopping it is a 0
- In a second, it can send close to a million 0s and 1s
- The original computers were giant tubes, and they were using air instead of electricity (not that efficient)
- **There is a spectrum of programming code, from low level to high level code**
- Low level code:
  - used by basic system and basic pieces of hardware
  - long, inefficient, hard to read or write
  - infinitely customizable
  - machinespeak is the ultimate low level code
- Mid level code:
  - used by peripherals
  - slightly higher level than 0s and 1s
  - peripherals might require a driver to be installed
  - a driver is an interpreter that translates your input for your system
- High level code:
  - used by programmers
  - designed to make things faster
  - shorter, easier to read
  - less descriptive and more restricted

## What is a operating system?
What operating systems are and the first operating system ever
- **Operating systems are interpreters that allow you to communicate with the computer**
- Before operating systems, only highly technical people could use computers
- Operating systems were the world's first software
- A software is an application or a system of instructions and logic that exists within the hardware and is used to control the hardware
- The first operating system was MS-DOS (Microsoft Digital Operating System):
  - it was a black screen where you typed in commands to do certain tasks
  - you had to remember the commands and where the programs you want to use are stored
- MS-DOS was taking your high level instructions and translating them to low level code

### Operating systems in the modern era
How operating systems evolved
- In the 1980s, Bill Gates and Steve Jobs were fighting over how to make MS-DOS better
- Steve Jobs copied the idea from Xerox, which came up with the GUI (Graphic User Interface)
- Before GUI, operating systems were text based user interfaces
- After seeing the GUI, Steve Jobs created Macintosh and packaged it in an attractive way for the average consumer
- Computers used to be popular only among hobbyists, but after operating systems came out, everybody could easily use them
- There are 3 main operating systems today: Windows, MacOS, and Linux
- Windows' mission was to make an operating system that appeals to everyone
- MacOS is even easier to use and more restricted
- Linux is free (open source), anyone can modify it, and it's used mostly by technical people who want to have more control over the software
- Other operating systems that are similar to Windows: Ubuntu and Fedora

### Desktop software
What desktop software is and what it does
- "Desktop" refers to your operating system. Your computer's desktop is where you keep files and folders
- **Desktop software = Software that you can open from your desktop**
- Software translates everything you do for the hardware
- MacOS and Windows have different machine code, so you have to make specific software for each of them
- Within the hardware of your computer runs an operating system, and the operating system runs desktop software
- All these systems have to communicate between them
- You can think of these like layers
- Apple used to make all the apps that run on a Mac, but now they give you the option to use other versions of the same tools  
They have transformed into a platform
- Platform = Software environment where anyone can create something that runs on it
- Nowadays, almost every device is a platform that you can install apps on (phone, watch, TV)


## 02 The Internet

### The history of the internet
Why internet was created and how it evolved
- The first version of the internet was made by DARPA (Defense Advanced Research Projects Agency)
- Created in the 1960s, ARPANET was a project that aimed to connect two computers to each other, one in UCLA and the other one in Stanford
- Through this connection, the world's first computer message ("LO") was sent by mistake by a clueless student who was trying to type "LOGIN"
- Later on, they created the TCP/IP (Transmission Control Protocol/Internet Protocol), a system that computers use to transfer information to and from servers and other computers
- Until the 1980s, the internet was only used for transferring research between research institutes
- LAN = Local Area Network (local computers connected to each other)
- The internet consists of many LANs connected to each other
- WWW = World Wide Web (not the same thing as the internet)
- WWW is a standardized system that was created so that any kind of computer can access and transfer the same information
- One of the ways it does that is through the HTTP protocol, which acts as a language for coding information for any computer
- When you type http://www.website.com,
"http" specifies the protocol, and "www" specifies the location of what you're looking for

### The anatomy of the internet
How the internet works
- There are 3 concepts you need to know: client, node, server
- The client is the device that requests and receives information
- A node is any machine that that information crosses through to get to the client
- The server is the device that's sending the information, fulfilling the client's request
- These terms are relative and they can be interchangeable depending on which device sends or receives the information
- The most important nodes you need to understand are: ISP (Internet Service Provider), modem, router
- Any information will have to pass through these nodes to get to your computer
- The ISP is any mega hub that distributes and connects computers across the country  
Instead of connecting every computer in the area with each other, you connect all of them to this hub
- The modem is a device that is permanently connected to your ISP and is used to send and receive information through your ISP hub
- The router is a hub that allows all devices and systems in one area or room to connect to the same connection through the modem

### Domain, IP, DNS
Explaining the three concepts
- IP = Internet Protocol
- The IP is a 9 digit string of numbers appended together with periods
- Computers use IP addresses to find the location of your computer or find the server you're requesting
- Every device has an IP
- DNS = Domain Name System
- The DNS holds the information of what IP address is associated with what domain name
- ICANN = The International Corporation of Associated Names & Numbers
- ICANN is the entity that decides if the domain name you want is available

### How do browsers work?
What browsers are and their functions
- A browser is a software that allows you to access websites
- It has two basic functions:
  1. It establishes a persistent connection with the server where you can access files to view a website
  2.  It translates web programming into something that your operating system can understand
- There are several hundred browsers out there
- The most commonly used are:
  - Google Chrome
  - Mozilla Firefox
  - Internet Explorer
  - Safari
  - Opera
- Every browser has a different way of interpreting web code  
The same site might look different depending on which browser you're using to view it
- Programmers have to ensure that the website they're building will look good and load correctly on all of these browsers

### How does mobile internet work?
How you get internet on your phone
- Smartphones are just small computers that ring
- The mobile phone is a client that receives information
- There are two ways of getting data on your phone: Wi-Fi and cell service
- Wi-Fi only works within a certain range
- Cell service works over longer distances and is provided by the cell towers
- The phone companies that own these cell towers act like the ISP, the cell tower acts like the router, and the modem in this case is called a Gateway Server
- The Gateway server converts data into a language your phone can understand, called WAP (Wireless Application Protocol)

### The anatomy of a website
What a website is made of
- A website is just a big set of text files in a folder stored on the server
- The folder usually contains these 3 files:
  - index.html (main instructions about what the website should show you)
  - a .css file (instructions on the style of the website)
  - a backend script (instructions of what the site can do) - .php, .py, or .rb
- Other potential files might include a folder called "images", where all the images that should be displayed on the website are stored
- For each page of the website there will be a separate folder with the same structure

### The anatomy of a mobile site
What a mobile site and a mobile app are made of
- Nowadays, almost all websites have in their original index file instructions on how to display them on mobile phones
- When accessed through the browser, mobile sites operate very much like the browser on your computer
- Mobile sites are different from mobile apps
- While you can access a mobile site by opening your browser, in order to use a mobile app you will have to download it to your phone
- The structure of the folder that holds the mobile app files is similar to the mobile site folder, only it's now on your phone instead of online
- The group of files you download is called a package
- This package doesn't have a backend file, which is stored on the server of the company that provides the app, in order for it to run faster

### Let's talk about Netscape
What Netscape was and how it change the world
- Netscape was the first commercially available browser
- It did 3 things that changed the internet forever:
  1. They invented a new language called Livescript that allowed websites to have richer functionality (they were very basic at first)  
  Livescript later became Javascript
  2. They invented SSL (Secure Sockets Layer) which encrypted the traffic being passed through the TCP/IP protocol  
  People could buy things online without being afraid someone will steal their information
  3. It launched what we call "browser wars"
- Companies started fighting about who makes the best browser
- As a result, Microsoft launched Internet Explorer