/*

Given an unsorted array A of size N that contains only non-negative integers, find a 
continuous sub-array which adds to a given number S.

In case of multiple subarrays, return the subarray which comes first on moving from left 
to right.

 Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.


N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/

let arr = [1,2,3,7,5]
let s = 12, lp =0 , rp=1;



for(let i=0 ; i<arr.length ; i++) {

    sum += arr[i];
    
    if(sum < s)
    rp++;
    if(sum > s)
    lp++;
    if(sum === s)
    console.log(rp +''+ lp);
    
}

