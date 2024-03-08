let getElementWidth = function (content, padding, border) {
    content = Number.parseFloat;
    let padding = Number.parseFloat;
    let border = Number.parseFloat;
    
    return content + padding +border;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74




/*
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
*/

