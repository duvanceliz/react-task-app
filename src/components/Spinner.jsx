function Spinner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Spinner;
