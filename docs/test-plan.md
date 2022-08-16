# Test Plan
This document explain how the test were make.

## End To End Tests
I make 3 tests for this category:

E2E - 01:
> Precondition: Start the program and pass 509-52-0005 as an argument.
>
> The program should print "The SSN is Valid".

E2E - 02:
> Precondition: Start the program and don't pass an argument.
> 
> The program should print "The SSN is Invalid".

E2E - 03:
> Precondition: Start the program and pass 509-52-000 as an argument.
>
> The program should print "The SSN is Invalid".

## Unit Tests
I wrote the following unit tests for this project, the TC01 is the only positive unit test:

| Id | Input | Output |
| --- | --- | --- |
| TC01 | 509-52-0005 | true |
| TC02 | 509-52-000 | false |
| TC03 | 509-52-00059 | false |
| TC04 | 509520005 | false |
| TC05 | 509-52-00-05 | false |
| TC06 | -509-520005 | false |
| TC07 | 50952-0005- | false |
| TC08 | 000-52-0005 | false |
| TC09 | 666-52-0005 | false |
| TC10 | 901-52-0005 | false |
| TC11 | 5092-52-000 | false |
| TC12 | 50-523-0005 | false |
| TC13 | 509-00-0005 | false |
| TC14 | 509-002-005 | false |
| TC15 | 509-52-0000 | false |
| TC16 | 59-52-00052 | false |

I use the test framework Jest, to execute the unit tests, use the following command:
```
npm test
```
