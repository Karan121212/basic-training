function calculateFrequency(string) {
  
 var output = {};
    for (var i=0; i<string.length;i++) {
       var character=string.charAt(i);
      if(character>='a'&& character<='z'){
        if (output[character]) {
           output[character]++;
        } else {
           output[character] = 1;
        }
    }
    }
    return output;
}
