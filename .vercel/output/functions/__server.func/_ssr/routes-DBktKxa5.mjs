import { i as __toESM } from "../_runtime.mjs";
import { d as require_jsx_runtime, f as require_react } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBktKxa5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [View, setView] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./FactoryView-BsjTA476.mjs").then((mod) => {
			if (live) setView(() => mod.FactoryView);
		});
		return () => {
			live = false;
		};
	}, []);
	if (!View) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex h-dvh flex-col justify-end bg-bg p-6 text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.18em] text-accent",
				children: "SEVERO WM OIL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl",
				children: "Loading the plant"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm text-muted",
				children: "Waste marine oil to cement-kiln fuel. The model is coming up."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {});
}
//#endregion
export { Home as component };
