var cities = [
    "Karachi",
    "Lahore",
    "ISLAMABAD",
    "Sukkur",
    "Peshawar",
    "Rawalpindi",
  ];
  
  for (var i = 0; i < cities.length; i++) {
    var cityToCheck = cities[i].toLowerCase();
    document.write(cityToCheck + "<br />")
    if (cityToCheck === "ISLAMABAD") {
      console.log("It is the cleaniest city of Pakistan");
      break;
    } else {
      console.log("Not the cleaniest");
    }
  }
  
  // console.log(cleaniestCity);
  //  < =  Less
  // G = > Greater
  
  // for (var i = 1; i <= 100; i++) {
  //   document.write(i);
  
  //   if(i % 10 === 0){
  //     document.write("<br />")
  //   }
  // }
  
  
  var personNames = [
      "TaYyab",
      "Hafeez",
      "DanIyal",
      "KamrAn", 
      "SiRaj",
      "ArHaM",
      "uSmAn",
      "FaIzaN"
  ]
  
  // Your Teacher name is arham and it found on 5th Index 
  
  //it should stop when we got our teacher name