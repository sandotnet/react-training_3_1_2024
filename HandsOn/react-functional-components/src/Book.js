const Book = ({ book }) => {
  return (
    <>
      <tr>
        <td>{book.name}</td>
        <td>{book.price}</td>
        <td>{book.author}</td>
        <td>{book.lang}</td>
      </tr>
    </>
  );
};
const Shop = () => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Author</th>
            <th>Lang</th>
          </tr>
        </thead>
        <tbody className="table-primary">
          <Book
            book={{
              name: "React",
              price: 450,
              author: "Santhosh",
              lang: "english",
            }}
          />
          <Book
            book={{
              name: "Angular",
              price: 450,
              author: "Santhosh",
              lang: "english",
            }}
          />
        </tbody>
      </table>
    </div>
  );
};
export default Shop;
