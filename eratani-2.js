const arr = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso'];

const inputKeyword = 'so';

const result = searchFilter(arr, inputKeyword);

console.log(result);

// Searching

function searchFilter(arr, inputKeyword) {
  const searchTerm = inputKeyword;

  if (!searchTerm) {
    return 'Keyword harus diisi';
  }

  arr = arr.filter((item) => {
    if (item && searchTerm) {
      return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }
  });
  return arr;
}
