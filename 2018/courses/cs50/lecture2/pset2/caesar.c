/**
 * caesar.c
 *
 * Genesis Gabiola
 * genesisbritanicogabiola@gmail.com
 *
 * Design and implement a program, caesar, that encrypts messages using Caesar’s cipher.
 * Implement your program in a file called caesar.c in a directory called caesar.
 * Your program must accept a single command-line argument, a non-negative integer. Let’s call it k for the sake of discussion.
 * Your program must accept a single command-line argument, a non-negative integer. Let’s call it k for the sake of discussion.
 * Your program must accept a single command-line argument, a non-negative integer. Let’s call it k for the sake of discussion.
 * Your program must accept a single command-line argument, a non-negative integer. Let’s call it k for the sake of discussion.
 * If your program is executed without any command-line arguments or with more than one command-line argument, your program should print an error message of your choice (with printf) and return from main a value of 1 (which tends to signify an error) immediately.
 * You can assume that, if a user does provide a command-line argument, it will be a non-negative integer (e.g., 1). No need to check that it’s indeed numeric.
 * Do not assume that k will be less than or equal to 26. Your program should work for all non-negative integral values of k less than 231 - 26. In other words, you don’t need to worry if your program eventually breaks if the user chooses a value for k that’s too big or almost too big to fit in an int. (Recall that an int can overflow.) But, even if k is greater than 26, alphabetical characters in your program’s input should remain alphabetical characters in your program’s output. For instance, if k is 27, A should not become [ even though [ is 27 positions away from A in ASCII, per asciichart.com; A should become B, since B is 27 positions away from A, provided you wrap around from Z to A.
 * Your program must output plaintext: (without a newline) and then prompt the user for a string of plaintext (using get_string).
 * Your program must output ciphertext: (without a newline) followed by the plaintext’s corresponding ciphertext, with each alphabetical character in the plaintext "rotated" by k positions; non-alphabetical characters should be outputted unchanged.
 * Your program must preserve case: capitalized letters, though rotated, must remain capitalized letters; lowercase letters, though rotated, must remain lowercase letters.
 * After outputting ciphertext, you should print a newline. Your program should then exit by returning 0 from main.
 */


#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, string argv[])
{
    // Check if correct # of arguments given
    if (argc != 2 && !isdigit(argv[1]))
    {
        printf("Wrong number of arguments. Please try again.\n");

        return 1;
    }

    // Convert input to int type
    int k = atoi(argv[1]);

    // Get text to encode
    string p = get_string();

    // Loop through text
    for (int i = 0, n = strlen(p); i < n; i++)
    {
        // Keep case of letter
        if (isupper(p[i]))
        {
            // Get modulo number and add to appropriate case
            printf("%c", 'A' + (p[i] - 'A' + k) % 26);
        }
        else if (islower(p[i]))
        {
            printf("%c", 'a' + (p[i] - 'a' + k) % 26);
        }
        else
        {
            // return unchanged
            printf("%c", p[i]);
        }
    }

    printf("\n");

    return 0;
}