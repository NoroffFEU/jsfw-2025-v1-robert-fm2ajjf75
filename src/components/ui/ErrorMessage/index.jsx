import { Alert, Button } from "react-bootstrap";

function ErrorMessage({ message, onRetry }) {
  return (
    <Alert variant="danger" className="my-4">
      <p>{message}</p>
      {onRetry && (
        <Button variant="outline-danger" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </Alert>
  );
}

export default ErrorMessage;
