import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Yikes</h1>
      <p>It appears that the unthinkable has happened. This is not where you want to be!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
