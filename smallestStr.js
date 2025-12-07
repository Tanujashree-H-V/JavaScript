const firstStr = "apple";
const secondStr = "banana";
const thirdStr = "cherry";

const lenOfFirstStr = firstStr.length;
const lenOfSecondStr = secondStr.length;
const lenOfThirdStr = thirdStr.length;

if (lenOfFirstStr <= lenOfSecondStr && lenOfFirstStr <= lenOfThirdStr) {
    console.log(`the smallest string is ${firstStr}`);
} else if (lenOfSecondStr <= lenOfFirstStr && lenOfSecondStr <= lenOfThirdStr) {
    console.log(`the smallest string is ${secondStr}`);
} else {
    console.log(`the smallest string is ${thirdStr}`);
}