import { houseLights } from "./lights";
import heroPhoto from "./assets/hero-photo.jpg";

function getSafeToggleUrl(value: string | undefined): string | null {
  if (!value?.trim()) {
    return null;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function runRoutine(url: string) {
  const frame = document.createElement("iframe");
  frame.hidden = true;
  frame.title = "Routine activation";
  frame.setAttribute("sandbox", "");
  frame.addEventListener("load", () => frame.remove(), { once: true });
  frame.src = url;
  document.body.append(frame);
  window.setTimeout(() => frame.remove(), 15_000);
}

export default function App() {
  return (
    <main className="dashboard">
      <header className="page-header">
        <img className="hero-photo" src={heroPhoto} alt="" />
      </header>

      {houseLights.length === 0 ? (
        <section className="empty-state" aria-labelledby="empty-title">
          <div className="empty-icon" aria-hidden="true">
            ✦
          </div>
          <h2 id="empty-title">No lights added yet</h2>
          <p>
            Add your lights in <code>src/lights.ts</code> to see their controls
            here.
          </p>
        </section>
      ) : (
        <section className="controls-section" aria-labelledby="controls-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">SMART HOME</p>
              <h2 id="controls-title">Your controls</h2>
            </div>
            <span className="count-badge">
              {houseLights.length}{" "}
              {houseLights.length === 1 ? "control" : "controls"}
            </span>
          </div>
          <ul className="light-grid">
            {houseLights.map((light, index) => {
              const url = getSafeToggleUrl(light.toggleUrl);
              const onUrl = getSafeToggleUrl(light.onUrl);
              const offUrl = getSafeToggleUrl(light.offUrl);
              const name = light.displayName.trim() || "Unnamed light";
              const helpId = `light-help-${index}`;

              return (
                <li className="light-item" key={`${name}-${index}`}>
                  {light.onUrl !== undefined || light.offUrl !== undefined ? (
                    <div className="dual-control-card">
                      <div className="dual-control-heading">
                        <span className="light-symbol" aria-hidden="true">
                          ✦
                        </span>
                        <span className="control-name">{name}</span>
                      </div>
                      <div className="action-button-row">
                        <button
                          className="action-button action-on"
                          type="button"
                          disabled={!onUrl}
                          onClick={() => onUrl && runRoutine(onUrl)}
                          aria-label={`Turn ${name} on`}
                          aria-describedby={!onUrl ? helpId : undefined}
                        >
                          On
                        </button>
                        <button
                          className="action-button action-off"
                          type="button"
                          disabled={!offUrl}
                          onClick={() => offUrl && runRoutine(offUrl)}
                          aria-label={`Turn ${name} off`}
                          aria-describedby={!offUrl ? helpId : undefined}
                        >
                          Off
                        </button>
                      </div>
                      {(!onUrl || !offUrl) && (
                        <p className="configuration-hint" id={helpId}>
                          Add a valid {(!onUrl && !offUrl) ? "On and Off" : !onUrl ? "On" : "Off"}{" "}
                          URL in <code>src/lights.ts</code>.
                        </p>
                      )}
                    </div>
                  ) : url ? (
                    <button
                      className="light-control"
                      type="button"
                      onClick={() => runRoutine(url)}
                      aria-label={`Run ${name} routine`}
                    >
                      <span className="light-symbol" aria-hidden="true">
                        ✦
                      </span>
                      <span className="control-copy">
                        <span className="control-name">{name}</span>
                        <span className="control-action">Run routine</span>
                      </span>
                      <span className="open-symbol" aria-hidden="true">
                        →
                      </span>
                    </button>
                  ) : (
                    <>
                      <button
                        className="light-control"
                        type="button"
                        disabled
                        aria-describedby={helpId}
                      >
                        <span className="light-symbol" aria-hidden="true">
                          ✦
                        </span>
                        <span className="control-copy">
                          <span className="control-name">{name}</span>
                          <span className="control-action">Link needed</span>
                        </span>
                        <span className="open-symbol" aria-hidden="true">
                          ↗
                        </span>
                      </button>
                      <p className="configuration-hint" id={helpId}>
                        Add a valid http(s) URL in <code>src/lights.ts</code>.
                      </p>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}
