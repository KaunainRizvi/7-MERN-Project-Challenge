import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import JobForm from "./components/JobForm";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Job Board</h1>
          <button className="btn btn-primary mb-3">Show Job Form</button>
          <div>
           <JobForm/>
          </div>
          </div>
          <div className="col md-8">

          </div>
          </div>
    </div>
  );
}

export default App;
