export default function formatNoteItemText(text) {
  
  if(text.length < 1 || text === null || text === undefined)
    {
      text = "No note text";
    }
    else{
      return text;
    }

  const newText = text.replace(/\n\s*\n/g, "\n")
  const newNewText = newText.replace(/\n/g, "-")
  let truncatedText = newNewText.trim();

    if(truncatedText.length > 200) {
      truncatedText = `${text.substr(0, 200)}...`;
    } 
    else {
      truncatedText = text.trim();
    }

  return(
      text=truncatedText
  )
};