module.exports = function toReadable (number) {
    let readableNumbers = ['Zero', 'One','Two'
    ,'Three','Four'
    ,'Five','Six'
    ,'Seven','Eight'
    ,'Nine','Ten'
    ,'Eleven','Twelve'
    ,'Thirteen','Fourteen'
    ,'Fifteen','Sixteen'
    ,'Seventeen'	,'Eighteen'
    ,'Nineteen','Twenty'
    ,'Twenty-one'	,'Twenty-two'
    ,'Twenty-three','Twenty-four'
    ,'Twenty-five','Twenty-six'
    ,'Twenty-seven', 'Twenty-eight'
    ,'Twenty-nine','Thirty'
    ,'Thirty-one'	,'Thirty-two'
    ,'Thirty-three'	, 'Thirty-four'
    ,'Thirty-five'	, 'Thirty-six'
    , 'Thirty-seven', 'Thirty-eight'
    ,'Thirty-nine'	, 'Forty'
    ,'Forty-one'	,'Forty-two'
   ,'Forty-three'	, 'Forty-four'
    ,'Forty-five'	,'Forty-six'
    , 'Forty-seven'	,'Forty-eight'
    ,'Forty-nine','Fifty'
    ,'Fifty-one'	, 'Fifty-two'
    , 'Fifty-three'	,'Fifty-four'
   , 'Fifty-five'	,'Fifty-six'
    ,'Fifty-seven'	,'Fifty-eight'
    ,'Fifty-nine'	, 'Sixty'
    ,'Sixty-one'	, 'Sixty-two'
    ,'Sixty-three'	, 'Sixty-four'
    ,'Sixty-five'	, 'Sixty-six'
    ,'Sixty-seven'	, 'Sixty-eight'
    ,'Sixty-nine'	, 'Seventy'
    ,'Seventy-one'	, 'Seventy-two'
    ,'Seventy-three'	, 'Seventy-four'
    ,'Seventy-five'	,'Seventy-six'
    ,'Seventy-seven'	,'Seventy-eight'
    ,'Seventy-nine','Eighty', 
    'Eighty-one'	, 'Eighty-two'
    ,'Eighty-three'	, 'Eighty-four'
    ,'Eighty-five'	,'Eighty-six'
    ,'Eighty-seven'	,'Eighty-eight'
    ,'Eighty-nine'
    ,'Ninety'	,
    'Ninety-one'	, 'Ninety-two'
    ,'Ninety-three'	, 'Ninety-four'
    ,'Ninety-five'	,'Ninety-six'
    ,'Ninety-seven'	,'Ninety-eight'
    ,'Ninety-nine','One Hundred'];

    let hundredsArray = ['', 'one hundred','two hundred','three hundred','four hundred','five hundred',
    'six hundred' , 'seven hundred', 'eight hundred', 'nine hundred'];

    let lowercaseNumbers = readableNumbers.map(element => element.toLowerCase());
    let properNumbers = lowercaseNumbers.map(element => element.replace('-', ' '));

    if (number <= 100) {return properNumbers[number]}

    if (number > 100 && number < 1000) {
        function moreThanOneHundred (number){
            let hundredindex = Math.floor(number/100); // 5
            let hundredNum = hundredindex * 100;
            let ten = number - hundredNum;
            if (ten !== 0) {
            return hundredsArray[hundredindex] + ' ' + properNumbers[ten];}
            else {return hundredsArray[hundredindex]}
            }
            return  moreThanOneHundred(number)
        }
    
    if (num === 1000) {
        return 'one thousand'
    }
  
    // if (number > 100 && number < 200) {
    //     function moreThanOneHundred (number){
    //         let ten = number - 100;
    //         return properNumbers[100] + ' ' + properNumbers[ten];
    //         }
    //         return  moreThanOneHundred(number)
    //     }

    // if (number > 200 && number < 300) {
    //         function moreThanOneHundred (number){
    //             let ten = number - 200;
    //             return 'two hundred' + ' ' + properNumbers[ten];
    //             }
    //             return  moreThanOneHundred(number)
    //         }

    // if (number > 300 && number < 400) {
    //             function moreThanOneHundred (number){
    //                 let ten = number - 300;
    //                 return 'three hundred' + ' ' + properNumbers[ten];
    //                 }
    //                 return  moreThanOneHundred(number)
    //             }

    //             if (number > 400 && number < 500) {
    //                 function moreThanOneHundred (number){
    //                     let ten = number - 400;
    //                     return 'four hundred' + ' ' + properNumbers[ten];
    //                     }
    //                     return  moreThanOneHundred(number)
    //                 }

    //                 if (number > 500 && number < 600) {
    //                     function moreThanOneHundred (number){
    //                         let ten = number - 500;
    //                         return 'five hundred' + ' ' + properNumbers[ten];
    //                         }
    //                         return  moreThanOneHundred(number)
    //                     }

    //                     if (number > 600 && number < 700) {
    //                         function moreThanOneHundred (number){
    //                             let ten = number - 600;
    //                             return 'six hundred' + ' ' + properNumbers[ten];
    //                             }
    //                             return  moreThanOneHundred(number)
    //                         }

    //                         if (number > 700 && number < 800) {
    //                             function moreThanOneHundred (number){
    //                                 let ten = number - 700;
    //                                 return 'seven hundred' + ' ' + properNumbers[ten];
    //                                 }
    //                                 return  moreThanOneHundred(number)
    //                             }

    //                             if (number > 800 && number < 900) {
    //                                 function moreThanOneHundred (number){
    //                                     let ten = number - 800;
    //                                     return 'eight hundred' + ' ' + properNumbers[ten];
    //                                     }
    //                                     return  moreThanOneHundred(number)
    //                                 }

    //                                 if (number > 900 && number < 1000) {
    //                                     function moreThanOneHundred (number){
    //                                         let ten = number - 900;
    //                                         return 'nine hundred' + ' ' + properNumbers[ten];
    //                                         }
    //                                         return  moreThanOneHundred(number)
    //                                     }

                                        

    //                                     if (number === 200) {return "two hundred"}

    //                                     if (number === 300) {return "three hundred"}

    //                                     if (number === 400) {return "four hundred"}

    //                                     if (number === 500) {return "five hundred"}

    //                                     if (number === 600) {return "six hundred"}

    //                                     if (number === 700) {return "seven hundred"}

    //                                     if (number === 800) {return "eight hundred"}

    //                                     if (number === 900) {return "nine hundred"}

    //                                     if (number === 1000) {
    //                                         return "one thousand"
    //                                     }
  
  // 110 = One hundred ten	120 = One hundred twenty
  // 130 = One hundred thirty	140 = One hundred forty
  // 150 = One hundred fifty	160 = One hundred sixty
  // 170 = One hundred seventy	180 = One hundred eighty
  // 190 = One hundred ninety	200 = Two hundred
  // 290 = Two hundred ninety	300 = Three hundred
  // 310 = Three hundred ten	320 = Three hundred twenty
  // 330 = Three hundred thirty	340 = Three hundred forty
  // 350 = Three hundred fifty	360 = Three hundred sixty
  // 370 = Three hundred seventy	380 = Three hundred eighty
  // 390 = Three hundred ninety	400 = Four hundred
  // 490 = Four hundred ninety	500 = Five hundred
  // 510 = Five hundred ten	520 = Five hundred twenty
  // 530 = Five hundred thirty	540 = Five hundred forty
  // 550 = Five hundred fifty	560 = Five hundred sixty
  // 570 = Five hundred seventy	580 = Five hundred eighty
  // 590 = Five hundred ninety	600 = Six hundred
  // 690 = Six hundred ninety	700 = Seven hundred
  // 710 = Seven hundred ten	720 = Seven hundred twenty
  // 730 = Seven hundred thirty	740 = Seven hundred forty
  // 750 = Seven hundred fifty	760 = Seven hundred sixty
  // 770 = Seven hundred seventy	780 = Seven hundred eighty
  // 790 = Seven hundred ninety	800 = Eight hundred
  // 890 = Eight hundred ninety	900 = Nine hundred
  // 910 = Nine hundred ten	920 = Nine hundred twenty
  // 930 = Nine hundred thirty	940 = Nine hundred forty
  // 950 = Nine hundred fifty
  
//   let lowercaseNumbers = readableNumbers.map(element => element.toLowerCase());
//   let properNumbers = lowercaseNumbers.map(element => element.replace('-', ' '));
  
//   return properNumbers[number]
  }