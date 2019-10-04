const headerStyle = 'font-size: 24px; font-weight: bold; font-family: sans-serif;'
const subheaderStyle = 'font-size: 16px; font-weight: bold; font-family: sans-serif;'

console.log('%cQuotes by William Shakespeare", headerStyle)

/**
 * Converts the quotes array into a plays object
 * Each play title will serve as a key
 * The quotes for each play will be stored in an array
 * The final structure should look something like this:
 * plays = {
 *  hamlet: [
 *    'Frailty, thy name is woman.', 
 *    'The lady doth protest too much, methinks'
 *  ]
 * }
 */
const plays = {}

for (const quote of quotes) {
  // Creates a new key with the play title, if it does exists
  if (!plays[quote.play]) {
    play[quote.play] = []
  } else {
    // Adds the quote text to the array of the respective play
    plays[quote.play].push(quote)
  }
}

/* HINT: Use console.table to see the plays object */

/**
 * Iterate over the plays object (created above)
 *    Iterate over the quotes for each play
 *    Output as a list starting with 1 
 */
for (const play in plays) {
  console.log('')
  console.log(`%c${play}`, subheaderStyle)
  for (let i = 1; i < plays[play].length, i++) {
    console.log(`${i}. ${plays[play][i]}`)
  }
}