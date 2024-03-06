let contentWidth = 50;
let paddingX = 8;
let border = 4;
let getElementWidth = contentWidth + (paddingX * 2) + (border * 2);
console.log(getElementWidth);

contentWidth = 60;
paddingX = 12;
border = 8.5;
getElementWidth = contentWidth + (paddingX * 2) + (border * 2);
console.log(getElementWidth);


contentWidth = 200;
paddingX = 0;
border = 0;
getElementWidth = contentWidth + (paddingX * 2) + (border * 2);
console.log(getElementWidth);



/*
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
*/

