export default function formatNoteItemText(text) {

  if( text === null || text === undefined)
    {
      text = "No note text";
    }
  else{
  }

  let tText = text.trim();
  if(tText === " "){
    tText = "No note text"
  }
  else{

  }

  let truncatedText = tText.replace(/\n\s*\n/g, "\n");
  truncatedText = truncatedText.replace(/\n/g, " - ");
  truncatedText = truncatedText.trim();

  if(truncatedText.length > 200) {
    truncatedText = `${truncatedText.substr(0, 200)}...`;
  } 
  else if(truncatedText === ""){
    truncatedText = "No note text";
  }
  else if(truncatedText.length < 200){
    truncatedText.replace(/\n/g, " - ");
  }
  else {
    truncatedText = text.trim();
  }

  return(
      text=truncatedText
  )
};