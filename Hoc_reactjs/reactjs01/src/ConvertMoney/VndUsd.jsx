// eslint-disable-next-line react/prop-types
export default function VndUsd({ value, onChange }) {
  return (
    <div>
      <input
        type="number"
        placeholder="VND"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
