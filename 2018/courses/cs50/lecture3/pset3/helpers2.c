// Helper functions for music

#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include "helpers.h"

// Converts a fraction formatted as X/Y to eighths
int duration(string fraction)
{
    // TODO
    // take a fraction as a STRING (1/8, 1/4,/ 3/8)
    // assume numerator and denominator are each one digit
    // assume the fraction works out to a whole number of eighth notes
    // Returns the number (INTEGER) of eigth notes long (1/8 = 1 | 1/4 = 2 | 3/8 = 3)
    // possible denominator values are 8, 4, 2, 1

    char num[2];
    char den[2];
    num[0] = fraction[0];
    num[1] = '\0';
    den[0] = fraction[2];
    den[1] = '\0';
    float numerator = atoi(num);
    float denominator = atoi(den);
    float division = numerator / denominator;

    if (division == .125)
    {
        return 1;
    }
    else if (division == .25)
    {
        return 2;
    }
    else if (division == .375)
    {
        return 3;
    }
    else if (division == .5)
    {
        return 4;
    }

    else
    {
        return false;
    }
}

// Calculates frequency (in Hz) of a note
int frequency(string note)
{
    char longNote[3];
    char shortNote[2];
    char octave[2];
    string test;
    float hertzFloat;
    int hertz;
    float octaveFloat;
    float semiTones = 0;

    if (isdigit(note[1])) // if note is only A5, C3, F7, etc
    {
        shortNote[0] = note[0];
        shortNote[1] = '\0';
        octave[0] = note[1];
        octave[1] = '\0';
        test = shortNote;
    }
    else if (!isdigit(note[1])) // if note has an accidental A#4, Cb8, etc.
    {
        longNote[0] = note[0];
        longNote[1] = note[1];
        longNote[2] = '\0';
        octave[0] = note[2];
        octave[1] = '\0';
        test = longNote;
    }

    octaveFloat = atoi(octave);

    if (!strcmp(test, "A") || !strcmp(test, "A#") || !strcmp(test, "Ab"))
    {
        if (!strcmp(test, "A"))
        {
            semiTones = (octaveFloat - 4) * 12;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else if (!strcmp(test, "A#"))
        {
            semiTones = (octaveFloat - 4) * 12;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat * (pow(2, (1.0 / 12))));
        }
        else
        {
            semiTones = (octaveFloat - 4) * 12;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }

    }

    else  if (!strcmp(test, "B") || !strcmp(test, "Bb"))
    {
        if (!strcmp(test, "B"))
        {
            semiTones = ((octaveFloat - 4) * 12) + 2;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) + 2;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else  if (!strcmp(test, "C") || !strcmp(test, "C#") || !strcmp(test, "Cb"))
    {
        if (!strcmp(test, "C"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 9;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else if (!strcmp(test, "C#"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 9;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat * (pow(2, (1.0 / 12))));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) - 9;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else  if (!strcmp(test, "D") || !strcmp(test, "D#") || !strcmp(test, "Db"))
    {
        if (!strcmp(test, "D"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 7;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else if (!strcmp(test, "D#"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 7;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat * (pow(2, (1.0 / 12))));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) - 7;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else  if (!strcmp(test, "E") || !strcmp(test, "Eb"))
    {
        if (!strcmp(test, "E"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 5;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) - 5;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else  if (!strcmp(test, "F") || !strcmp(test, "F#") || !strcmp(test, "Fb"))
    {
        if (!strcmp(test, "F"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 4;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else if (!strcmp(test, "F#"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 4;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat * (pow(2, (1.0 / 12))));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) - 4;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else  if (!strcmp(test, "G") || !strcmp(test, "G#") || !strcmp(test, "Gb"))
    {
        if (!strcmp(test, "G"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 2;
            hertzFloat = round((pow(2, (semiTones / 12)) * 440));
        }
        else if (!strcmp(test, "G#"))
        {
            semiTones = ((octaveFloat - 4) * 12) - 2;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat * (pow(2, (1.0 / 12))));
        }
        else
        {
            semiTones = ((octaveFloat - 4) * 12) - 2;
            hertzFloat = (pow(2, (semiTones / 12)) * 440);
            hertzFloat = round(hertzFloat / (pow(2, (1.0 / 12))));
        }
    }

    else
    {
        return 1;
    }

    hertz = hertzFloat;
    return hertz;
}

// Determines whether a string represents a rest
bool is_rest(string s)
{
    // TODO
    // if s represents a rest, return true
    // else, return false

    string lineEnd = "";
    if (!strcmp(s, lineEnd))
    {
        return true;
    }
    else
    {
        return false;
    }
}