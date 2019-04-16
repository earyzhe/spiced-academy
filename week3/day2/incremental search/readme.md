1. input (text field)
    * get the current value of the text field
    * if the current value is an empty string, empty and/or hide the results element and do nothing else
    * loop through the countries and build a list of countries that start with the value
    * if matches array is empty, put the "no results" message into the results element
    * if matches array is not empty, loop through them, generate html for each, and put the html in the results element. Update the DOM just once with the full list of result elements

<!-- 2. mouseover/mouseenter (individual result)
    * remove the highlight class from the result that has it if there is one
    * add the highlight class to the event target

3. mousedown (individual result)
    * take the text contained by the element with the highlight class (it's the event target) and set it as the value of the text field
    * empty and/or hide the results -->

<!-- 4. keydown (text field)
    * if the down arrow is pressed
        * if no result element has the highlight class, add the highlight class to the first result
        * if a result other than the last one has the highlight class, remove the highlight class from the result that has it and add it to the next one
        * if the last result element has the highlight class, do nothing -->
<!-- * if the up arrow is pressed
        * if no result element has the highlight class, add the highlight class to the last result
        * if a result other than the first one has the highlight class, remove the highlight class from the result that has it and add it to the previous one
        * if the first result element has the highlight class, do nothing -->
<!-- * if the return key is pressed
    * take the text contained by the element with the highlight class and set it as the value of the text field
    * empty and/or hide the results -->
<!-- 5. focus (text field)
    * do the same thing as the input -->
<!-- 6. blur (text field)
    * empty and/or hide the results -->