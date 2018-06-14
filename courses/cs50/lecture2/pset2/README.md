# [Problem Set 2: Crypto](https://docs.cs50.net/2018/x/psets/2/pset2.html)

0. Watch [Week 1’s second lecture](https://video.cs50.net/2017/fall/lectures/2).
2. Choose two out of three adventures:
   * Implement Caesar’s cipher.
   * Implement Vigenère’s cipher.
   * Crack passwords.
2. Submit your code.

## Reminders
Per [Week 2’s lecture](https://video.cs50.net/2017/fall/lectures/2):
* Use `help50` as needed.
* Use `eprintf` as needed.
* Use `debug50` as needed.

## Getting Started
Alright, here we go again!

Log into [cs50.io](https://cs50.io/) and execute
```
update50
```

within a terminal window to make sure your workspace is up-to-date. If you somehow closed your terminal window (and can’t find it!), make sure that **Console** is checked under the **View** menu, then click the green, circled plus (+) in CS50 IDE’s bottom half, then select **New Terminal**.

Next, execute
```
mkdir ~/workspace/pset2/
```

at your prompt in order to make a directory called `pset2` in your `workspace` directory. Take care not to overlook the space between `mkdir` and `~/workspace/pset2/` or any other character for that matter! Keep in mind that `~` denotes your home directory, `~/workspace/` denotes a directory called workspace therein, and `~/workspace/pset2/` denotes a directory called `pset2` within `~/workspace/`.

Now execute
```
cd ~/workspace/pset2/
```

to move yourself into (i.e., open) that directory. Your prompt should now resemble the below.
```
~/workspace/pset2/ $
```

If not, retrace your steps and see if you can determine where you went wrong. You can actually execute
```
history
```

at the prompt to see your last several commands in chronological order if you’d like to do some sleuthing. You can also scroll through the same one line at a time by hitting your keyboard’s up and down arrows; hit Enter to re-execute any command that you’d like.

## What to Do
Implement any two (2) of:
* [Caesar](https://docs.cs50.net/2018/x/psets/2/caesar/caesar.html), less comfortable
* [Vigenère](https://docs.cs50.net/2018/x/psets/2/vigenere/vigenere.html), less comfortable
* [Crack](https://docs.cs50.net/2018/x/psets/2/crack/crack.html), more comfortable

You’re welcome but not expected to implement all three; if you submit all three, we’ll grade your two best.

## How to Submit
1. Log into [CS50 IDE](https://cs50.io/) and open a terminal window, if not open already.
2. Ensure your workspace is up-to-date by executing:
```
update50
```

3. Submit at least two of:
   * Caesar, by executing:
   ```
   cd ~/workspace/pset2/caesar/
   submit50 cs50/2018/x/caesar
   ```

   * Vigenère, by executing:
   ```
   cd ~/workspace/pset2/vigenere/
   submit50 cs50/2018/x/vigenere
   ```

   * Crack, by executing:
   ```
   cd ~/workspace/pset2/crack/
   submit50 cs50/2018/x/crack
   ```