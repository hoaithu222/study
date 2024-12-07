export default function UsdVnd({ value, onChange }) {
  return (
    <div>
      <input
        type="number"
        placeholder="USD"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
