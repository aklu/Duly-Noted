import PropTypes from "prop-types";

export default function formatNoteItemText(text) {
  
  const newText = text.replace(/\n\s*\n/g, "\n")
  const newNewText = newText.replace(/\n/g, "-")
  let truncatedText = newNewText.trim();

    if (truncatedText.length > 200) {
      truncatedText = `${text.substr(0, 200)}...`;
    } 
    else if(truncatedText.length < 1 || truncatedText === null || truncatedText === undefined)
    {
      truncatedText = "No note text";
    }
    else {
      truncatedText = text.trim();
    }

  return(
      text=truncatedText
  )

};

formatNoteItemText.propTypes = {
  text: PropTypes.string.isRequired
};