Reflection Questions:

1. How did you dynamically create and append new elements to the DOM?
    1. User will input the value.  
    2. I will use getElementById to assign to a value. 
    3. Check did user put in the correct value.
    4. Put in the array
    5. Display the array 
2. What steps did you take to ensure accurate updates to the total price?
    At nedd to mulitple the price and quantity to get the total amount for just that item.  I need to use console.log to make sure the amount is accurate.  Then we call the updateTotalPrice function to calculate all item total amount.  
3. How did you handle invalid input for product name or price?
    I need to think up the logic first before google search how to do it.  At first I try to use Number.isInteger() for the Quantity but I can't make it work so I think to check is there decimal in there.  Then, I need to know how to use Regex to check is the input price is whole number and/or two decimal number.   
4. What challenges did you face when implementing the remove functionality?
    I need to understand what is the remove fucntion doing first.  Then, I need to figure out how to call this function to remove the item in the list.  