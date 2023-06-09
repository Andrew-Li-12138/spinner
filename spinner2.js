
const spinnerString = '\r|\r/\r-\r\\\r|\r/\r-\r\\\r|'

for ( let i = 0; i < spinnerString.length; i++) {
  setTimeout(() => {
    process.stdout.write(`   ${spinnerString[i]}   `)
  }, 100 + (i * 200))
};

