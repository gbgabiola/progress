# Credit goes to Websten from forums
#
# Use Dave's suggestions to finish your daysBetweenDates
# procedure. It will need to take into account leap years
# in addition to the correct number of days in each month.

def isLeapYear(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

def daysInMonth(year, month):
    if month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
        return 31
    else:
        if month == 2:
            if isLeapYear(year):
                return 29
            else:
                return 28
        else:
            return 30

def nextDay(year, month, day):
    if day < daysInMonth(year, month):
        return year, month, day + 1
    else:
        if month < 12:
            return year, month + 1, 1
        else:
            return year + 1, 1, 1

def dateIsBefore(year1, month1, day1, year2, month2, day2):
    """Returns True if year1-month1-day1 is before 
    year2-month2-day2. Otherwise, return False."""
    if year1 < year2:
        return True
    if year1 == year2:
        if month1 < month2:
            return True
        if month1 == month2:
            return day1 < day2
    return False

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    """Returns the number of days between year1/month1/day1 
        and year2/month2/day2. Assumes inputs are valid dates
        in Gregorian calendar, and the first date is not after
        the second."""
    assert not dateIsBefore(year2, month2, day2, year1, month2, day2)
    days = 0
    while dateIsBefore(year1, month1, day1, year2, month2, day2):
        year1, month1, day1 = nextDay(year1, month1, day1)
        days += 1
    return days

# def mytest():
#     assert daysBetweenDates(2013, 1, 1, 2013, 1, 1) == 0
#     assert daysBetweenDates(2013, 1, 1, 2013, 1, 2) == 1
#     assert nextDay(2013, 1, 1) == (2013, 1, 2)
#     assert nextDay(2013, 4, 30) == (2013, 5, 1)
#     assert nextDay(2012, 12, 31) == (2013, 1, 1)
#     assert nextDay(2013, 2, 28) == (2013, 3, 1)
#     assert nextDay(2013, 9, 30) == (2013, 10, 1)
#     assert nextDay(2012, 2, 28) == (2012, 2, 29)
#     assert daysBetweenDates(2012, 1, 1, 2013, 1, 1) == 366
#     assert daysBetweenDates(2013, 1, 1, 2014, 1, 1) == 365
#     assert daysBetweenDates(2013, 1, 24, 2013, 6, 29) == 156
#     print("Tests finished!")

# mytest()

def test():
    test_cases = [((2012, 1, 1, 2012, 2, 28), 58),
                  ((2012, 1, 1, 2012, 3, 1), 60),
                  ((2011, 6, 30, 2012, 6, 30), 366),
                  ((2011, 1, 1, 2012, 8, 8), 585 ),
                  ((1900, 1, 1, 1999, 12, 31), 36523),
                  ((2013, 1, 24, 2013, 6, 29), 155),
                  ((1912, 12, 12, 2012, 12, 12), 36000)]

    for (args, answer) in test_cases:
        result = daysBetweenDates(*args)
        if result != answer:
            print("Test with data:", args, "failed")
        else:
            print("Test case passed!")

test()

# print(isLeapYear(2000))
# print(isLeapYear(2100))
# print(isLeapYear(2012))
# print(isLeapYear(2013))

# print(daysBetweenDates(2013, 1, 24, 2013, 6, 29))
# print(daysBetweenDates(1912, 12, 12, 2012, 12, 12))
# print(daysBetweenDates(2013, 1, 1, 2012, 12, 20))