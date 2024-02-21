import {useRouteError} from "react-router-dom";

// function to print error if user hit wrong route
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">Back to home page</a>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
