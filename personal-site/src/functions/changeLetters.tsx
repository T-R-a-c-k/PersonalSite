export const changeLetters = (event: React.MouseEvent) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const element = event.target as HTMLElement;
  const word = element.innerHTML;
  let wordArray = word.split(""); //The array for splicing
  let finalWord = word.split(""); //The array to return to the intial value
  let count = 0;

  //Scramble the word every 3.3ms
  const interval = setInterval(() => {
    const newWordArray = wordArray.map((char, index) => {
      return letters[Math.floor(Math.random() * 26)];
    });
    //The final text is created by using the untouched finalWord array and the spliced word array's lengths to
    //return all values from the finalWord array where the index is less the difference between the two
    //return value is an array so toString -> replaceAll to get original text
    element.innerHTML =
      finalWord
        .filter((char, index) => {
          return index < finalWord.length - newWordArray.length;
        })
        .toString()
        .replaceAll(",", "") + newWordArray.toString().replaceAll(",", "");
    if (count % 3 === 0) {
      wordArray.splice(0, 1);
    }
    count++;
  }, 33);

  //Clear this at the end to stop the scramble
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
};
