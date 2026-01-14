import { Spinner } from "react-bootstrap";

function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <Spinner animation="border" role="status" />
      <p className="mt-3">{text}</p>
    </div>
  );
}

export default LoadingSpinner;
