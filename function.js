function isEven(number) {
    return (number %2 === 0) ?  true : false;
}

//alert(isEven(3)); //> it will print false

function getOdd (numbers) {
    
    let items =[];
    numbers.forEach(numbers => {(isEven(numbers) ==0)?items.push(numbers):false;})
    return items;
}

//let array = [1,5,2,7];
//console.log(getOdd(array));// --> it will print [1,5,7]


function getMax(numbers){
    larger = numbers[0];
    numbers.forEach(numbers => {(numbers>= larger) ? larger = numbers:false;}) 
    return larger;
}

//let array = [1,5,3,7];
//console.log(getMax(array));// --> it will print 7

function stringContains(string1,string2){
    return string1.includes(string2);        
}
// let firststring = "I'm from Jordan";
// let secondstring = "Jordan";
// alert(stringContains(firststring, secondstring));// --> it will print true

function capitalizeWords(string){
    words = string.split(" ");
    for(let letter = 0; letter < words.length; letter++){
        words[letter] = words[letter][0].toUpperCase() + words[letter].substring(1);
    }
    return words.join(" ");
}


// let strings = "i love jordan";
//console.log(capitalizeWords(strings));// --> it will print I Love Jordan

function arrayContains(arr1,arr2){
    checkarray = arr1.some( check => arr2.includes(check) );    
    if (checkarray==true){
        return true;
    }
    return false;
    
}

// let array1 = [1,2,2];
// let array2 = [1];
// console.log(arrayContains(array1,array2));// --> it will print true

function getSequence(number){
    let sequence = [];
    let num = 0;
    if (num < number){
        for (let num = 0; num <= number; num++){
            sequence.push(num);
        }
        return sequence;
    }
    else if (num > number){
        for (let num = 0; num >= number; num--){
            sequence.push(num);
        }
        return sequence;
    }
}
//console.log(getSequence(-2)); // it will print [0,-1,-2]

function getSlug(string){
    words = string.split(" ");
    for(let letter = 0; letter < words.length; letter++){
        words[letter] = words[letter].toLowerCase(); ;//+ words[letter].substring(1);
    }
    return words.join("-");
    
}
//console.log(getSlug("I Love-JS"))// it will print (i-love-js).