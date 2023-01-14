import Home from "./Components/Home";
import "./Home.css";
import template from "./assets/computers.png";

export default function Root(props) {
  return (
    <section className="h100vh bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={template} alt="" className="img-fluid" />
          </div>
          <div className="col-8">
            <Home />
          </div>
        </div>
      </div>
    </section>
  );
}
