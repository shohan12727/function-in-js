function evenSizedString (str){
    const size = str.length;
    if (size %2 ===0){
        console.log("even size")
        return true;
    }
    else{
        console.log("odd size")
        return false;
    }
    console.log(size,str);
}
evenSizedString("dhaka");
evenSizedString("shohan");
evenSizedString("nsu");


// function doubleOrTriple(number,doDouble){
//     if
// }

