export default function TextField({ value, onChange = () => {} }) {
  return (
    <input
      className="text-gray-900 border rounded-md p-2"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
