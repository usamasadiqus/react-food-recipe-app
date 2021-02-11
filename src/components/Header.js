const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-1">
        <span className="material-icons brand-icon">fastfood</span> Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
        />
        <button className="btn btn-dark">Search Recipe</button>
      </div>
    </div>
  );
};

export default Header;
