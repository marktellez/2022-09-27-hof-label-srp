export default function withErrorMessage(Component) {
  return function WrappedComponent({ error, ...rest }) {
    return (
      <>
        <Component {...rest} />
        {error && <div className="text-red-600">{error}</div>}
      </>
    );
  };
}
