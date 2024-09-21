// var cities = ["Karachi", "Islamabad", "Lahore", "Sukkur"];

// cities.shift() // remove elements in an array from start
// cities.unshift("Faisalabad") // add elements in an array from start

// var result = cities.splice(1,2 , "Sialkot")

// first parameter  = jahan se katai shuru karni hai
// second parameter = kitni katai karni he
// third and rest of the parameter = add krty jana he

// splice hamey return kary ga jo elements humny remove krdiye hen
// agr hamny kuch bh remove nh kea to ye hamey [] khali array return  krdy ga

// var copiedValue = cities.slice(0, 0)

//slice hamey return kry ga wo array jo hamny copy kea hai
//agr humny kuch bh copy nh kea to wo khali array return krdy ga.

// console.log(copiedValue)
// console.log(cities)

// loop

// 1 : for loop
// 2 : while loop
// 3 : do while loop
// 4 : for of loop
// 5 : for in loop

// for loop


//  starting ; ending ; increment
// for (var i = 2; i <= 5 ; i  = i + 2){
    //     console.log(i);
    // }
    
    // console.log(cities[0])
    // console.log(cities[1])
    // console.log(cities[2])
    // console.log(cities[3])
    
    //  starting ; ending ; increment
    // for (var i = 0; i <= 2; i++) {
    //     // console.log()
    //     // console.log(i);
    // }
    
    // 10 < 9
    // 10 is less than 9
    // console.log(10 > 9)
    
    var cities = ["Karachi", "Lahore", "Sukkur", "Peshawar" , "Islamabad"];

        
    for (var i = 0; i < cities.length; i++) {
      if (cities[i] === "Islamabad") {
        console.log("It is the cleaniest city of Pakistan");
      } else {
        console.log("Not the cleaniest");
      }
    }
    