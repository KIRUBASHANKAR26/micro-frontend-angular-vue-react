import Home from "./Components/Home";
import "./Home.css";

export default function Root(props) {
  return (
    <section className="h100vh bg-dark">
      <div className="container">
        <Home />
      </div>
    </section>
  );
}
