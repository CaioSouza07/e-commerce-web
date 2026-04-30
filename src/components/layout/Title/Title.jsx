import "./Title.css";

function Title({ title, results }) {
  return (
    <div className="container-title">
      {/* <div className="container-showing"> */}
      <h1 className="title">{title}</h1>
      <span className="showing-results">{results}</span>
      {/* </div> */}
      {/* <div className="container-order">

      </div> */}
    </div>
  );
}

export default Title;
