export default function formatNoteItemText(text) {

  if(text === "" || text === null || text === undefined)
    {
      text = "No note text";
    }
  else{
    return text;
  }

  let multipleBreakReplace = text.replace(/\n\s*\n/g, "\n");
  let singleBreakReplace = multipleBreakReplace.replace(/\n/g, "-");
  let truncatedText = singleBreakReplace.trim();

  if(truncatedText.length > 200) {
    truncatedText = `${text.substr(0, 200)}...`;
  } 
  else if(truncatedText === ""){
    truncatedText = "No note text";
  }
  else {
    truncatedText = text.trim();
  }

  return(
      text=truncatedText
  )
};