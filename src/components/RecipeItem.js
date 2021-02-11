const RecipeItem = (props) => {
  const { label, image, ingredientLines } = props;
  return (
    <div className="card py-2 mt-5 mb-1 text-center">
      <img
        src={image}
        alt={`${label} Image`}
        className="img-fluid w-50 mx-auto rounded-circle"
      />
      <div className="card-body">
        <h5>{label}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient, index) => (
          <li className="list-group-item" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeItem;
