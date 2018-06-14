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
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, string argv[])
{
    // Ensuring only one key is input
    // if the user did not include a key in the command line then return an error
    if (argc != 2)
    {
        // display the error
        printf("ERROR: You can only enter one key.\n");
        return 1;
    }

    // Assigning key
    long k = strtol(argv[1], NULL, 10);

    // Requesting plain text
    string pText = get_string("plaintext: ");
    int pLength = strlen(pText);

    printf("ciphertext: ");

    // Adding key (k) to plain text (p)
    for (int i = 0; i < pLength; i++)
    {
        int p = (int) pText[i];
        int c;

        if (65 <= p && p <= 90)
        {
            c = (k % 26) + p;

            if (c > 90)
            {
                c = (c - 91) + 65;
            }

            printf("%c", (char) c);
        }
        else if (97 <= p && p <= 122)
        {
            c = (k % 26) + p;

            if (c > 122)
            {
                c = (c - 123) + 97;
            }

            printf("%c", (char) c);
        }
        else
        {
            printf("%c", (char) p);
        }
    }
    printf("\n"); /* add more comments to make it more readable */
}