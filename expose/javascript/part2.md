1. 3 is printed because prices.length = 3.
2. 150 is printed because the discounted price of the last item is 150.
3. 150 is printed because the final price of the last item is 150.
4. It returns [ 50, 100, 150 ] because the code multiplies each entry by 0.5 and rounds to the nearest 100th.
5. Error, because i is in the for loop scope.
6. Error, because discountedPrice is in the for loop scope.
7. 150 is printed because the final price of the last item is 150, and finalPrice is in the function scope.
8. It returns [ 50, 100, 150 ] because the code multiplies each entry by 0.5 and rounds to the nearest 100th.
9. Error, because i is in the for loop scope.
10. 3, because the length of prices is 3 and length does not change.
11. [ 50, 100, 150 ] because discounted is not changing, we are just calling its member function, and discountedPrice is being re-declared each time of the for loop.
12. The syntax is:
    <ol type="A">
         <li>student['name']</li>
        <li>student['Grad Year']</li>
        <li>student.greeting()</li>
        <li>student['Favorite Teacher']['name']</li>
        <li>student['courseLoad'][0]</li>
    </ol>
13. 
    <ol type="A">
         <li>'32' because the integer is converted to a string</li>
         <li>1 because the integer is converted to a string, since string subtraction is not defined</li>
        <li>3 because null is converted to 0</li>
        <li>'3null' because null is converted to 'null' and then string concatenation is performed</li>
        <li>4 because true is converted to 1</li>
        <li>0 because false and null are both converted to 0</li>
        <li> NaN because the operation involves undefined </li>
        <li> NaN because the operation involves undefined </li>
    </ol>
14. 
    <ol type="A">
         <li>True because the '2' is converted to 2</li>
         <li>False because '2' is lexicographically bigger than '12'</li>
        <li>True because == only checks values and not types</li>
        <li>False because === compares types and values</li>
        <li>False because true is converted to 1</li>
        <li>True because Boolean(2) is true since 2 is nonzero</li>
    </ol>
15. == compares values using the Javascript type conversion, but === compares values and types for equality.

16. [Code is here](part2-question16.js).
17. [2, 4, 6] is what is returned. The function modifyArray applies the callback function to each element of array, in this case it multiplies each element by 2.
18. [Code is here](part2-question18.js).
19. The code prints 1 4 3 2 on separate lines. This is because the code for printing 1 and 4 can execute in the regular program flow, but 3 prints after initializing a timer for 0 miliseconds and 2 prints after 1 second.