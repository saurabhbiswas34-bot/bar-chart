import './index.css';

const MIN = 0;
const MAX = 100;

function ProgressBar({ value }) {
  const clamped = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${clamped}%` }}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={MIN}
        aria-valuemax={MAX}>
        {clamped}%
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="wrapper">
      <ProgressBar value={72} />
    </main>
  );
}
