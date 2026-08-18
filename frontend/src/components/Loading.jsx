export default function Loading({ label = "Memuat" }) {
  return (
    <div className="state-msg" role="status" aria-live="polite">
      <span className="eyebrow">{label}</span>
    </div>
  );
}