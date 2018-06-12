/**
 * vigenere.c
 *
 * Genesis Gabiola
 * genesisbritanicogabiola@gmail.com
 *
 * Design and implement a program that encrypts messages using Vigenère’s cipher.
 * Implement your program in a file called vigenere.c in a directory called vigenere.
 * Your program must accept a single command-line argument: a keyword, k, composed entirely of alphabetical characters.
 * If your program is executed without any command-line arguments, with more than one command-line argument, or with one command-line argument that contains any non-alphabetical character, your program should print an error (of your choice) and exit immediately, with main returning 1 (thereby signifying an error).
 * Otherwise, your program must proceed to prompt the user for a string of plaintext, p, (as by a prompt for plaintext:) which it must then encrypt according to Vigenère’s cipher with k, ultimately printing the result (prepended with ciphertext: and ending with a newline) and exiting, with main returning 0.
 * With respect to the characters in k, you must treat A and a as 0, B and b as 1, …​ , and Z and z as 25.
 * Your program must only apply Vigenère’s cipher to a character in p if that character is a letter. All other characters (numbers, symbols, spaces, punctuation marks, etc.) must be outputted unchanged. Moreover, if your code is about to apply the jth character of k to the ith character of p, but the latter proves to be a non-alphabetical character, you must wait to apply that jth character of k to the next alphabetical character in p; you must not yet advance to the next character in k.
 * Your program must preserve the case of each letter in p.
 */

#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(int argc, string argv[])
{

    /* Checking argument validity. */
    if (argc != 2)
    {
        printf("ERROR: You need to submit ONE keyword.\n");
        return 1;
    }
    else
    {
        for (int i = 0; i < strlen(argv[1]); i++)
        {
            if (isalpha(argv[1][i]) == 0)
            {
                printf("ERROR: You can only submit alphabetical characters.\n");
                return 1;
            }
        }
    }

    /* Assigning provided keyword to 'k'. */
    string k = argv[1];
    int kLength = strlen(k);

    /* Assigning numerical values to 'k' characters. */
    for (int i = 0; i < kLength; i++)
    {
        if (97 <= k[i] && k[i] <= 122)
        {
            k[i] = (int)k[i] - 97;
        }
        else if (65 <= k[i] && k[i] <= 90)
        {
            k[i] = (int)k[i] - 65;
        }
    }

    /* Prompt user for a string of plaintext - 'p'. */
    string p = get_string("plaintext: ");
    int pLength = strlen(p);

    /* Encrypting only characters, skipping non-alphabetical characters.
       Non-alphabetical characters will simply be printed. */
    printf("ciphertext: ");
    int kIndex = 0;
    /*char kChar = k[kIndex];.*/

    for (int i = 0; i < pLength; i++)
    {
        int pInt = (int) p[i]; // Storing p char as integer

        if (isalpha(p[i]) != 0)     // Checking if p[i] is alphabetical
        {
            /* Encrypting lowercase characters */
            if (97 <= pInt && pInt <= 122)
            {
                pInt = pInt + k[kIndex];

                if (pInt > 122)
                {
                    pInt = (pInt - 122) + 96;
                    printf("%c", (char) pInt);
                }
                else
                {
                    printf("%c", (char) pInt);
                }
            }

            /* Encrypting uppercase characters */
            if (65 <= pInt && pInt <= 90)
            {
                pInt = pInt + k[kIndex];

                if (pInt > 90)
                {
                    pInt = (pInt - 90) + 64;
                    printf("%c", (char) pInt);
                }
                else
                {
                    printf("%c", (char) pInt);
                }
            }

            /* Increment or reset kIndex */
            kIndex++;
            if (kIndex == kLength)
            {
                kIndex = 0;
            }
        }
        else
        {
            printf("%c", p[i]);
        }
    }

    printf("\n");
    return 0;
}