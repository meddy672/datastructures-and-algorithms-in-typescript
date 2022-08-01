/**
 * - Harmless Ransom Not is two parameters where one is note cut out from a magazine
 * - The other parameter is represent the magazine text.
 * - If there is enough magazine context to form the note then return true else return false. 
 * - If a word appears twice in the note it must appear twice in the magazine.
 */

/**
 * 
 * @param noteText 
 * @param magazineText 
 */
function harmlessRansomNote(noteText: string, magazineText: string): Boolean {
    const noteArray = noteText.split(' ');
    const magazineArray = magazineText.split(' ');
    let magazineContainsNote = true;
    noteArray.forEach((text: string) => {
        if (magazineArray.includes(text)) {
            const index = magazineArray.indexOf(text);
            magazineArray.splice(index, 1);
        } else {
            magazineContainsNote = false;
        }
    })
    return magazineContainsNote;
}

const noteText = 'this is a secret note for you from a secret admirer';

const magazineText = 'puerto rico is a place of great wonder and excitement '+
 'it has many secret waterfall locations that i am an admirer of you must hike '+
 'quite a distance to find the secret places as they are far from populated areas '+
 'but it is worth the effort a tip i have for you is to go early in the morning when '+
 'it is not so hot out also note that you must wear hiking boots this is one of the '+
 'best places i have ever visited';

 const magazineTextFail = 'puerto rico is a place of great wonder and excitement '+
 'it has many secret waterfall locations that i am an admirer of you must hike '+
 'quite a distance to find the places as they are far from populated areas '+
 'but it is worth the effort a tip i have for you is to go early in the morning when '+
 'it is not so hot out also note that you must wear hiking boots this is one of the '+
 'best places i have ever visited';

console.log(harmlessRansomNote(noteText, magazineText)); 
