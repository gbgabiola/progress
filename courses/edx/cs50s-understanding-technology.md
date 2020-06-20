# [CS50's Understanding Technology](https://www.edx.org/course/cs50s-understanding-technology-harvardx-cs50t)

- [Hardware](#hardware)
- [Internet](#internet)
- [Multimedia](#multimedia)
- [Security](#security)
- [Web Development](#web-development)


## Hardware

### Binary

- computers use the binary number system to represent info
- humans typically use decimal numbers (base 10) 123
  - rightmost column is the 1s column
  - middle, the 10s
  - leftmost, the 100s
  - we get 100 x 1 + 10 x 2 + 1 x 3 = 100 + 20 + 3 = 123
- binary (base 2)
  - right most column is the 1s place
  - middle, the 2s
  - leftmost, the 4s
- human (decimal) use powers of 10 for place values
  - 10<sup>0</sup> = 1, 10<sup>1</sup> = 10, 10<sup>2</sup> = 100, 10<sup>3</sup> = 1000, etc.
- computer (binary) use powers of 2 for place values
  - 2<sup>0</sup> = 1, 2<sup>1</sup> = 2, 2<sup>2</sup> = 4, 2<sup>3</sup> = 8, etc.
- difference between decimal and binary is changing the base
- binary number 000 has 4 x 0 + 2 x 0 + 1 x 0 = 0 + 0 + 0 = 0!
- even though computers only use binary, they do it with a smaller vocabulary, with just 1 and 0
- this is because it's easier to represent two states in the physical world like ligh bulb
  - 0 is off
  - 1 is on
- light bulbs just need electricity to turn on or off
- electricity is sufficient to turn a switch on or off
- inside a computer these switches exists called transistors
  - modern computers have billions
- using transistors we can store values, data, compute, and do everything we can with computers
- so far all that we can represent is numbers
  - a decision needs to be made on what pattern of 1s and 0s to represent letters, words, and paragraphs
  - to represent letters, we need a mapping of 0s and 1s to characters
    - ASCII (American Standard Code for Information Interchange) does this
    - 65 -> A, 66 -> B, 67 -> C, etc.
    - 97 -> a, 98 -> b, 99 -> c, etc.
    - ASCII also has mapping for punctuation symbols
  - programs like notepad, textedit, and MicroSoft Word decide weather to display patterns of bits as letters or words
  - ASCII is limited
    - original ASCII is 7 bits, thus giving 128 characters
    - extended ASCII is 8 bits, yielding 256 characters
    - many symbols are not represented
  - UNICODE is a bigger set of characters that includes written languages other than English and even emoji
    - all are still represented by a pattern of bits
- 16 bits or 2 bytes (1 byte = 8 bits)

### CPU

- if you have heard that your computer has "Intel Inside", it has an Intel processor in it
  - the backside of the processor has pins that connect into the motherboard
  - motherboard is a circuit board made of silicon
- CPU is the brain of the computer
  - does all the thinking
  - performs computation
  - helps display numbers on a screen
  - adds or deletes numbers
- CPUs now can have multiple cores
  - cores are the devices inside the CPU that can perform mathematical operations, load info from memory, save info to memory, etc.
  - the more cores, the more tasks a CPU can do at once
- CPUs now also support hyper-threading
  - where a single core will present itself as multiple cores to a computer's operating system
- Systems on a Chip (SoaC) are when a CPU and more are all interconnected at once rather than attached to a motherboard
  - popular in phones, tables, and game consoles
  - Raspberry Pi

### RAM (Random Access Memory)

- circuit board with chips that slides into a slot on the motherboard
- the chips store data
  - only stores data when power is on (volatile)
- files and programs are loaded onto these chips when ran
- fast memory
- check RAM and other specs on Windows Task Manager:
  - CPU chart shows when peak usage occurs
  - GHz is the number of operations a CPU can perform per second (in billions)
    - 2.05 GHz = 2.05 billion operations per second
  - logical processors in this case is 4, which means both cores support hyper-threading
    - each core will do two things at once as if 4 cores exist

### Hard Drives

- when you turn a computer off, you need a place to store data (non-volatile)
- hard disk drive (HDD) stores this information
- RAM may store 1 GB, 2 GB, 4 GB, through 16 GB or so
- HDD stores 256 GB, 1024 GB (AKA terabyte or TB), 2 TB
- inside a HDD, metal platters physically spin around
  - data is stored on these disks
  - reading heads move back and forth reading data from the device
  - uses tiny magnetic particles where north pole orientation represents 1 and south pole orientation represents 0
    - power is only needed to read or change the data
    - data is preserved when power is off
- RAM sends data and instructions to the HDD to store data
- hard drive translates that data into voltage fluctuations
  - some signals spin the platters, others move the read/write heads
  - pulses sent to the read/write head turn on a magnet which creates a field that changes the polarity of a tiny portion of the metal platter's surface
  - power is sent in different directions as to change polarity
- to read, the particles on the disk use their charge to move the read/write head
- pieces of a file can be spread out around the platters
  - a special file keeps track of data's location
- anytime you have a physical device that moves over a period of time, things may go wrong
  - dropping a HDD can corrupt files
- platters spin slower than how fast electrons move

### Flash Memory

- solid-state drive (SSD)
  - smaller (3.5 inch width for HDD vs 2.5 inch width for SSD)
    - still fits where old HDDs are
  - no moving particles
  - inside, it looks a lot like RAM
  - much faster than HDD
    - Programs/files load and save more quickly
  - SSD theoretically don't last as long as HDD
    - finite number of writes
- hybrid drives
  - some GB of solid state memory and more GB or TB of HDD space
  - stores as much of frequently-needed data on the SSD
  - stores less frequently-needed data on HDD
- flash memory also exists in the form of USB sticks
  - might store 1 GB, 16 GB, or more
  - portable
- external SSDs exist for more storage
  - might store 256 GB or more
  - can be used to share data with others without network usage
- can also have external HDD

### Types of Memory and Funneling

There is a tradeoff between space, money, and speed of data transfer

- data is pushed "down the funnel" to your CPU
  - from the hard drive, data first goes to the RAM
  - theoretically, the CPU never has to wait for data to crunch
  - tiny amount of memory (bytes) called registers where numbers are stored for operations
  - memory at the bottom is more expensive
  - disk is important for the long-term storage
  - RAM is important as it stores programs you use simultaneously
  - L3, L2, L1 cache are on the motherboard

As an analogy for memory, picture a candy store.

- a customer approaches the counter and requests candy
- the shop owner then leaves the counter to grab the candy before returning
  - not super efficient to walk all the way to the store room to grab candy
  - better to have a cache of memory
- instead, the shop owner leaves the counter to ready a cache of candy before the customers arrive
- when a customer comes, the candy can be distributed quickly
  - cache memory similarly helps the CPU in this manner

### Display Connectors

- sockets all connect to monitors or displays
- Mini DisplayPort are used form monitors
- HDMI is not only on laptops and computers but also TVs
- VGA is older, but still commonly uses on projectors

### USB (Universal Serial Bus)

- Can plug in a whole range of peripheral devices including printers, keyboards, mice, scanners, etc.
- USB A-Type most common
- USB B-Type is often used for printers and scanners
- USB C-Type is newer and can be plugged in coming from different directions
- other variants often exist for phones
- older USB connections are slower when transferring data
  - external hard drives can connect via USB
    - even if a hard drive is fast, if the USB is slow, the transfer of data will be slow

### Wireless

- Wi-Fi is wireless internet
- Bluetooth allows devices such as wireless keyboards and headphones to connect to your computer
  - limited range (this is ok, as it is used for you to connect to your own devices)

### Operating System (OS)

- software that ensures all devices work and can intercommunicate
- MacOS and Windows are popular OS
- can be installed by the user, but is typically done by a manufacturer
  - installed on HDD or SDD so that it exists persistently without power
- when computer is power on, OS is loaded into RAM from disk
  - gives graphical interface that you can see
  - talk to your keyboard and mouse
  - display info on the screen
  - move things around in memory
- all thanks to device drivers installed with the OS
  - special software designed to talk to certain model of printer, camera, scanner, etc.
- when an OS doesn't recognize a device, perhaps because it's too new, you can download new device drives from the device manufacturer
  - teaches Window, MacOS, or Linux about that new hardware
  - future-proofing structure
- it's this intersection of hardware and software that makes computers powerful


## Internet

### Introduction

- Internet is a very large **network** of **computers** connected to each other.
- we use the internet on a daily basis and have constant access and connectivity
- cable modem, DSL modem, or FIOS device
  - connects to the internet
  - pay monthly for an ISP (Internet Service Provider)
    - Verizon, Comcast, etc.
  - could have built in wireless connectivity for your devices
    - my need an additional home router
    - devices connect to a router via cables or Wi-Fi

### IP

- IP address is a combination of **numbers** that acts like a **unique identifier** for a computer connected to the Internet, e.g., `91.198.174.192`
- every computer on the internet has an IP (Internet Protocol) address
  - of the form #.#.#.#
    - four numbers separated by dots of the values 0-255
    - other IP address formats exist today as well
  - like postal addresses, they uniquely identify computers on the internet
    - any device connected to the internet has an IP address
      - allows other computers to talk to it
- ISPs assign an IP address to your computer (router)
  - used to be physically configured
  - DHCP (Dynamic Host Configuration Protocol)
    - software that ISPs provides to allow your computer to request an IP address
    - DHCP servers respond with a specific IP address for your Home
  - multiple devices can connect to your home network
    - home router supports DHCP and assigns IP addresses to your devices

### DNS

- we access websites using domain names (facebook.com, google.com, etc.), but it turns out that these sites too have IP addresses
- DNS (Domain Name System) servers convert domain names into IP addresses
- difference with IP addresses is that domains are easier to read for humans

### Packets

- computers communicate by sending packets, which are like virtual envelopes sent between computers
  - still 0s and 1s
- analogy: suppose we want to find a cat image on the internet
- so, we send a request to a server, say Google, like "get cat.jpg"
  - place this request in an envelope
- on the envelope, we list out IP as the return address
- however, for the recipient of the request, we don't know the IP address for Google
  - have to rely on DNS
  - send a request to our ISPs DNS server for Google's IP address
    - if the ISP's DNS server doesn't know a website's IP address, it has been configured to ask another DNS server
    - there exist root servers that know where to look to for an IP address if it exists
- after sending the request off, we'll get a response ms later
- the cat will be sent back in one or more packets
  - If the cat image is too large for a single envelope, sending it in one packet could take up internet traffic
  - to solve this, Google will divide the cat image into smaller fragments
    - put the fragments into different envelopes
    - write information on the envelopes
      - return address: Google's IP address
      - delivery address: our IP address
      - list the number of packets on each envelope (1 of 4, 2 of 4, etc.)

### TCP/IP

- IP goes beyond addresses
  - set of conventions computers and servers follow to allow intercommunication
- fragmentation like in the envelope example are supported by IP
  - if missing a packet, you can logically infer which packet you're missing based on the ones received
  - however, IP doesn't tell computers what to do in this case
- TCP (Transmission Control Protocol) ensures packets can get to their destination
  - commonly used with IP (TCP/IP)
  - supports sequence numbers that help data get to its destination
    - when missing a packet, a computer can make a request for the missing packet
    - the computer will put packets together to get a whole file
  - also includes conventions for requesting services (port identifiers)
    - to make sure Google knows we're requesting a webpage and not an email or other service

### Ports

- per TCP, the world has standardized numbers that represent different services
- if 5.6.7.8 is Google's IP address, 5.6.7.8:80 (port 80) lets use know that we want a webpage
  - 80 means http (hypertext transfer protocol)
    - the language that web servers speak
  - Google will send the request to their web server via http
- many websites use secure connections with SSL or HTTPS, which uses the port 443
- email uses port 25
- other ports exist as well

### Protocols

- protocols are just sets of rules like a language, in which computers communicate with each other
  - humans use these all the time, such as the protocol for meeting people: handshakes
- when a request is made to Google for an image, HTTP tells Google how to respond appropriately

### UDP

- UPD (User Datagram Protocol)
  - doesn't guarantee delivery
  - used for video conferencing such as FaceTime
    - packets can be dropped for the sake of keeping the conversation flowing
  - used anytime you want to keep data coming without waiting for a buffer to fill

### IPs in More Detail

- IP addresses are limited
  - in the format #.#.#.#, each number is 8 bits, so 32 bits total
    - yields 2<sup>32</sup> or about 4 billion possible addresses
      - we're running out of addresses for all computers
  - current version of addresses is IPv4
  - moving towards IPv6
    - uses 128 bits, yielding 2<sup>128</sup> possible addresses
- private addresses exist
  - 10.#.#.#, 192.168.#.#, or 172.16.#.#
  - only with special configuration can someone talk to your computer
  - personal device is not a server, so people should not need to access them directly
    - your device needs to request data from servers
  - even email is stored on a server such as Gmail and your device makes a request to that server to access that email
- in advanced settings
  - subnet mask is used to decide if another computer is on the same network
  - router (aka Gateway) has its own address
    - routes data in different directions
  - shows DNS servers as well

### Routers

- routers have bunches if wires coming and going out of them
  - they have a big table with IP addresses and where data should be routed to get to that destination
    - often, the data is routed to some next router
- routers purpose is to send data in the direction of a destination
  - the next router will send it to another until it reaches a destination
- internet is a network of networks (with their own routers)
  - often multiple ways to go from A to B
    - based in US Military logic to prevent downtime if a particular router goes down
    - when multiple packets are sent, like cat.jpg from Google, they may each take a different path, still getting to their destination eventually
      - sometimes the internet is busy and the quickest path changes

### Traceroute

- how long does it take for this process of data transfer to take on the internet?
- traceroute is a program that sends packets to each router on a path to a destination, reporting the time it takes to reach that router
- from Sanders Theatre to Google.com:
  - 1-2: few unnamed routers at Harvard
  - 3-4: more Harvard routers
  - 5-6: Level3 is a ISP
  - 7+: routers are denying the request
- from Sanders Theatre to berkeley.edu
  - 6: Northern Crossroads
  - 7-14: above fast connection
    - 8-9: Chicago
    - 10-11: Denver
    - 12-13: Las Vegas
    - 14: Los Angeles
  - 19 is where it arrives at Berkeley in 80 ms!
- from Sanders Theatre to mit.edu
  - 6-7: goes to New York connectivity
  - 8: MIT's website is outsourced to Akamai's NYC servers
- from Sanders Theatre to CNN.jp
  - 9-10 jumps from Seattle to Osaka past an ocean
    - using undersea cabling

### Cable Modem

- coaxial cable to plug into the wall
- phone jacks (RJ11) as many services are bundled together these days
- four jacks for ethernet cables (RJ45)
  - devices can plug into these for internet connectivity
- modem has wifi support built in

### Network Switch

- switch is a device that you can plug into your router to allow more connections for all your other devices

### Home Router

- home routers can have wifi, firewall, and switching capabilities

### Network Cable

- inside a network cable are 8 wires of different colors
  - some are for transmitting data, others for receiving data
  - others still are for insulation and cancellation of interference

### Closing Thoughts and Homework

- homework: find a device that looks like a modem or router and take a look at the connectors on the back of it
  - if brave, play around with unplugging cables
    - **Note**: Your internet may go down in the process, but can be easily restarted with the cables properly reconnected
  - if you have a spare ethernet cable, take a look inside yourself
    - these are a bit harder to put back together!


## Multimedia

### Audio

- computers are good at recording, playing back, and generating audio
- uses different file formats
  - file formats are just a way of storing 0s and 1s on disk, so that certain software knows how to interpret it
- MIDI
  - way of storing musical notes for certain songs
  - can do this for different instruments
    - programs can render the notes for these instruments
- GarageBand
  - included with macOS
  - Star Wars theme in MIDI
    - doesn't sound quite as good as the actual version
    - computer synthesizes the notes
      - not an actual recording
      - computer interprets notes in the MIDI file
- MIDI is common in the digital workspace among musicians who wish to share music with each other
- humans typically like to hear music performed and recorded by humans
  - file formats for recorded music include:
    - AAC
    - MIDI
    - MP3
    - WAV
- WAV is an early sound format, but still used
  - uncompressed data storage allowing high quality
- MP3
  - file format for audio that uses compression
    - significantly reduce how many bits are necessary to store a song
    - discards 0s and 1s that humans can't necessarily hear
      - true audiophiles may disagree
    - trade off between optimizing storage space and sacrificing quality
    - compression is said to be lossy
      - losing the quality in the compression process
- AAC
  - similar to MP3
  - may see when you download a song from iTunes
- streaming services such as Spotify don't transfer a file to you but rather stream bits of information to you
- how do we think about the quality of these formats?
  - sampling frequency
    - number of times per seconds we take a digital snapshot of what a person would hear
  - bit depth
    - number of bits used for these individual snapshots
  - sampling frequency x bit depth = number of bits necessary to store one second of music
  - audio file formats allow you to modify what these parameters are

### Graphics

- graphics, what we see with multimedia, is really just a bunch of pixels both horizontal and vertical
  - all file formats are rectangular in nature, though transparent pixels can make images look to take on other shapes
  - in the simplest form, each of the dots or pixels is a bunch of 0s and 1s
  - to create a file format, we just need to determine a mapping
- image is only black and white, so how to represent color?

### RGB

- RGB stands for Red Green Blue
  - with information giving an amount of red, an amount of green, and an amount of blue, you can tell a computer how to colorize pixels
  - none of the colors yields a black pixel
  - all of the colors yields a white pixel
  - in between these two options is where we get all sorts of colors
- consider the 3 bytes: 11111111 00000000 00000000
  - if we interpret these bytes to represent colors, it appears we want all of the red, none of the green, and none of the blue
  - these 24 bits (3 bytes = 3 x 8 bits = 24 bits) represent the color we know as red
    - if a computer wanted to represent this color, it would store these 24 bits
- consider the 3 bytes: 00000000 11111111 00000000
  - green
- consider the 3 bytes: 00000000 0000000 11111111
  - blue
- consider the 3 bytes: 00000000 0000000 0000000
  - black
- consider the 3 bytes: 11111111 11111111 11111111
  - white
- can get many color variations by mixing the above colors in different quantities
- when we talk about image formats, we typically don't talk in terms of binary but rather something called hexadecimal (base-16, contains 16 digits)
  - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
  - 0 is the smallest number we can represent in single digit
  - f is the largest number (value of 15) we can represent in a single digit
- consider the 8 bits: 1111 1111
  - each hexadecimal digit represents four bits
  - one hexadecimal digit can represent the first four bits, another can represent the second four
    - represent something with eight symbols using only two!
  - 1111 is the decimal number 15, which is f
  - Therefore, 1111 1111 in hexadecimal is ff
- red can thus be represented in hexadecimal as ff 00 00
- green can be represented in hexadecimal as 00 ff 00
- blue can be represented in hexadecimal as 00 00 ff
- a lot of graphical editing software such as Photoshop use hexadecimal to represent colors

### Bitmap Format

- Windows XP background was a bitmap file (.bmp)
  - a map or grid of bits much like the smiley face
- zooming in on the image show that it is just a grid of dots
  - pixelation will be notice
- much like with audio, so in the world of images do you have discretion over how many bits to use
  - how many bits to represent each pixel's color?
  - resolution is another factor
    - image that is only 100 pixels scaled up only duplicates the existing limited information, resulting in a blotchy image
    - would be better to start with image that has a higher resolution (more pixels)
- a lot of repeated colors, so it seems silly to represent each color with the same number of bits

### Image Compression

- graphical file formats can often be compressed
- can be done lossy or losslessly
  - with audio, we threw away audio information that the human ear can't necessarily hear
    - this is lossy compression; throwing information away
  - using fewer bits to represent the same information is lossless compression
- there is a lot of repeated blue in the Windows image
  - using the same 24 bits to represent each pixel
- the apple image is compressed and not what a user would see
  - the first column contains the color that the rest of the row (scan line) should have
    - image contains instructions on how to repeat the color in a particular row
  - when a color is encountered that isn't in the first column, the instructions would list the colors for each non-repeated pixel
  - this uses less bits but makes the original information recoverable
- lossy compression  
- sunflower image is a .jpg photograph that is somewhat compressed, but not easy to tell
- let's say we want to compress this image further so that we can share it without going over a social media platform's limit
- it contains more complicated patterns of colors, so when we try a lossy compression it will become very pixelated
- lossy compression means that you won't be able to get that original image back
  - compression throws away bits of information
    - "Does the sky really need this many shades of blue?"
    - "Does this leaf really need this many shades of green"
      - replaces bits with only a few colors giving an approximation
      - you will not be able to know how clear the sky used to be from this information

### Image File Formats

- BMP
  - originally used in Windows
  - not super common these days
- GIF
  - low quality images
    - only supports 8-bit color
  - often used for memes
    - can be animated
    - like a video file with only a few images 
- JPEG
  - supports 24-bit color
  - losslessly compresses
    - can minimize amount of compression to create high quality photos
- PNG
  - high quality graphics
  - supports 24-bit color
- all these formats ultimately have an limited amount of information
  - ultimate just store pixels and colors of when the image was taken

### "Enhance"

- common for popular culture abuses of what it means to be a multimedia format
  - "Enhancing" means to make an image as clear as possible no matter what format it was saved in
- David shows a clip of characters "enhancing" an image
  - the characters zoom into a pixelated frame of a video and somehow clear it up to see a reflection
    - video is just a whole bunch of images being shown to us quickly (24 frames per second, etc.)
  - the pixelated image only contains information for those pixels
    - there is no way to obtain a clear image unless the original image was already at a high resolution
- David contrasts this with an aware clip of Futurama

### Video Compression

- think of a video format as similar to a flip book
- video formats are just a bunch of images shown quickly in succession to create the illusion of motion
  - not necessarily all information stored as png, jpg, gif, or even images
  - algorithms and mathematics can help go from one frame to another
- opportunities for compression
  - can leverage same image compression techniques for each frame (intra-frame coding)
  - background of multiple frames can contain redundant information
- compare current frame and next frame of video and determine what has changed
  - store these differences
  - key frames store a snapshot of time to remember what the video looks like
  - in each subsequent frame remember what has changed
    - using algorithms and math, background is drawn
  - key frames are stored multiple times to guarantee that frames can be recovered

### Video File Formats

- in the world of video, there are more solutions on how to store information
- video file formats are containers
  - containers are digital container in which you can put multiple types of data
  - can include a video track, audio track, a secondary audio track (for different languages), closed captions, …
- AVI
  - commonly used in Windows
- DivX
- Matroska
  - open source container meant to be more versatile
- MP4
  - pretty much universal in all browsers
- QuickTime
  - commonly used in MacOS
- Codecs
  - ways of storing and encoding information
  - for video:
    - H.264
    - MPEG-4 Part-2
    - ...
  - for audio:
    - can be stand alone files or tracks in a container
    - AAC
    - MP3
    - ...

### 3D Video

- increasingly, 3D formats are becoming more common
  - 360 degree image of Sanders Theatre
    - a spherical image
    - looks distorted in 2D
    - like flattening a globe
- images can contain metadata
  - information that viewers can't see
  - tells programs, applications, and browsers how to display the image
- with sensors on a headset, users can experience virtual reality 
- more file formats are still on the horizon, but ultimately all of them boil down to storing 0s and 1s and why


## Security

### Introduction

Our data is under constant threat, but how can we defend ourselves?

### Privacy

- keeping people away from things you don't want them to see
- computers are among the lease secure devices you own
  - data or files are stored on them as 0s and 1s
    - can be financial info, photos, etc.

### Deleting Files

- what does it mean to delete a file off of a hard drive?
  - visually, it disappears from a desktop or folder
- files are stored on a computer as 0s and 1s
- some space needs to be allocated for the file
- operating system has a file that keeps track of files an their location on disk
- graphically, when a file is deleted, it moves to the trash (recycle bin)
  - it can still be easily revived from here, until you empty the trash
- however, an operating system doesn't actually delete it from the hard drive
  - it simply forgets the location and existence of the file
  - one can theoretically recover data by looking for familiar patterns of bits
- how do we delete more securely?
  - re-saving a file with overridden information actually could not override the old bits but rather create more 0s and 1s stored on a hard drive
  - special software can wipe data off of a hard drive
- who do computers have this obvious flaw with deleting?
  - what if we accidentally delete a file?
    - this structure allows for recovery
  - wiping data also takes a lot of time, so it's much faster to just forget locations of data

### Cookies

- feature supported by HTTP
- little values a web server puts on a user's browser
- used to remember if a user has visited a website before
  - allows you to not have to log in every time you visit or refresh a page
    - when you log into a web server, a cookie is planted on your browser
  - stored in a database
  - browser will send value to web server to remind of previous login
- when we make a request we send:
  ```sh
  GET / HTTP/1.1
  Host: example.com
  ```
- we receive:
  ```sh
  HTTP/1.1 200 OK
  Set-Cookie: session=29823bf3-075a-433a-8754-707d05c418ab
  ```
  - server gives us a cookie, a key-value pair (aka Session)
- a cookie is like an ink-based hand stamp for an amusement park or club
- wireless information can be intercepted
  - what if a hacker could obtain the cookie
    - session hijacking attack
    - if you have already logged in, hacker can pretend to be you
- encryption scrambles this value so hackers cannot easily use it
- browser history remembers everywhere you've been and everything you've done there
  - convenient if you want to recall a website you've visited
    - but, so can anyone else with access to your browser
- can clear browser history and cookies
  - history likely not securely scrubbed
  - will protect you from nosey friends
  - websites will forget you visited as the cookies will be deleted as well

### Incognito Mode

- can open up a typically different colored browser window
- use if you want history automatically removed
- useful when building a website as sometimes you want a browser to forget old iterations of your website build

### Authentication

- all of this assumes you log in
- if you don't use a passcode to protect your device, anyone can pretend to be you
  - what if you lose your phone or device?

### Passwords

- on a phone could only be a few digits
  - not super secure
  - __ __ __ __
    - with numbers, each space has 10 options
    - 10 x 10 x 10 x 10 = 10,000 possibilities
    - 0000-9999
- on many smartphones, you will have to wait for an amount of time if you have entered a bad passcode
  - slows down the process of someone guessing
- add more digits or letters of the alphabet
- using a-z, A-Z, 0-9
- __ __ __ __
- each space now has 62 options (26 + 26 + 10)
- 62 x 62 x 62 x 62 = 14,776,336 possibilities
- maybe you're super secure and you have a 20-char password
  - you could forget it
  - annoying to type in repetitively
- no one fits all
  - short = bad, longer = good
  - don't use popular words and phrases
    - hackers will look for words or common phrases
- most common Passwords
  1. 123456
  2. 123456789
  3. qwerty
  4. 12345678
  5. 111111
  6. 1234567890
  7. 1234567
  8. password
  9. 123123
  10. 987654321
- hackers have dictionaries of bad passwords that they can search through and try
- random passwords
  - usually have to confirm so it can be hard to replicate
- using numbers to represent letter is common
  - 1 for l
  - 4 for A
- it's suggested you mix uppercase, lowercase, and and throw in numbers
  - good to use misspellings
- don't put your post-it with your password on your monitor
- constant password changes can be a net negative
  - can encourage easier passwords to help with memorization

### Password Resetting

- what if you forget your password?
  - often can click on a link to reset your password
    - asks you to type email address or username
  - typically, you get an email with a link
    - hopefully this goes back to the same website
    - it likely has a random value in the URL
  - once back at the website, you update your password
- the website has a database
  - it generated a random number and stored it with a note indicating password recovery
  - the website assumes that anyone who has access to this value and to the user's email is you
- typically, tech staff can't tell you what your password is
  - odds are your password is encrypted (scrambled) or, more technically, hashed in their database
- getting a password in email means that the password are not hashed or encrypted
  - also, sending a password over email opens that email to interception
  - this is a red flag if a website does this

### Using The Same Password

- you may have a favorite password that you reuse
  - upside is that it's convenient
- however, what if one of the websites are hacked?
  - a hacker may try to use the password on other websites to see what she or he can get into

### Password Managers

- difficult to remember all these passwords
- software called password managers exist that store on your phone or hard drive all usernames and passwords in an encrypted way
  - you have a master password that logs you into everywhere!
    - store it physically in somewhere like a safety deposit box
- password managers create long random passwords and will log in for you
  - all websites have different passwords
- however, if you lose the master password, you cannot get the accounts back

### Two Factor Authentication

- First factor is a password
  - Historically, something "only" the user knows
  - Can be guessed
- Second factor should be fundamentally different
  - Should be something you have
    - An RSA device displays a unique value that is synced with a server  
      <img src="https://cs50.harvard.edu/technology/notes/security/assets/rsa.png" alt="RSA" width="400px">  
      - This number needs to be typed in too!
      - As long as this device isn't stolen by someone with your password, they can't get in as easily
    - Phones now run software that allows you to get a code and type them in
- Should think about what websites you care about the most and enable two factor authentication
  - Some companies can use sms (text messages)

### Network security

- So many of our current networks are wireless
  - You probably been conditioned to look for free wifi
    - Sometimes still might not connect for various reasons
- If the wireless connection has not padlock (no password to log in) the connection is not secure
  - You may still visit https or secure websites
  - However, everything you do on http sites can be seen
- What to do?
  - Don't use that network
  - Use a VPN (Virtual Private Network)
    - Connection to internet is encrypted
      - With an unsecured connection, anyone can access your data

### VPN

- First establish encrypted connection to a server and let this server communicate for you
  - The connection between the VPN server and website can still be insecure!
- Because we are encrypting data through an algorithm, using a VPN can slow down speed

### Firewall

- A physical firewall is a wall between connected buildings that prevents the spread of fire
- In the world of computer science, a firewall is software that looks at IP addresses and helps keep bad guys out and user data inside
- Helps prevent people from accessing your computer

### Encryption

- Suppose I want to send a secret message for "HI"
  - HI ➟ IJ
  - Change each letter by 1
  - The recipient needs to know how it changed to revert
- Plaintext ➟ Cyphertext ➟ Plaintext
  - HI ➟ IJ ➟ HI
- This is called a caesar cypher
  - Rotational cyphers are not that secure
    - Can be guessed easily
    - Not used for internet encryption
  - For this to work, recipient needs the key
    - To know the key, we need to agree in advance
      - Can't send it encrypted as well as they need the key!

### Public Key Cryptography

- The last example with a caesar cypher is secret-key cryptography
  - Only one key
- In public key cryptography there are two keys, one public and one private
  - Mathematical relationship between them
  - Use public key to encrypt, private key to decrypt  
    <img src="https://cs50.harvard.edu/technology/notes/security/assets/alicebob.png" alt="Alice and Bob" width="400px">  
  - Bob's private key can undo the effects of his public key
  - When Bob responds...  
    <img src="https://cs50.harvard.edu/technology/notes/security/assets/bob.png" alt="Bob Response" width="400px">  
  - Bob sends a message using Alice's public key
- Your browser has its own public and private keys
  - So does websites like Google and Amazon
    - This allows them to communicate securely with you
- Often this processes is used to exchange a secret key

### Phishing

- Phishing attacks are when an adversary sends a somewhat official-looking email
  - May contain a link asking for a password or account info
  - The email may contain an elaborate backstory "justifying" the request
  - The malicious email is trying to obtain information from you
- Odds are that the link provided doesn't go to the website being claimed
  - Can go to a website that looks legit
    - People can just copy HTML
- Results in giving up private information
- It's healthy to distrust most email you get
  - Don't follow links, type in the address for the company yourself
  - Sketchy emails may have typographical errors

### Malware

- Malicious software can also be sent via email
- Windows is particularly vulnerable
- Software can be injected into your browser and your computer to erase your hard drive, make your computer send spam, or hold your data hostage
- Some malware encrypts your data and asks for large sums of money to get the key to decrypt it
  - Key could not even work!
  - This is called ransomware
- Malware can ultimately do anything on your computer

### Trust

- At the end of the day, all of security and privacy boils down to trust
  - People around you
  - Algorithms/software
  - Manufacturers
- We've downloaded software with trust that it will only do what it claims
  - Word could log your key strokes
  - Chrome could monitor you even when not on Google's website
  - Snapchat could not delete posts after being seen
- There have been cases where software was written to cover tracks of being monitored!
- Who's to say the software we're using is actually doing what we say?
- It's east to curl up into a ball and worry, but we need to decide who to trust
- Security measures make it more difficult for someone to be malicious, but ultimately they can't guarantee privacy
- You have to decide what data you're comfortable with storing, what you view on the internet, who to trust, and how much to trust them


## Web Development

### Internet

- All the computers on the internet are interconnected that supports HTTP and TCP/IP
- The internet is an infrastructure to get data from a server to a client
  - Supports emails, video conferencing, etc.
- The web is one specific application or service that runs atop the internet
  - Assumes an internet exists to get data from point A to point B
    - Layers functionality that allows us to click, browse, etc.

### Web Browser

- Web browsers are found on phones, computers, and game consoles
- They have a space to enter a URL (Uniform Resource Locator)
  - Prefixed by `http://` or `https://`
- When typing in a URL, you're sending a request from your device to some remote server
  - The server looks at your request and figures out how to respond
  - Like when we previous requested cat images!

### Web Server

- A computer that has CPU, RAM, and a hard drive
- Rack servers
  - Sized so they can be stacked
- Odds are your company has many of these if they have a web server

### HTTP

- We send requests to web servers
  - Language of these requests is HTTP (Hypertext Transfer Protocol)
- Request: `GET /cat.jpg HTTP/1.1`
  - `1.1` refers to HTTP language 1.1
- Response by the server: `HTTP/1.1 200 OK`
  - This literally means that everything was okay with the request

### HTTP Status Codes

| Code  |         Status         | Meaning                                                                          |
| :---: | :--------------------: | :------------------------------------------------------------------------------- |
|  200  |           OK           | Everything is OK                                                                 |
|  301  |   Moved Permanently    | Browser should redirect to new location                                          |
|  302  |         Found          | Browser should redirect to new location                                          |
|  304  |      Not Modified      | Browser will cache files if things don't change to save time/bytes from requests |
|  401  |      Unauthorized      | Not authorized to view content; Could require login                              |
|  403  |       Forbidden        | Not able to view content                                                         |
|  404  |       Not Found        | The requested data could not be found because it doesn't exist on the server     |
|  500  | Internal Service Error | Not your fault; The server erred                                                 |

### HTML

- In addition to the HTTP headers that include status codes, the bits representing an image or website will be sent to you
- The language that builds websites is HTML (Hypertext Markup Language)
  - Sent as a response for a request for a web page
- HTML isn't a programming language but rather a markup language
  - Allows you to format, but doesn't have control flow such as loops and conditions
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>hello, world</title>
      </head>
      <body>
        hello, world
      </body>
    </html>
    ```
    - This is html for a webpage that says "hello, world"
- To implement webpages, you need to write HTML
  - Editors like Atom and Sublime Text exist to help write HTML
    - Ultimately, all you need is a computer, a keyboard, and some way of typing out text!
- `<!DOCTYPE html>`
  - Lets the browser know the following file is written in HTML 5
- `<html lang="en">`
  - Specifies that the webpage is written in English
- `<head></head>`
  - Example of open and close tags
- First tag opened is the last tag closed
  - HTML is a tag-based markup language
    - Tags have attributes
- Standard extension for a webpage is .html
- David clicks the hello.html file and loads the page
  - In the top corner of the browser tab is the title
    - This comes from the `head`
  - The `body` contains 99% of the webpage's content
  - This page is a local document, so the address is where David saved it
    - Not on a web server, so no one else can access it
- There are web hosts to serve up websites we write
  - We can also buy our own domain name

### Atom

- TextEdit is not designed for web page development
- Free alternatives made for web development exist
- Atom is an example of editors
- In Atom, you can open multiple files at once
- Colors are added for readability and don't effect how the webpage will render
- HTML supports comments
  - To help colleagues who look at your code know your intentions of the code

### Links

- Links can make our pages more dynamic by linking to other pages
  - `<a></a>` are anchor tags that can be used for links
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>link</title>
    </head>
    <body>
      Visit <a href="http://www.harvard.edu/">Harvard</a>.
    </body>
  </html>
  ```
- href (hyper reference) is set to where you want the link to go
- Blue, underlined text traditionally represents a link on a webpage
- The bottom left corner on Chrome shows the destination of a link when you hover over the text
- A link traditionally becomes purple if you've already followed that link
  - Browser remembers where you've been
    - Potential privacy concern

### Images

- The web is filled with images
- `<img/>` is the image tag
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>image</title>
    </head>
    <body>
      <img alt="Grumpy Cat" src="cat.jpg"/>
    </body>
  </html>
  ```
- The `src` (source) attribute is set to the address of the file
- The `alt` (alternative text) attribute is what displays if the page can't be seen
- Closes itself as one tag

### Paragraphs

- Even if you add spaces to format paragraphs, HTML will render without them!
- When looking at your webpage you can "view page source" on your browser to see the original HTML with your spaces, but the webpage still doesn't have these spaces
- The browser will only do what HTML tells it to do
- The browser needs instructions in the form of HTML tags
- Paragraph tags (`<p></p>`) tell the browser to create a paragraph of text

### Headings

- `<h1></h1>` are the heading 1 tags
- There also exists `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, and `<h6></h6>`
- Headings get smaller the larger the number
- These make the font larger for usage similar to marking chapters in a book

### Lists

- Unordered lists
  - Use bullets (like these!)
  - `<ul></ul>`
- `<li></li>` are list item tags
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>unordered list</title>
    </head>
    <body>
      <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ul>
    </body>
  </html>
  ```

- Ordered lists
  - Use numbers
  - `<ol></ol>`
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>ordered list</title>
    </head>
    <body>
      <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ol>
    </body>
  </html>
  ```

### Tables

- `<table></table>` are table tags that create a table
  - `<tr></tr>` are table row tags
  - `<td></td>` are table data tag
    - Like columns or cells
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>table</title>
    </head>
    <body>
      <table>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>*</td>
          <td>0</td>
          <td>#</td>
        </tr>
      </table>
    </body>
  </html>
  ```

### Implementing Google

- When you type google.com your browser adds "https://www." to the beginning of the URL
  - As is needed to surf the web
- `curl` is a command ran in the terminal that behaves much like a browser
  - It sends a request like a browser and shows what html is returned  
    <img src="https://cs50.harvard.edu/technology/notes/web_development/assets/curl1.png" alt="curl1" width="400px">  
    - Capital letter tags are a bit dated
    - Shows google.com is located at http://www.google.com  
      <img src="https://cs50.harvard.edu/technology/notes/web_development/assets/curl2.png" alt="curl2" width="400px">  
    - The `-I` flag tells `curl` to return HTML headers
      - Includes status codes and other info humans normally don't see
    - Google's server has been configured to redirect users to http://www.google.com
    - UTF-8 is unicode characters
  - `curl http://www.google.com` returns a webpage that includes HTML and JavaScript  
    <img src="https://cs50.harvard.edu/technology/notes/web_development/assets/curl3.png" alt="curl3" width="400px">  
- Searching for cats changes the URL to https://www.google.com followed by a large sequence of characters
  - Distilling this URL to https://www.google.com/search?q=cats leads to the same results
    - We can "create" a search engine using this info!

### Forms

- `<form></form>` are form tags that take attributes for an action and a method
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>search</title>
    </head>
    <body>
      <form action="https://www.google.com/search" method="get">
        <input name="q" type="text"/>
        <input type="submit" text="Search"/>
      </form>
    </body>
  </html>
  ```
- `action="https://www.google.com/search"` method="get" means "get me https://www.google.com/search"
- Inside the form, we can have `<input/>` tags
  - These can have name, type, value, and text attributes
- This implementation punts the searching to Google
- The browser uses the HTML form to assemble a URL
  - `https://www.google.com/search?q=cats`
- `?` in the URL means "Hey Server! Here comes my HTTP parameters!"
  - A URL may have multiple parameters separated by `&`

### css0.html

- Let’s make our webpages more pretty
- CSS (Cascading Style Sheets) allows us to style our webpages
  - In contrast, HTML allows us to structure our webpages
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>css0</title>
    </head>
    <body>
      <header style="font-size: large; text-align: center;">
        John Harvard
      </header>
      <main style="font-size: medium; text-align: center;">
        Welcome to my home page!
      </main>
      <footer style="font-size: small; text-align: center;">
        Copyright &%169; John Harvard
      </footer>
    </body>
  </html>
  ```
- Here, inside `body`, we have three tags: `<header></header>`, `<main></main>`, and `<footer></footer>`
  - They include style attributes written in CSS
    - These are written as key-value pairs
    - In CSS, there is a property called `font-size`
      - CSS supports `small`, `medium`, `large`, and exact sizes such as `16px`
    - `text-align: center;` centers the text
- This example has some redundancy

### DOM

- CSS supports the notion of a hierarchy  
  <img src="https://cs50.harvard.edu/technology/notes/web_development/assets/dom.png" alt="DOM" width="400px">  
  - Rectangles here represent HTML tags or elements
  - Ovals represent text values
  - This is called a tree in Computer Science, much like a family tree
- When a browser receives a webpage, it builds a tree-like data structure in your computer’s RAM
- Thus, in this case `header`, `main`, and `footer` are all child nodes of of the parent node `body`

### css1.html

- We can put the `text-align: center;` attribute on the `body` element so it will pass it on to its children (`header`, `main`, and `footer`)
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>css1</title>
    </head>
    <body style="text-align: center;">
      <header style="font-size: large;">
        John Harvard
      </header>
      <main style="font-size: medium;">
        Welcome to my home page!
      </main>
      <footer style="font-size: small;">
        Copyright &%169; John Harvard
      </footer>
    </body>
  </html>
  ```
- This is better design as we can change all the text alignment at once

### css2.html

- Combining HTML and CSS is generally frowned upon
- Makes it hard to collaborate
  - One person can work on content (HTML)
  - The other on style (CSS)

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        .centered {
          text-align: center;
        }

        .large {
          font-size: large;
        }

        .medium {
          font-size: medium;
        }

        .small {
          font-size: small;
        }
      </style>
      <title>css2</title>
    </head>
    <body class="centered">
      <header class="large">
        John Harvard
      </header>
      <main class="medium">
        Welcome to my home page!
      </main>
      <footer class="small">
        Copyright &%169; John Harvard
      </footer>
    </body>
  </html>
  ```
  - `<style>` can be a tag as well as an attribute
  - `.centered` defines a class named `centered`
    - Anything with this class with have the style attribute `text-align: center;`

### css3.html

- We can even get rid of class attributes to further separate style from content
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
          body {
            text-align: center;
          }

          header {
            font-size: large;
          }

          main {
            font-size: medium;
          }

          footer {
            font-size: small;
          }
      </style>
      <title>css3</title>
    </head>
    <body>
      <header>
        John Harvard
      </header>
      <main>
        Welcome to my home page!
      </main>
      <footer>
        Copyright &%169; John Harvard
      </footer>
    </body>
  </html>
  ```
- We can also give the tags CSS directly
- Will look identical, but better design

### css4.html

- What if we remove the style altogether and store it elsewhere?
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <link href="css4.css" rel="stylesheet"/>
      <title>css4</title>
    </head>
    <body>
      <header>
        John Harvard
      </header>
      <main>
        Welcome to my home page!
      </main>
      <footer>
        Copyright &%169; John Harvard
      </footer>
    </body>
  </html>
  ```
- We have boiled the html down to its essence
  - No usage of style tags
- Note the `<link/>` tag with a `href` attribute of `css4.css` and a `rel` (relationship) attribute of `stylesheet`
  - This says "Hey Browser! Please link my stylesheet css4.css to this page!"
- In the same directory, we will have this stylesheet
  ```css
  body {
    text-align: center;
  }

  header {
    font-size: large;
  }

  main {
    font-size: medium;
  }

  footer {
    font-size: small;
  }
  ```
- We have factored out the style to its own file
  - Easier for collaboration and sharing
  - Can use on multiple html pages
  - Can create different themes

### Closing Thoughts

- Web development is about writing code
  - Specifically, HTML, which builds the structure of a webpage
  - CSS allows us to fine tune the webpage’s aesthetics
- You can use these building blocks to further learn about web development on your own!
- The underlying concepts are more important than details
  - A webpage is nothing more than a text file written in HTML, CSS, and maybe some JavaScript
    - This file can be uploaded to a server to put on the internet
      - You can sign up for a web host with data centers
      - All your files will go in a folder on the server so that the webpage can be accessed on the internet
    - You can also buy a domain name and configure it to point to the web host
- These building blocks are what allow you to put your content on the internet!

<!-- ## Programming -->
