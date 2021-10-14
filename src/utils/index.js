const sanitizeKeyword = (keyword) =>
  keyword && keyword.trim().split(' ').join('+')

const formatKeyword = (keyword) => keyword && keyword.split('+').join(' ')

// Emphasize search keyword for card's title
const formatTitle = (title, keywordS) =>
  keywordS &&
  title
    .split(' ')
    .map((char, index) =>
      keywordS.split('+').includes(char) ? (
        <span style={{ fontWeight: '400' }} key={index}>
          {char}
        </span>
      ) : (
        char
      )
    )
    .reduce((prev, curr) => [prev, ' ', curr])

// Calculate growth
const calcGrowth = (product) => {
  const startSV = product.search_msv[0].sv
  const finalSV = product.search_msv[product.search_msv.length - 1].sv

  return (((finalSV - startSV) / startSV) * 100).toFixed(0)
}

// Process search_msv array for generating second area chart,
// via https://recharts.org/en-US/api/Area#connectNulls
const processMSV = (array) => {
  const newArray = array.slice()

  // Add a new key "svc" with same value of "sv"
  const copySV = (index) => (newArray[index].svc = newArray[index].sv)

  // First item
  copySV(0)
  // Last item
  copySV(newArray.length - 1)

  return newArray
}

// Add leading zero to month for moment.js,
// otherwise the result will be like "Invalid date" on iOS,
// see https://momentjs.com/guides/#/warnings/js-date/
const formatDate = (date) =>
  date.length !== 7 ? [date.slice(0, 5), 0, date.slice(5)].join('') : date

export {
  sanitizeKeyword,
  formatKeyword,
  formatTitle,
  calcGrowth,
  processMSV,
  formatDate,
}
