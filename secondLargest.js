function secondLargest(array) {
 
var largest=0;
  var s_largest=0;
  for(var i=0;i<array.length;i++)
    {
      if(array[i]>largest)
        {
          s_largest=largest;
          largest=array[i];
         }
      else {
        if(s_largest<array[i] && array[i]<largest)
          s_largest=array[i];
           }
    }
return s_largest;
}
