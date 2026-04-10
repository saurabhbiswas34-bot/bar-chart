import './BarChar.css';

const bars = [
  { id: 'dep1', value: 100 },
  { id: 'dept2', value: 20 },
];

const MIN = 0;
const MAX = 100;
const Y_TICKS = [100, 80, 60, 40, 20, 0];

export default function BarChar() {
  const plotColumns = `repeat(${bars.length}, 1fr)`;

  return (
    <section className="bar-chart">
      <div className="bar-layout">
        <div className="y-axis">
          {Y_TICKS.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
        <div className="bar-plot" style={{ gridTemplateColumns: plotColumns }}>
          {bars.map((item) => {
            const barValue = Math.min(Math.max(Number(item.value), MIN), MAX);

            return (
              <div key={item.id} className="bar-item">
                <div
                  className="bar-column"
                  style={{ height: `${barValue}%` }}
                  title={`${item.id}: ${barValue}%`}
                />
                <span className="bar-label">{item.id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
