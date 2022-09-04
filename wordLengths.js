 export default function wordLengths(words) {
    var sentence = words.split(" ");
    let arr = sentence.map(w => w.length)
    let sum = 0;
    
  for (var i=0; i<arr.length; i++) {  
      sum =sum+ arr[i]
        } 
    return sum
  }
