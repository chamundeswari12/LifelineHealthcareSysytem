import { Spinner } from "react-bootstrap";

export default function SpinnerLoading() {
  return (
    <Spinner animation="border" role="status" id="loading">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
