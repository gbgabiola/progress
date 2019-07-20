# [CS50's Understanding Technology](https://www.edx.org/course/cs50s-understanding-technology-harvardx-cs50t)

## Hardware
### Binary
- Computers use the binary number system to represent info
- We humans typically use decimal numbers (base 10) 123
  - The rightmost column is the 1s column
  - The middle, the 10s
  - The leftmost, the 100s
  - So we get 100 x 1 + 10 x 2 + 1 x 3 = 100 + 20 + 3 = 123

| 100 | 10 | 1 |
| --- | -- | - |
| 1   | 2  | 3 |

- In binary (base 2)
  - The right most column is the 1s place
  - The middle, the 2s
  - The leftmost, the 4s

| 4 | 2 | 1 |
| - | - | - |
| 0 | 0 | 0 |

- In the human world (decimal) we use powers of 10 for place values
  - 10<sup>0</sup> = 1, 10<sup>1</sup> = 10, 10<sup>2</sup> = 100, 10<sup>3</sup> = 1000, etc.
- In the computer world (binary) we use powers of 2 for place values
  - 2<sup>0</sup> = 1, 2<sup>1</sup> = 2, 2<sup>2</sup> = 4, 2<sup>3</sup> = 8, etc.
- The difference between decimal numbers and binary numbers is changing the base
- For the binary number 000, we have 4 x 0 + 2 x 0 + 1 x 0 = 0 + 0 + 0 = 0!
- Even though computers only use binary, they do it with a smaller vocabulary, with just 1 and 0.
- This is because it's easier to represent two states in the physical world like ligh bulb
  - 0 is off
  - 1 is on
- Light bulbs just need electricity to turn on or off
- Electricity is sufficient to turn a switch on or off
- Inside a computer exists these switches called transistors
  - Modern computers have billions!
  - Turned off represents 0
  - Turned on represents 1
- Using these transistors we can store values, store data, compute, and do everything we can with computers
- So far all that we can represent is numbers
  - A decision needs to be made on what pattern of 1s and 0s to represent letters, words, and paragraphs
  - To represent letters, we need a mapping of 0s and 1s to characters
    - ASCII (American Standard Code for Information Interchange) does this
    - 65 -> A, 66 -> B, 67 -> C, etc.
    - 97 -> a, 98 -> b, 99 -> c, etc.
    - ASCII also has mapping for punctuation symbols
  - Programs like notepad, textedit, and MicroSoft Word decide weather to display patterns of bits as letters or words
  - ASCII is limited
    - Original ASCII is 7 bits, thus giving 128 characters
    - Extended ASCII is 8 bits, yielding 256 characters
    - Many symbols are not represented
  - UNICODE is a bigger set of characters that includes written languages other than English and even emoji!
    - All are still represented by a pattern of bits
- 16 bits or 2 bytes (1 byte = 8 bits)

### CPU
- If you have heard that your computer has "Intel Inside", it has an Intel processor in it
  - The backside of the processor has pins that connect into the motherboard
  - The motherboard is a circuit board made of silicon
- The CPU is the brain of the computer
  - Does all the thinking
  - Performs math in numbers fed to it
  - Helps display numbers on a screen
  - Adds or deletes numbers
- CPUs now can have multiple cores
  - Cores are the devices inside the CPU that can perform mathematical operations, load info from memory, save info to memory, etc.
  - The more cores, the more tasks a CPU can do at once
- CPUs now also support hyper-threading
  - Where a single core will present itself as multiple cores to a computer's operating system
- Systems on a Chip (SoaC) are when a CPU and more are all interconnected at once rather than attached to a motherboard
  - Popular in phones, tables, and game consoles
  - Raspberry Pi

### RAM (Random Access Memory)
Circuit board with chips that slides into a slot on the motherboard
- The chips store data
  - Only stores data when the power is on
- Files and programs are loaded onto these chips when ran
- Fast memory

Check the RAM and other specs on Windows Task Manager:
- CPU chart shows when peak usage occurs
- GHz is the number of operations a CPU can perform per second (in billions)
  - 2.05 GHz = 2.05 billion operations per second
- Logical processors in this case is 4, which means both cores support hyper-threading
  - Each core will do two things at once as if 4 cores exist

### Hard Drives
When you turn a computer off, you need a place to store data
- A hard disk drive (HDD) stores this information
- RAM may store 1 GB, 2 GB, 4 GB, through 16 GB or so
- HDD stores 256 GB, 1024 GB (AKA terabyte or TB), 2 TB
- Inside a HDD, metal platters physically spin around
  - Data is stored on these disks
  - The reading heads move back and forth reading data from the device
  - Uses tiny magnetic particles where north pole orientation represents 1 and south pole orientation represents 0
    - Power is only needed to read or change the data
    - Data is preserved when power is off

To store data in a hard drive, RAM sends data and instructions to the HDD
- The hard drive translates that data into voltage fluctuations
  - Some signals spin the platters, others move the read/write heads
  - Pulses sent to the read/write head turn on a magnet which creates a field that changes the polarity of a tiny portion of the metal platter's surface
  - Power is sent in different directions as to change polarity
- To read, the particles on the disk use their charge to move the read/write head.
- Pieces of a file can be spread out around the platters
  - A special file keeps track of data's location
- Anytime you have a physical device that moves over a period of time, things go wrong
  - Dropping a HDD can corrupt files
- Platters spin slower than how fast electrons move

### Flash Memory
Solid state disk (SSD)
- Smaller (3.5 inch width for HDD vs 2.5 inch width for SSD)
  - Still fits where old HDDs are
- No moving particles
- Inside, it looks a lot like RAM
- Much faster than HDD
  - Programs/files load and save more quickly
- SSD theoretically don't last as long as HDD
  - Finite number of writes

Hybrid Drives
- Some GB of solid state memory and more GB or TB of HDD space
- Stores as much of frequently-needed data on the SSD
- Stores less frequently-needed data on HDD

Flash memory also exists in the form of USB sticks
- Might store 1 GB, 16 GB, or more
- Portable

External SSDs exist for more storage
- Might store 256 GB or more
- Can be used to share data with others without network usage

Can also have external HDD

### Types of Memory and Funneling
There is a tradeoff between space, money, and speed of data transfer
- Data is pushed "down the funnel" to your CPU
  - From the hard drive, data first goes to the RAM
  - Theoretically, the CPU never has to wait for data to crunch
  - There is a tiny amount of memory (bytes) called registers where numbers are stored for operations.
  - Memory at the bottom is more expensive
  - Disk is important for the long-term storage
  - RAM is important as it stores programs you use simultaneously
  - L3, L2, L1 cache are on the motherboard

As an analogy for memory, picture a candy store
- A customer approaches the counter and requests candy
- The shop owner then leaves the counter to grab the candy before returning moments later
  - Not super efficient to walk all the way to the store room to grab candy
    - Better to have a cache of memory
- Instead, the shop owner leaves the counter to ready a cache of candy before the customers arrive
- When a customer comes, the candy can be distributed quickly
  - Cache memory similarly helps the CPU in this manner

We can see sizes of cache looking at computer specs like before

### Display Connectors
- These sockets all connect to monitors or displays
- Mini DisplayPort are used form monitors
- HDMI is not only on laptops and computers but also TVs
- VGA is older, but still commonly uses on projectors

### USB (Universal Serial Bus)
- Can plug in a whole range of peripheral devices including printers, keyboards, mice, scanners, etc.
- USB-A most common
- USB-B is often used for printers and scanners
- USB-C is newer and can be plugged in coming from different directions
- Other variants often exist for phones
- Older USB connections are slower when transferring data
  - Hard drives can connect via USB
    - Even if a hard drive is fast, if the USB is slow, the transfer of data will be slow

### Wireless
- Wifi is wireless internet
- Bluetooth allows devices such as wireless keyboards and headphones to connect to your computer
  - Limited range (This is ok, as it is used for you to connect to your own device)

### Operating System (OS)
- Software that ensures all devices work and can intercommunicate
- MacOS and Windows are popular OS
- Can be installed by the user, but is typically done so by a manufacturer
  - Installed on HDD or SDD so that it exists persistently without power
- When you hit power on your computer, the OS is loaded into RAM
- Gives you the graphical interface that you see
- Knows how to:
  - Talk to your keyboard and mouse
  - Display info on the screen
  - Move things around in memory
- This is all thanks to device drivers installed with the OS
  - Special software designed to talk to certain model of printer, camera, scanner, etc.
- When an OS doesn't recognize a device, perhaps because it's too new, you can download new device drives from the device manufacturer
  - Teaches Window, MacOS, or Linux about that new hardware
  - Future-proofing structure
- It's this intersection of hardware and software that makes computers powerful!


## Internet
### Introduction
- Internet is a very large **network** of **computers** connected to each other.
- We use the internet on a daily basis and have constant access and connectivity
- Cable modem, DSL modem, or FIOS device
  - Connects to the internet
  - Pay monthly for an ISP (Internet Service Provider)
    - Verizon, Comcast, etc.
  - Could have built in wireless connectivity for your devices
    - May need an additional home router
    - Devices connect to a router via cables or wifi

### IP
- IP address is a combination of **numbers** like `91.198.174.192` which acts like a **unique identifier** for a computer connected to the Internet
- Every computer on the internet has an IP (Internet Protocol) address
  - Of the form #.#.#.#
    - Four numbers separated by dots of the values 0-255
    - Other IP address formats exist today as well
  - Like postal addresses, they uniquely identify computers on the internet
    - Any device connected to the internet has an IP address
      - Allows other computers to talk to it
- ISPs assign a IP address to your computer (router)
  - Used to be physically configured
  - DHCP (Dynamic Host Configuration Protocol)
    - Software that ISPs provides to allow your computer to request an IP address
    - DHCP servers respond with a specific IP address for your Home
  - Multiple devices can connect to your home network
    - The home router supports DHCP and assigns IP addresses to your devices

### DNS
- We access websites using domain names (Facebook.com, Google.com, etc.), but it turns out that these sites too have IP addresses
- DNS (Domain Name System) servers convert domain names into IP addresses
- The difference with IP addresses is that domains are easier to read for humans.

### Packets
- Computers communicate by sending packets, which are like virtual envelopes sent between computers
  - Ultimately still 0s and 1s
- As an analogy, suppose we want to find a cat image on the internet
- So, we send a request to a server, say Google, like "get cat.jpg"
  - We place this request in an envelope
- On the envelope, we list out IP as the return address
- However, for the recipient of the request, we don't know the IP address for Google
  - Have to rely on DNS
  - Send a request to our ISPs DNS server for Google's IP address
    - If the ISP's DNS server doesn't know a website's IP address, it has been configured to ask another DNS server
    - There exist root servers that know where to look to for an IP address if it exists
- After sending the request off, we'll get a response ms later
- The cat will be sent back in one or more packets
  - If the cat image is too large for a single envelope, sending it in one packet could take up internet traffic
  - To solve this, Google will divide the cat image into smaller fragments
    - Put the fragments into different envelopes
    - Write information on the envelopes
      - Return address: Google's IP address
      - Delivery address: Our IP address
      - List the number of packets on each envelope (1 of 4, 2 of 4, etc.)

### TCP/IP
- IP goes beyond addresses
  - Set of conventions computers and servers follow to allow intercommunication
- Fragmentation like in the envelope example are supported by IP
  - If missing a packet, you can logically infer which packet you're missing based on the ones received
  - However, IP doesn't tell computers what to do in this case
- TCP (Transmission Control Protocol) ensures packets can get to their destination
  - Commonly used with IP (TCP/IP)
  - Supports sequence numbers that help data get to its destination
    - When missing a packet, a computer can make a request for the missing packet
    - The computer will put packets together to get a whole file
  - Also includes conventions for requesting services (port identifiers)
    - To make sure Google knows we're requesting a webpage and not an email or other service

### Ports
- Per TCP, the world has standardized numbers that represent different services
- If 5.6.7.8 is Google's IP address, 5.6.7.8;80 (port 80) lets use know that we want a webpage
  - 80 means http (hypertext transfer protocol)
    - The language that web servers speak
  - Google will send the request to their web server via http
- Many websites use secure connections with SSL or HTTPS, which uses the port 443
- Email uses port 25
- Other ports exist as well

### Protocols
- Protocols are just sets of rules like a language, in which computers communicate with each other.
  - Humans use these all the time, such as the protocol for meeting people: handshakes
- When a request is made to Google for an image, HTTP tells Google how to respond appropriately

### UDP
- User Datagram Protocol
  - Doesn't guarantee delivery
  - Used for video conferencing such as FaceTime
    - Packets can be dropped for the sake of keeping the conversation flowing
  - Used anytime you want to keep data coming without waiting for a buffer to fill

### IPs in More Detail
- IP addresses are limited
  - In the format #.#.#.#, each number is 8 bits, so 32 bits total
    - This yields 2<sup>32</sup> or about 4 billion possible addresses
      - We're running out of addresses for all computers
  - Current version of addresses is IPv4
  - Moving towards IPv6
    - Uses 128 bits, yielding 2<sup>128</sup> possible addresses
- Private addresses exist
  - 10.#.#.#, 192.168.#.#, or 172.16.#.#
  - Only with special configuration can someone talk to your computer
  - Your personal device is not a server, so people should not need to access them directly
    - Your device needs to request data from servers
  - Even email is stored on a server such as Gmail and your device makes a request to that server to access that email
- In advanced settings
  - Subnet mask is used to decide if another computer is on the same network
  - Router (aka Gateway) has its own address
    - Routs data in different directions
  - Shows DNS servers as well

### Routers
- Routers have bunches if wires coming and going out of them
  - They have a big table with IP addresses and where data should be routed to get to that destination
    - Often, the data is routed to some next router
- Routers purpose is to send data in the direction of a destination
  - The next router will send it to another until it reaches a destination
- The internet is a network of networks (with their own routers)
  - Often multiple ways to go from A to B
    - Based in US Military logic to prevent downtime if a particular router goes down
    - When multiple packets are sent, like cat.jpg from Google, they can each take a different path, still getting to their destination eventually
      - Sometimes the internet is busy and the quickest path changes

### Traceroute
- How long does it take for this process of data transfer to take on the internet?
- Traceroute is a program that sends packets to each router on a path to a destination, reporting the time it takes to reach that router
- From Sanders Theatre to Google.com:
  - 1-2: A few unnamed routers at Harvard
  - 3-4: More Harvard routers
  - 5-6: Level3 is a ISP
  - 7+: The routers are denying the request
- From Sanders Theatre to Berkeley.edu
  - 6: Northern Crossroads
  - 7-14: A fast connection
    - 8-9: Chicago
    - 10-11: Denver
    - 12-13: Las Vegas
    - 14: Los Angeles
  - 19 is where it arrives at Berkeley in 80 ms!
- From Sanders Theatre to MIT.edu
  - 6-7: Goes to New York connectivity
  - 8: MIT's website is outsourced to Akamai's NYC servers
- From Sanders Theatre to CNN.jp
  - 9-10 jumps from Seattle to Osaka past an ocean!
    - Using undersea cabling

### Undersea Cabling
- David shows a video about undersea cables

### Cable Modem
- Coaxial cable to plug into the wall
- Phone jacks (RJ11) as many services are bundled together these days
- Four jacks for ethernet cables (RJ45)
  - Devices can plug into these for internet connectivity
- This modem has wifi support built in

### Network Switch
A device that you can plug into your router to allow more connections for all your other devices

### Home Router
- Home routers can have wifi, firewall, and switching capabilities

### Network Cable
- Inside a network cable are 8 wires of different colors
  - Some are for transmitting data, others for receiving data
  - Others still are for insulation and cancellation of interference

### Closing Thoughts and Homework
- For homework, find a device that looks like a modem or router and take a look at the connectors on the back of it
  - If brave, play around with unplugging cables
    - Note: Your internet may go down in the process, but can be easily restarted with the cables properly reconnected!
  - If you have a spare ethernet cable, take a look inside yourself
    - These are a bit harder to put back together!

