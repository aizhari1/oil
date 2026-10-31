import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EQUIPMENT, VIEWS, type ViewId } from "./equipment";
import { Plant } from "./Plant";

const ORDER = Object.keys(VIEWS) as ViewId[];

type Shot = { pos: [number, number, number]; target: [number, number, number] };

function shotFor(tag: string): Shot | null {
  const eq = EQUIPMENT.find((e) => e.tag === tag);
  if (!eq) return null;
  if (eq.kind === "separator") {
    return { pos: [eq.pos[0], 7.4, eq.pos[2] + 16], target: [eq.pos[0], 7.4, eq.pos[2]] };
  }
  if (eq.kind === "effluent") {
    return { pos: [eq.pos[0] + 2, 7, eq.pos[2] + 12], target: [eq.pos[0], -0.8, eq.pos[2]] };
  }
  if (eq.kind === "settling") {
    return { pos: [eq.pos[0], 4.8, eq.pos[2] + 13], target: [eq.pos[0], 4.8, eq.pos[2]] };
  }
  const y = (eq.height ?? 5) * 0.4;
  return { pos: [eq.pos[0], y, eq.pos[2] + 12], target: [eq.pos[0], y, eq.pos[2]] };
}

export function FactoryView() {
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<ViewId>("site");
  const [open, setOpen] = useState(true);
  const [about, setAbout] = useState(false);
  const [mode, setMode] = useState<"orbit" | "walk">("orbit");
  const [tour, setTour] = useState(false);
  const [tags, setTags] = useState(true);
  const [shot, setShot] = useState<Shot | null>(null);
  const item = EQUIPMENT.find((e) => e.tag === selected) ?? null;
  const ps03 = view.startsWith("ps03");

  useEffect(() => {
    if (!tour) return;
    const id = window.setInterval(() => {
      setShot(null);
      setView((current) => {
        const i = ORDER.indexOf(current);
        return ORDER[(i + 1) % ORDER.length];
      });
    }, 4800);
    return () => window.clearInterval(id);
  }, [tour]);

  return (
    <main className="spatial">
      <div className="viewport">
        <Canvas
          shadows
          dpr={[1, 1.6]}
          gl={{ localClippingEnabled: true }}
          camera={{ position: [28, 36, 78], fov: 38, near: 0.1, far: 400 }}
          onPointerMissed={() => {
            setSelected(null);
            setShot(null);
          }}
        >
          <Suspense fallback={null}>
            <Plant
              selected={selected}
              view={view}
              onSelect={(tag) => {
                setSelected(tag);
                setShot(shotFor(tag));
              }}
              showTags={tags}
              walking={mode === "walk"}
              shot={shot}
            />
          </Suspense>
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.08}
            maxPolarAngle={Math.PI / 2.05}
            minDistance={mode === "walk" ? 0.4 : 6}
            maxDistance={180}
            target={[40, 2, 2]}
            enableZoom={mode === "orbit"}
            enablePan={mode === "orbit"}
          />
        </Canvas>
      </div>

      <header className="topbar">
        <a className="brand" href="#top" onClick={(e) => e.preventDefault()}>
          <span className="brandmark" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <strong>
            SEVERO
            <span>SPATIAL EXPERIENCE</span>
          </strong>
        </a>
        <div className="project-title">
          <span className="live-dot" />
          WM OIL PROJECT
          <span>
            <span className="slash">/</span>PRELIMINARY VISUALIZATION · REV P0
          </span>
        </div>
        <button className="icon" type="button" aria-label="About this model" title="About this model" onClick={() => setAbout(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v6M12 8h.01" />
          </svg>
        </button>
      </header>

      <div className="heading">
        <div className="eyebrow">
          SITE EXPLORER
          <span>{ps03 ? "03 — SEPARATOR / GA REV P1" : "01 — RECEPTION / REV.2 INTERNALS"}</span>
        </div>
        <h1>{ps03 ? "PS-03. Main Separator V-301." : "SEVERO. One connected site."}</h1>
        <p>
          {ps03
            ? "Cutaway follows LAY-001: trays, flash box, demister, and the oil-film path."
            : "PS-01 reception · PS-02 settling · PS-03 separation."}
        </p>
      </div>

      <aside className={open ? "explorer" : "explorer collapsed"}>
        <button className="panel-title" type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M4 7h16M4 12h10M4 17h16" />
            </svg>
            Explore the facility
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? <path d="M6 14l6-6 6 6" /> : <path d="M6 10l6 6 6-6" />}
          </svg>
        </button>
        {open ? (
          <>
            <div className="section-label">SAVED PERSPECTIVES</div>
            <nav>
              {ORDER.map((id, i) => (
                <button
                  key={id}
                  type="button"
                  className={view === id ? "view-card active" : "view-card"}
                  onClick={() => {
                    setShot(null);
                    setView(id);
                  }}
                >
                  <span className="view-number">0{i + 1}</span>
                  <span>
                    <b>{VIEWS[id].label}</b>
                    <small>{VIEWS[id].sub}</small>
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              ))}
            </nav>
            <div className="divider" />
            <div className="section-label">KEY EQUIPMENT {String(EQUIPMENT.length).padStart(2, "0")}</div>
            <div className="equipment-grid">
              {EQUIPMENT.map((eq) => (
                <button
                  key={eq.tag}
                  type="button"
                  className={selected === eq.tag ? "chosen" : ""}
                  onClick={() => {
                    setSelected(eq.tag);
                    setShot(shotFor(eq.tag));
                  }}
                >
                  <i className="tiny-dot" />
                  {eq.tag}
                </button>
              ))}
            </div>
            <div className="panel-foot">
              Drawing-based masses
              <b>IFR</b>
            </div>
          </>
        ) : null}
      </aside>

      {item ? (
        <aside className="detail-card">
          <button className="close" type="button" aria-label="Close equipment details" onClick={() => { setSelected(null); setShot(null); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <h3>{item.unit}</h3>
          <h2>{item.tag}</h2>
          <p>{item.name}. {item.service}</p>
          <div className="detail-spec">
            {item.diameter ? <div>Diameter {item.diameter} m</div> : null}
            {item.height ? <div>Height {item.height} m</div> : null}
            {item.volume ? <div>Volume {item.volume} m³</div> : null}
            {item.emptyWt ? <div>Empty steel {item.emptyWt} t</div> : null}
            <div>{item.type}</div>
          </div>
          <small>
            {selected
              ? "Shell open. Click empty ground to close."
              : null}{" "}
            {item.dimStatus} · {item.source}
            {item.notes ? ` · ${item.notes}` : ""}
          </small>
        </aside>
      ) : null}

      <div className="bottom">
        <div className="mode-switch">
          <button type="button" className={mode === "orbit" ? "selected" : ""} onClick={() => setMode("orbit")}>
            Orbit mode
          </button>
          <button type="button" className={mode === "walk" ? "selected" : ""} onClick={() => setMode("walk")}>
            Walk mode
          </button>
        </div>
        <button type="button" className={tour ? "tour-button on" : "tour-button"} onClick={() => setTour((v) => !v)}>
          {tour ? "Stop tour" : "Take a guided tour"}
          <span className="tour-duration">7 VIEWS</span>
        </button>
        <button
          className="reset"
          type="button"
          aria-label="Reset view"
          title="Reset view"
          onClick={() => {
            setView("site");
            setSelected(null);
            setTour(false);
            setMode("orbit");
            setShot(null);
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v5h5" />
          </svg>
        </button>
        <button className="reset" type="button" aria-label="Toggle equipment tags" title="Toggle equipment tags" onClick={() => setTags((v) => !v)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>
      </div>

      <div className="instruction">
        <div>{mode === "walk" ? "Use arrows to move · Drag to look" : "Drag to orbit · Scroll to zoom · Right-drag to pan"}</div>
        <span>PRELIMINARY VISUALIZATION · REV P0</span>
      </div>

      {about ? (
        <div className="modal-backdrop" onClick={() => setAbout(false)}>
          <div className="about" onClick={(e) => e.stopPropagation()} role="dialog" aria-labelledby="about-title">
            <h2 id="about-title">About this model</h2>
            <p>
              Interactive three-dimensional SEVERO site. Vessel diameters, heights and empty weights follow the
              vessel and equipment schedule. Plot positions are a process sequence, not a surveyed GA coordinate.
            </p>
            <p>PS-01 reception · PS-02 settling · PS-03 separation · PS-06 product storage.</p>
            <div className="about-note">
              Daylight materials are a visualization. They are not a photogrammetry scan of the reference site, and
              V-301 internals are not drawn yet.
            </div>
            <button className="tour-button" type="button" style={{ marginTop: 18 }} onClick={() => setAbout(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
