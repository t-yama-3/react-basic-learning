const books = [
  { id: 1, title: '本のタイトル１' },
  { id: 2, title: '本のタイトル２' },
  { id: 3, title: '本のタイトル３' },
]

export const getBooks = () => books

export const getBook = (id) => books.find((book) => book.id === id)
