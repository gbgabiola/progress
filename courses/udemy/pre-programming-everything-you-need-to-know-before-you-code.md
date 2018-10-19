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

---

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

**Fact:** The word computer was created to d\*\*escribe people who solved mathematically problems.

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

### What is a operating system?

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

---

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
  2. It translates web programming into something that your operating system can understand
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

---

## 03 Front, back, & stacks

### What is front-end vs. back-end?

Explaining the two concepts

- In any web interaction you have, you're going to use a browser to access information on a server
- **Front-end programming is a set of instructions that tells your browser what to show (images, text, spacing, buttons, etc.)**
- **Back-end programming is a set of instructions that does things like fetching information, saving information, and running calculations**
- The front-end instructions get processed on your browser, which uses your computer's **RAM** and processor  
  Too many websites open will slow your computer down
- Back-end instructions run primarily on the server you accessed the information from and uses its hardware
- Back-end programming = Server-side programming
- In order for a website to run effectively, both front-end and back-end programming must operate together

### What is a language?

Explaining programming languages

- Programming is a way to write instructions for a computer to understand and work with
- Computers speak machine code
- **A programming language is a set of rules you have to follow in order for your computer to understand you**
- Programming languages are similar to human languages. They are only good for software or hardware that is designed to understand them
- Programming has developed over the years as more and more people contributed to it
- Even though newer languages are more efficient, a lot of products (ex. operating systems) we use are still based on old languages

### HTML

What HTML is and what it's used for

- **HTML = HyperText Markup Language**
- HTML was created by people who wanted to increase the efficiency of sharing research
- They first created the HyperText Transfer Protocol (HTTP), and with this, people could use HyperLinks in a document to embed links to other documents
- Then, the researchers wanted to markup the texts with highlights, underlining, bolding, and so HTML appeared
- HTML is by far the simplest web language you can learn and it's included in every website
- HTML is used for formatting text, tables, images, buttons, and it assigns attributes to these objects
- There are 142 tags you can use in HTML
- HTML5, the latest version, lets you embed anything you want into a page, like music, videos, games

### CSS

What CSS is and what it's used for

- **CSS = Cascading Style Sheets**
- CSS allows you to have more control over the page than HTML does
- With CSS, you can create a variety of new attributes and apply them to HTML elements on the page, by using what's called a "class"
- For example, you can arrange elements on the page wherever you want them by describing the location
- Any attribute you give to a class will be given to whatever you wrap in that class tag
- Class rules can be created in the same document as your text, separated at the top, or in a separate .css file that will be referenced in the original document
- Every developer has to have a basic understanding of CSS

### JavaScript

What JavaScript is and what it's used for

- JavaScript is not the same thing as Java, which is a backend language
- JavaScript was created by Marc Andreesen and it was originally called Mocha
- It's the hardest language to learn
- **JavaScript is in charge with the website interactivity**
- It was originally created for facilitating the process of filling out forms; before JavaScript, you couldn't know if the username you're trying to use was already taken
- JavaScript allows websites to run faster, it makes the site experience more interesting and enjoyable

### Python

The pros and cons of Python

- Python is a versatile programming language and it's easy to learn
- It's considered a general purpose programming language
- Python is an expressive language because it resembles very closely the English language
- Other languages make you learn various signs that if you forget to include, the code fails
- Python looks like this:  
  `if a is not 5:`
- Who uses Python: Google, YouTube, Dropbox, **NASA**
- Python is a high level programming language, which means it's the farthest away from machine code, so it's less precise
- This makes it harder to have full control over what you're trying to do
- The downside to being a general purpose language is that every time you use it, you have to install other technologies to help interpret the code for you

### PHP

What you need to know about PHP

- **PHP = PHP Hypertext PreProcessor**
- PHP is one of the most well-known back-end languages and it has the largest community of developers
- It's fairly easy to learn but it has a few inefficiencies because it's so old
- PHP looks like this:  
  `Display "if (a!=5) {..."`
- PHP is open source, anyone can use it and set it up very quickly
- PHP is the easiest to find and recruit developers for, because of its large community
- It has a negative reputation because it's free
- Although it has some drawbacks, PHP is flexible, well supported, and easy to use
- Who uses PHP: Facebook, WordPress

### Ruby

What you need to know about Ruby

- Ruby is the newest programming language, it's popular and a bit controversial
- It was designed to increase speed
- It includes a lot of automation and intuitive changes that save time
- Ruby has a small community and therefore the prices are very high for a Ruby developer
- It has a lot of inexperienced people because it's so new
- It has poor performance when used for larger and larger systems
- Who uses Ruby: AirBNB, Shopify, Etsy, Groupon

### What's a tech stack?

The definition of tech stacks and examples

- The operating system acts as a giant interpreter for your computer, and as a result any software or program works within the space that it's created
- We usually think of this like a "stack"
- Any set of technology of programming languages that works together and enables each other will and can be referred to as a stack
- Web stack = The combination of technologies a website uses
- Tech stack = Web & mobile apps
- For example, a website can be built using the LAMP stack:  
  Linux (operating system), Apache (server system), MySQL (database), PHP (back-end language)
- Facebook uses **LAMP**
- If you change one of the pieces, you can get **WAMP** (Windows), or **MAMP** (MacOS)

### Common stacks for web

More examples of stacks

- Any web stack has **4** components: operating system, server system, database, back-end language
- **LAMP** is the oldest and most popular stack
- When you have different needs for your technology, you can use other stacks
- **WINS** = Windows Server, **IIS Server**, **.NET**, **Microsoft SQL** Server
- **WINS** is great for big enterprises, because it focuses on security and IP protection
- It's also very slow to use, expensive, and you have to train people on how to use it
- **MEAN** = MongoDB, Express.js, Angular.js, Node.js
- **MEAN** is great for small startups that need cutting edge technology, speed, and a polished user interface

---

## 04 Core concepts of coding

### Syntax

Explaining the concept of syntax

- All programming languages have the same core concepts, they are just expressed / written in a different way
- Every language has its own rules and its own vocabulary
- One of the first things you do when you learn programming is learn these rules
- Syntax can be strict or expressive
- Older languages have strict syntax, which means if you forget to put one sign or you capitalize the wrong letter, the code will fail
- Python, for example, will still work even if you get a few things wrong

### Variables

Explaining the concept of a variable

- Variables are stored information that you can then manipulate and use
- They are used in order to make the sites dynamic
- If you want to change something on the website that shows up on multiple pages, you just have to modify the variable and the change will happen in all the places

### Printing

Explaining the concept of printing

- Printing is a command that you can put into your code in order to tell it to output the result of the code you're running
- If you want the website to make a calculation, it's not enough to write the code for it, you have to "print" it on the screen if you want the user to see the actual result
- There is a specific syntax for printing in each programming language

### Commenting

Explaining the concept of commenting

- When developers are working on an application that someone else built, they need to know some more details about the code in order to be able to modify it
- Comments are a way of adding notes to explain what you're doing
- In order for the computer to know that what you're writing is not code, you have to "comment it out" by using specific symbols for each language
- This way, it will ignore that part and the program will run properly

### Strings

Explaining the concept of strings

- If you want to save a variable as text, you have to store it as a string
- There are different rules for each language, but usually you would use quotations to delimitate text
- The computer will consider whatever is between the quotations as human language and won't run it as code
- Escape commands allow you to modify the text within your quotations, like put in on two separate lines  
  `Example: "This is /n a text"`

### Arrays

Explaining the concept of arrays

- Array = Series of pieces of information that are all formatted the same
- Arrays can include numbers, strings, or variables (but not combined)
- Using arrays saves time and it allows you to show more information more easily
- If you need to use only one item from the array, you use a pointer
- Pointers show what position each item of the array is in

---

## 05 Frameworks & APIs

### What is a framework?

What frameworks are good for

- **A programming framework is a predefined structure that programmers can use to build upon, by changing existing code or adding code of their own to create a product**
- Most of the time, what you're trying to create has already been done before
- There is no point starting from scratch every time you build something
- Frameworks help speed up the process of creating your product
- They help you set up the basic folder structure and link everything together for you so that you can spend time working on the parts that are unique
- It's like using a template and changing only the parts you need to be different

### Front-end frameworks

The use of front-end frameworks

- Front-end frameworks are template websites that are set up in the most convenient way possible
- It's easy to modify these templates and it saves time
- Front-end frameworks might provide UI packs (UI = User Interface)
- UI packs include pre-made button designs, forms, fonts, headers, everything you see on the site
- Front-end frameworks usually provide 3 things:
  - Layouts
  - UI kits (graphic design bits)
  - Interaction snippets

### Back-end frameworks

The use of back-end frameworks

- Back-end frameworks do the following things:
  1. They help you set up the file and folder structure on the server
  2. They give you pre-made code for functions that you're going to use
  3. They help you download filed
  4. They help you optimize images, save, and recall them
  5. They help you set up APIs for pulling information from other websites
  6. They help you set up a payment terminal
- Back-end frameworks force you to program your app in a specific way that fits with their structure
- It can be complicated to learn full frameworks, that's why you can also use micro-frameworks
- Micro-frameworks focus on core functions

### What's an IDE?

What IDEs are and what they do

- **IDE = Integrated Development Environment**
- IDEs are programs that programmers use to make their applications inside of
- They provide tools that make coding a lot easier, like spellcheck or auto-complete features
- IDEs help the developer organize and structure the files before they upload them to a web server
- IDEs also help with version control, keeping track of code updates
- Inside an IDE, you can write code, test it, and automatically see how it runs for real as if it were uploaded to a live website

### Libraries

What a library is and what it's used for

- Libraries are packages of pre-made commands that help you save time
- JQuery is one of the most popular and famous libraries for JavaScript
- Other JS libraries: Handlebars, Mustache
- There are tons of libraries out there for everything you might need
- There are libraries for front-end, as well as back-end languages

### What is an API?

What APIs are and what they do

- **API = Application Programming Interface**
- APIs are mini applications that run on top of a larger application, and are used to facilitate the transfer of information to external apps that ask for them
- APIs can automatically handle the transfer and fulfil the information requests
- They help save time and they can limit what other apps can ask for
- Example of using an API: Login to a website using Facebook

---

## 06 Content management systems

What they are and why we use them

- **CMS = Content Management System**
- A CMS is an application that helps you as a website owner or website developer manage your content
- Content is a very broad term, and it includes everything you create and put online (blogs, posts, images, graphs, PDFs, guides, videos)
- Without CMS, you would have to build everything from scratch in order to put your content online
- Using a CMS makes this whole process easier and it makes the site look better
- CMS handles your content, it lets you manage commenting, share information, quickly change how the site works, etc.
- You don't have to be a programmer to use a CMS

### The big three CMS

WordPress, Drupal, Magento

1. **WordPress**
   - The world's largest and most popular CMS
   - 22% of the entire internet is built on it
   - It has tons of templates, plugins, and extensions
   - It can handle mostly everything (payments, email lists, post scheduling, etc.)
   - It's pretty hard to use
2. **Drupal**
   - It has modules, plugins, and extensions for everything you might want to build
   - Very similar to WordPress
   - It's less popular or mainstream
   - Only 2.2% of the internet is built on it
   - It has a more enthusiastic but smaller core of developers supporting it

- WordPress and Drupal are considered multi-purpose CMS

3. **Magento**
   - It's a CMS that handles e-commerce / online stores
   - It helps with inventory management, SKUs, and product imagery
   - It's huge and popular

- All these CMS are built in PHP, they're easy to set up, and they're mostly free to use

### The new guard CMS

SquareSpace, Weebly, Shopify

- Even if the big three CMS are convenient to use, they still need some extra time and effort to set them up
- This is why WYSIWYG (What you see is what you get) platforms emerged

1. **SquareSpace**
   - It lets you create a site within a given set of templates
   - You are limited in what you can edit
2. **Weebly**
   - It lets you have more customization control than SquareSpace
   - You can install integrations, third party themes, and move things around
   - They are less popular
3. **Shopify**
   - It handles e-commerce
   - You can set up a store and add all sorts of cool advanced features and integrations
   - Easier to use than Magento
   - They take a percentage of your store's sales, as well as a weekly subscription
   - Built in Ruby

### Picking one over the other

How to choose your CMS

- There are some questions you need to ask yourself before choosing the right CMS

1. **Are you going to sell things online?**
   - If yes, use Magento or Shopify
   - If not, use the other ones
2. **Is selling things online the primary purpose of your site?**
   - If you also want to have a blog, Magento will make it easier for you
   - You can use two separate CMS, one for selling, and another one for blogging
   - If selling is only one thing you do among a lot of other stuff, choose one of the multi-purpose CMS
3. **How particular are you about details?**
   - If you want your site to be unique, use a traditional CMS because you can customize more
   - If you're satisfied with a template design, use the new ones

---

## 07 Advanced concepts

### GITs and GIThub

What GITs are and why they're useful

- **GIT = Online repository for saving versions of code**
- The old solution was to save them on local hard drives, but it was inefficient
- This system is easy to set up and access in the cloud
- GIT helps you keep track of what other team members are working on and what's the latest version of the code
- **GIThub = A company that took the GIT process and made their own large service for saving code**
- "Forking" = modifying a version of code to make your own version
- A lot of people fork using GITs

### OOP

What OOP is and what it does

- **OOP = Object Oriented Programming**
- The standard way of developing something is called a procedural paradigm
- OOP is a new paradigm that allows you to think of programming like real objects instead of instructions
- OOP is a collection of functions and data that can be grouped into what's called an object
- When you need to access an object, you instantiate a class that contains it
- OOP helps you save time by grouping bunches of data and functions together
- You can then apply attributes broadly across one or several objects
- OOP is more scalable than procedural

### Continuous integration

What continuous integration means

- Integration means combining two parts of code together
- Continuous integration is part of a system protocol that includes:
  - Continuous delivery
  - Continuous deployment
  - Continuous integration
- **Continuous integration is making an elaborate server setup that can automatically do the integrations for you**
- It makes everyone check in more often to see if what they're making fits with what others are making, of if there are other issues
- This system makes solving problems easier and makes the development process faster
- It's usually used by larger teams

---

## 08 Tech trends

### Full stack JS

What full stack JavaScript is

- Node.js is a system that allows you create an environment on your browser to test your JavaScript
- **JavaScript is now used as a front-end and back-end language**
- Using it for both could save time and eliminate the effort of learning other back-end languages
- Full stack JS has a lot of potential but it's still under development
- It might be inefficient and might actually take longer to write everything in it

### Pair programming

How pair programming works

- Instead of having one person program alone, you have two people standing one behind the other
- Two people will write one piece of code
- When two people work on it, you have less problems
- The process is slower
- Advantages:
  - The code quality improves
  - Developers learn from each other
- It's used mostly with big applications that have a long timeline
- It's better to do it slower but have a higher quality

### Full stack design

What a full stack designer does

- **Full stack designer = Graphic designer who can also program**
- There is a trend towards designers learning more about development
- The final product will have a better quality because they also understand what's happening behind the scenes, not just on the surface

### Hybrid apps

Pros and cons of hybrid apps

- There are three types of mobile apps:
  1. Native app
     - written in the code of a specific operating system
  2. Web app
     - a website that is redesigned to work on a smaller
  3. Hybrid app
     - designed to work on all the operating systems
- Advantage:
  - Hybrid apps help save time and money
- Downsides:
  - Loss of interactivity
  - Loss of core functions and harder to control
- Native apps: Facebook, Twitter
- Hybrid apps: Netflix

### Responsive design

What it is and why we use it

- Nowadays, phones and computers come in a lot of different sizes
- You have to make sited that looks good on all resolutions
- **Responsive design is a design that detects the size of the screen and adapts all the elements on the app to that resolution**
- You have to decide what gets displayed on lower resolutions
- Usually, responsive design has a lot of white space on the sides that allows it to contract without losing elements
- The elements of the site have a relative position (floating)
- You need to run a lot of bug testing on different resolutions and browsers

### SaaS, PaaS, & IaaS

What they are and how they work

- "In the cloud" = Stored and accessed on a different device or server than the device you're using
- People use cloud storage in order to have access to their files at all times

1. **SaaS = Software as a Service**  
   Products become services by providing a web version  
   You pay per month and you login to use the online app  
   Advantages:
   - You charge less, but more often, and for longer
   - People can access files everywhere
   - Continuous updating
2. **PaaS = Platform as a Service**
   A platform is a set of tools, resources, and software that come together to let you build software on top of it
   - Example: creating games on Facebook
3. **IaaS = Infrastructure as a Service**
   IaaS is what holds up and contains whatever you're building  
   Web storage is an IaaS  
   Iaas systems offer:
   - Security and firewalling
   - Routing and network services
   - Maintenance and load balancing

- Saas runs on Paas, which runs on an Iaas - like a stack

### SWIFT

What Swift is

- **Swift is a new programming language designed by Apple specifically for their operating systems**
- In the past, you would build iOS apps in Objective C, which is harder to learn and more strict
- Currently you can make an app in either of them
- Swift is safer to use, fun, and faster
- Swift is not just for iOS, it also works for Apple Watch, TVOS, Mac OS
- Apple wanted to accelerate the developer community for their system by creating Swift
- Swift is not that easy to learn

---

## 09 Choose your path

### Web developer vs. software engineer vs. full stack developer vs. hacker

The difference between the four concepts

1. **Web developer**
   - Someone who has a strong competency in front-end design, with basic competency in back-end programming
   - They can make a blog or a website
   - They focus on how it looks
   - They can be specialized in one of the platforms, like WordPress
2. **Software engineer**
   - Someone who has a strong competency in back-end development and basic competency in front-end development
   - They focus on complex apps
   - They solve really hard problems and are paid a lot of money
3. **Full stack developer**
   - Someone who is good at both front-end and back-end development
   - They are very rare
   - Usually, they are just ok at both
4. **Hacker**
   - Someone who has basic competency in both front-end and back-end programming
   - They can hack together something pretty quickly
   - They try to get something done and they are not focused on usability

### How do you choose?

Questions to ask yourself

1. **What are you orientated towards?**
   - Front-end developers will work a lot with design and will have to be creative
   - Back-end developers will solve problems and use logic
2. **Where do you see yourself using this programming?**
   - Where do you want to work?
   - Big companies need back-end developers
   - If you want to work on your own projects, focus on the things that get it done the fastest (ex. Python, Ruby)
   - You can hire someone to do the front-end
   - If you like mobile, learn how to do mobile apps

### How to learn front-end

Where to start

- Start with HTML because it's the easiest
- w3schools.com, Youtube tutorials
- Then move on to CSS
- Use online courses
- Download websites and try to edit and change the CSS
- Get an introduction to JavaScript
- Codecademy, Tutsplus, Lynda, Treehouse, OneMonth, Bento
- Learn JQuery
- Start looking at front-end development bootcamps (mostly online)

### How to learn back-end

Where to start

- Back-end has the most options for learning
- First, pick a language
- Look at the companies you'd like to work for and see what language they use
- Ruby is best for web development and startups
- Python is the most flexible, you can program on desktop and the web
- PHP is best if you want to start your own thing or build something quickly
- Java is good if you want to work in a large company or want to build Android apps

### PHP, Ruby, Python

How to start learning each language

1. **Ruby**
   - Get familiar with the syntax and how it works
   - Start with Codecademy
   - Check out the Ruby community
   - tryruby.org, rubymonk.com, codewars.com
   - Online courses: OneMonth, Treehouse
   - Get familiar with Rails
2. **Python**
   - Google has an online course for it
   - Codecademy, Coursera
   - Learn a framework ( examples: Django, Scrapy)
3. **PHP**
   - Make sure you learn the most recent version
   - You have to know basic HTML and CSS
   - Codecademy, Udemy, books
   - Understand how to use PHP in an object oriented way (OOP)

### Should I specialize in new technologies?

More advice on how to choose

- The technology is constantly changing
- It doesn't mean that all the current trends will stick on the long term
- **Stick with the stuff that has persisted over time**
- What technology you use has no value to the clients
- If you have a personal preference, choose that one
- Keep up to date with changes in the industry
