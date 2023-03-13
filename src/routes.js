const {
  getAllBookHandler,
  getBookByIdHandler,
  createBookHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("./handler");

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = h.response({
        status: 'success',
        message: 'Welcome to API Book. Created By Widdy Arfiansyah',
      });
      return response
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: createBookHandler,
  },
  {
    method: "PUT",
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
