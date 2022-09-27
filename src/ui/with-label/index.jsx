export default function withLabel(Component) {
  return function WrappedComponent({ label, ...rest }) {
    return (
      <>
        <label className="block">{label}</label>
        <Component {...rest} />
      </>
    );
  };
}
