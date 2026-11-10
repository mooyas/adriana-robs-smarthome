import { houseLights, lightColorPresets } from "./lights";
import heroPhoto from "./assets/hero-photo.jpg";

function LightIcon({ name }: { name: string }) {
  const label = name.toLowerCase();

  if (label.includes("enter home")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 20V4.5h11V20M15.5 12h4v8h-4M8 8h4M8 11.5h4M8 15h2" />
        <circle cx="12.8" cy="16.5" r=".65" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "home") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 10 9-7 9 7v10.5h-6v-6h-6v6H3z" />
      </svg>
    );
  }

  if (label.includes("stair")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 19.5h5v-4h5v-4h5v-4h2M3.5 19.5V16h5M8.5 15.5v-4h5M13.5 11.5v-4h5" />
      </svg>
    );
  }

  if (label.includes("dining")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 10h14v2H5zM7 12v7m10-7v7M8 6v2m4-3v3m4-2v2" />
        <path d="M4 8.5h16" />
      </svg>
    );
  }

  if (label.includes("turn all") || label.includes("off")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3.5v8" />
        <path d="M7 6.7a8 8 0 1 0 10 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6m-5 3h4m-5-6.2a7 7 0 1 1 6 0c-.8.5-1 1.1-1 1.7h-4c0-.6-.2-1.2-1-1.7Z" />
      <path d="M12 2v2m8.5 7h-2M5.5 11h-2" />
    </svg>
  );
}

function ActionIcon({ action }: { action: "on" | "off" | "run" | "half" }) {
  if (action === "half") {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M10 2.5a7.5 7.5 0 0 0 0 15z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (action === "off") {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2.5v6" />
        <path d="M6.3 4.9a6 6 0 1 0 7.4 0" />
      </svg>
    );
  }

  if (action === "on") {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="10" cy="10" r="3.3" />
        <path d="M10 1.5v2m0 13v2m8.5-8.5h-2m-13 0h-2m14.5-6-1.4 1.4m-9.2 9.2L3.5 16m13 0-1.4-1.4m-9.2-9.2L4.5 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10h13m-5-5 5 5-5 5" />
    </svg>
  );
}

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
            <LightIcon name="Home" />
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
              const brightness50Url = getSafeToggleUrl(light.brightness50Url);
              const name = light.displayName.trim() || "Unnamed light";
              const helpId = `light-help-${index}`;

              return (
                <li className="light-item" key={`${name}-${index}`}>
                  {light.onUrl !== undefined ||
                  light.offUrl !== undefined ||
                  light.brightness50Url !== undefined ? (
                    <div className="dual-control-card">
                      <div className="dual-control-heading">
                        <span className="light-symbol" aria-hidden="true">
                          <LightIcon name={name} />
                        </span>
                        <span className="control-name">{name}</span>
                      </div>
                      <div
                        className={`action-button-row${light.brightness50Url !== undefined ? " action-button-row-three" : ""}`}
                      >
                        <button
                          className="action-button action-on"
                          type="button"
                          disabled={!onUrl}
                          onClick={() => onUrl && runRoutine(onUrl)}
                          aria-label={`Turn ${name} on`}
                          aria-describedby={!onUrl ? helpId : undefined}
                        >
                          <ActionIcon action="on" />
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
                          <ActionIcon action="off" />
                          Off
                        </button>
                        {light.brightness50Url !== undefined && (
                          <button
                            className="action-button action-half"
                            type="button"
                            disabled={!brightness50Url}
                            onClick={() =>
                              brightness50Url && runRoutine(brightness50Url)
                            }
                            aria-label={`Set ${name} lights to 50% brightness`}
                          >
                            <ActionIcon action="half" />
                            50%
                          </button>
                        )}
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
                        <LightIcon name={name} />
                      </span>
                      <span className="control-copy">
                        <span className="control-name">{name}</span>
                        <span className="control-action">Run routine</span>
                      </span>
                      <span className="open-symbol">
                        <ActionIcon action="run" />
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
                          <LightIcon name={name} />
                        </span>
                        <span className="control-copy">
                          <span className="control-name">{name}</span>
                          <span className="control-action">Link needed</span>
                        </span>
                        <span className="open-symbol">
                          <ActionIcon action="run" />
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

      {lightColorPresets.length > 0 && (
        <section className="controls-section color-section" aria-labelledby="color-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">SET THE MOOD</p>
              <h2 id="color-title">Light colours</h2>
            </div>
          </div>
          <ul className="color-grid" aria-label="Whole-home light color presets">
            {lightColorPresets.map((preset) => (
              <li key={preset.displayName}>
                <button
                  className="color-preset"
                  type="button"
                  onClick={() => runRoutine(preset.url)}
                  aria-label={`Set all lights to ${preset.displayName.toLowerCase()}`}
                >
                  <span
                    className="color-swatch"
                    style={{ background: preset.color }}
                    aria-hidden="true"
                  />
                  <span className="control-copy">
                    <span className="control-name">{preset.displayName}</span>
                    <span className="control-action">All lights</span>
                  </span>
                  <span className="open-symbol">
                    <ActionIcon action="run" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
