export default function formatNoteItemText(text) {

  if( text === null || text === undefined)
    {
      text = "No note text";
    }
  else{
  }

  let tText = text.trim();

  let truncatedText = tText.replace(/\n\s*\n/g, "\n");
  truncatedText = truncatedText.replace(/\n/g, " - ");

  if(truncatedText.length > 200) {
    truncatedText = `${truncatedText.substr(0, 200)}...`;
  } 
  else if(truncatedText === ""){
    truncatedText = "No note text";
  }
  return truncatedText;
};