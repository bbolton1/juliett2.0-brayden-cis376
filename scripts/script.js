$(document).ready(function(){
    // Translate NATO phonetic alphabet to letters
    $('#inputNATO').on('input', function() {
        let inputText = $(this).val().toUpperCase();
        let NATO = translateToNATO(inputText, NATOPhoneticAlphabet);
        $('#outputNATO').val(NATO);
    });
    
    function translateToNATO(text, natoAlphabet){
        let NATO = "";
        for(let i = 0; i < text.length; i++){
            let char = text.charAt(i);
            if(char in natoAlphabet){
                NATO += natoAlphabet[char] + " ";
            } else {
                NATO += char + " ";
            }
        }
        return NATO.trim();
    }

    // Translate NATO phonetic words to letters
    $('#reverseInput').on('input', function() {
        let inputText = $(this).val().toUpperCase().split(" ");
        let reversedNATO = translateFromNATO(inputText, NATOPhoneticAlphabetReverse);
        $('#reverseOutput').val(reversedNATO);
    });

    function translateFromNATO(words, natoAlphabetReverse){
        let letters = "";
        for(let i = 0; i < words.length; i++){
            let word = words[i];
            if(word in natoAlphabetReverse){
                letters += natoAlphabetReverse[word];
            } else {
                letters += word;
            }
        }
        return letters;
    }
});
