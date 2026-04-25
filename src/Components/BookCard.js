const BookCard = ({ title, year, genre }) => {
  return (
    <div className="BookCard">
      <h3> {title}</h3>
      <p> Рік: {year}</p>
      <p> Жанр: {genre}</p>
    </div>
  );
};

export default BookCard;
