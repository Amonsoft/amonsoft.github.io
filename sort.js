/*
**********Sorting Software************
Company:Amonsoft Company LTD
Author : Nyesigye Amon
Division: Web Develoment
Date : 5/Feb/2016
contact:amonsoftx@gmail.com
       :amonxnye@gmail.com
       
       
****Documentation******
THIS IS A SORTING SOFTWARE WRITTEN TO SORT NUMBERS, STRINGS AND ETC , BACKWARDS OR FORWARD IF BACKWARDS.
1. set - the incoming array to be sorted
2. set2 - the new array that will be returned of sorted items
3. hold - the array that will will be holding values for exchange
4. x ,i - counters in the loops

*****flow of events*******
When the array to be sorted is recieved , a loop is initiated 
to go theough the values, and starting from the back they are 
held with the hold varibale , and the outcome is passed to the set2 new array and returned.

*****Usage******
in your code, call the function after calling the script:-

****************YOUR CODE********************************
<head>
<script src=".../directory/sort.js"></script>
</head>

<body><body>

<script>
var set = []; //name of the array or anyother data to sort

var sortedData = sort(set);// get the sorted data from function

console.log(sortedData); //print the data

</script>

****************YOUR CODE********************************

Disclaimer:- Any errors caused by the code are not a problem od the author or the mother company.

*/

function sort(set){

    var set2 =[] , hold =[], i ,x; 

    for(i=0;i<set.length;i++){  
       hold += set[(set.length-1) - i];
    }
    for(x =0;x<hold.length;x++){
        set2 += hold[x];
    }
    
    return set2;
   
}


