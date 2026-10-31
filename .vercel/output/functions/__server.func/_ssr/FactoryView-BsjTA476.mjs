import { i as __toESM } from "../_runtime.mjs";
import { a as useThree, c as Matrix4, d as require_jsx_runtime, f as require_react, i as useFrame, l as Quaternion, n as OrbitControls, r as Canvas, s as CylinderGeometry, t as ContactShadows, u as Vector3 } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FactoryView-BsjTA476.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EQUIPMENT = [
	{
		tag: "T-101",
		name: "Receiving pit",
		service: "Raw feed, 100 t per batch",
		unit: "PS-01",
		type: "RC pit 8.0 × 5.0 m + dry gallery 8.0 × 3.5 m",
		status: "CURRENT Rev.2",
		dimStatus: "verified",
		source: "PS01-DB Rev.2",
		notes: "Weir 1.40 m. Mean floor EL −3.30. Gallery floor EL −3.80.",
		pos: [
			0,
			0,
			0
		],
		kind: "pit"
	},
	{
		tag: "T-201",
		name: "Heated settling tank 1",
		service: "108 t at 80 °C",
		unit: "PS-02",
		type: "Vertical cone-bottom, insulated, 8 legs",
		diameter: 7,
		height: 7.5,
		volume: 144,
		emptyWt: 11.2,
		status: "CURRENT",
		dimStatus: "approximate",
		source: "PS02-DB Rev P1",
		notes: "Diameter taken as 7.0 m from later extracts (schedule variants show 5.60 m).",
		pos: [
			22,
			0,
			-14
		],
		kind: "settling"
	},
	{
		tag: "T-202",
		name: "Heated settling tank 2",
		service: "108 t at 80 °C",
		unit: "PS-02",
		type: "Vertical cone-bottom, insulated, 8 legs",
		diameter: 7,
		height: 7.5,
		volume: 144,
		emptyWt: 11.2,
		status: "CURRENT",
		dimStatus: "approximate",
		source: "PS02-DB Rev P1",
		pos: [
			22,
			0,
			-5
		],
		kind: "settling"
	},
	{
		tag: "T-203",
		name: "Heated settling tank 3",
		service: "108 t at 80 °C",
		unit: "PS-02",
		type: "Vertical cone-bottom, insulated, 8 legs",
		diameter: 7,
		height: 7.5,
		volume: 144,
		emptyWt: 11.2,
		status: "CURRENT",
		dimStatus: "approximate",
		source: "PS02-DB Rev P1",
		pos: [
			22,
			0,
			5
		],
		kind: "settling"
	},
	{
		tag: "T-204",
		name: "Heated settling tank 4",
		service: "108 t at 80 °C",
		unit: "PS-02",
		type: "Vertical cone-bottom, insulated, 8 legs",
		diameter: 7,
		height: 7.5,
		volume: 144,
		emptyWt: 11.2,
		status: "CURRENT",
		dimStatus: "approximate",
		source: "PS02-DB Rev P1",
		pos: [
			22,
			0,
			14
		],
		kind: "settling"
	},
	{
		tag: "V-301",
		name: "Main separator",
		service: "Vacuum separator, 90 °C bulk",
		unit: "PS-03",
		type: "Vertical, cone bottom, F&D top head",
		diameter: 5.294,
		height: 10.82,
		volume: 198,
		emptyWt: 46,
		status: "FROZEN",
		dimStatus: "verified",
		source: "PS03-DB Rev P18",
		notes: "Shell 25 mm full vacuum. Includes trays T-1 to T-6, flash box and demister. Heaviest lift.",
		pos: [
			52,
			0,
			0
		],
		kind: "separator"
	},
	{
		tag: "TK-601",
		name: "Product storage A",
		service: "200 t blended product",
		unit: "PS-06",
		type: "Atmospheric, flat bottom, cone roof",
		diameter: 6.4,
		height: 8.3,
		volume: 267,
		emptyWt: 12.6,
		status: "FROZEN",
		dimStatus: "verified",
		source: "PFD Sheet 2, closed 16-Oct-2026",
		pos: [
			82,
			0,
			-9
		],
		kind: "tank"
	},
	{
		tag: "TK-602",
		name: "Product storage B",
		service: "200 t blended product",
		unit: "PS-06",
		type: "Atmospheric, flat bottom, cone roof",
		diameter: 6.4,
		height: 8.3,
		volume: 267,
		emptyWt: 12.6,
		status: "FROZEN",
		dimStatus: "verified",
		source: "PFD Sheet 2, closed 16-Oct-2026",
		pos: [
			82,
			0,
			9
		],
		kind: "tank"
	},
	{
		tag: "TK-801",
		name: "Diesel bulk tank",
		service: "Diesel / solar, about 2 days",
		unit: "Utilities",
		type: "Atmospheric cone roof, bunded",
		diameter: 3.6,
		height: 5,
		volume: 51,
		emptyWt: 4.2,
		status: "CURRENT",
		dimStatus: "assumed",
		source: "PFD Sheet 2 utilities",
		pos: [
			62,
			0,
			24
		],
		kind: "tank"
	}
];
var VIEWS = {
	overview: {
		label: "Overview",
		pos: [
			36,
			52,
			88
		],
		target: [
			40,
			1,
			2
		]
	},
	ps01: {
		label: "PS-01 Pit",
		pos: [
			14,
			12,
			18
		],
		target: [
			0,
			0,
			2
		]
	},
	ps02: {
		label: "PS-02 Tanks",
		pos: [
			38,
			16,
			8
		],
		target: [
			22,
			4,
			0
		]
	},
	ps03: {
		label: "V-301",
		pos: [
			68,
			14,
			16
		],
		target: [
			52,
			6,
			0
		]
	},
	ps06: {
		label: "Storage",
		pos: [
			98,
			16,
			18
		],
		target: [
			82,
			4,
			0
		]
	}
};
var STEEL = "#5c6b78";
var STEEL_HI = "#7d8e9c";
var CLAD = "#d5dde4";
var CLAD_HI = "#eef3f6";
var SKIRT = "#2c3640";
var OIL = "#6b5340";
var PRODUCT = "#3d5c4a";
var BRASS = "#c9a36a";
function steelMat(selected, base, hi) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: selected ? hi : base,
		metalness: .45,
		roughness: .42,
		emissive: selected ? BRASS : "#000000",
		emissiveIntensity: selected ? .18 : 0
	});
}
function Settling({ item, selected, onSelect }) {
	const d = item.diameter ?? 7;
	const h = item.height ?? 7.5;
	const r = d / 2;
	const shellH = h * .58;
	const coneH = h * .28;
	const roofH = h * .14;
	const legH = 1.3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: item.pos,
		onClick: (e) => {
			e.stopPropagation();
			onSelect(item.tag);
		},
		children: [
			Array.from({ length: 8 }).map((_, i) => {
				const a = i / 8 * Math.PI * 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						Math.cos(a) * r * .78,
						legH / 2,
						Math.sin(a) * r * .78
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.09,
						.13,
						legH,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: SKIRT,
						metalness: .7,
						roughness: .35
					})]
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					legH + coneH / 2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r,
					.35,
					coneH,
					28
				] }), steelMat(selected, STEEL, STEEL_HI)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					legH + coneH + shellH / 2,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r + .08,
					r + .08,
					shellH,
					40
				] }), steelMat(selected, CLAD, CLAD_HI)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					legH + coneH + shellH + roofH / 2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					r + .1,
					roofH,
					28
				] }), steelMat(selected, CLAD, CLAD_HI)]
			})
		]
	});
}
function Separator({ item, selected, onSelect }) {
	const r = (item.diameter ?? 5.294) / 2;
	const h = item.height ?? 10.82;
	const cylH = h * .7;
	const coneH = h * .2;
	const skirtH = 1.6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: item.pos,
		onClick: (e) => {
			e.stopPropagation();
			onSelect(item.tag);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					skirtH / 2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r * .92,
					r * 1.02,
					skirtH,
					28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: SKIRT,
					metalness: .65,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					skirtH + coneH / 2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r,
					r * .12,
					coneH,
					28
				] }), steelMat(selected, STEEL, STEEL_HI)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					skirtH + coneH + cylH / 2,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r,
					r,
					cylH,
					40
				] }), steelMat(selected, STEEL, STEEL_HI)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					skirtH + coneH + cylH + .35,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					r,
					28,
					14,
					0,
					Math.PI * 2,
					0,
					Math.PI * .4
				] }), steelMat(selected, STEEL_HI, CLAD)]
			})
		]
	});
}
function AtmTank({ item, selected, onSelect }) {
	const r = (item.diameter ?? 6) / 2;
	const h = item.height ?? 8;
	const shellH = h * .82;
	const roofH = h * .18;
	const legH = 1.1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: item.pos,
		onClick: (e) => {
			e.stopPropagation();
			onSelect(item.tag);
		},
		children: [
			[
				0,
				1,
				2,
				3
			].map((i) => {
				const a = i / 4 * Math.PI * 2 + Math.PI / 4;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						Math.cos(a) * r * .72,
						legH / 2,
						Math.sin(a) * r * .72
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.1,
						.14,
						legH,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: SKIRT,
						metalness: .75,
						roughness: .35
					})]
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					legH + shellH / 2,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					r,
					r,
					shellH,
					40
				] }), steelMat(selected, STEEL, STEEL_HI)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					legH + shellH + roofH / 2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					r * 1.04,
					roofH,
					28
				] }), steelMat(selected, STEEL_HI, CLAD)]
			})
		]
	});
}
function Pit({ onSelect, selected }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect("T-101");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-1.4,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				8.2,
				2.8,
				5.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: selected ? "#6d7c88" : "#3d4a55",
				roughness: .9,
				metalness: .05,
				emissive: selected ? BRASS : "#000000",
				emissiveIntensity: selected ? .12 : 0
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-1.1,
				4.6
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				8.2,
				2.2,
				3.5
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#4a5762",
				roughness: .88
			})]
		})]
	});
}
function Bund({ x, z, w, d }) {
	const h = 1.15;
	const t = .28;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			x,
			0,
			z
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.04,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [w, d] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#24303a",
				roughness: .95
			})]
		}), [
			[
				0,
				h / 2,
				d / 2,
				w,
				h,
				t
			],
			[
				0,
				h / 2,
				-d / 2,
				w,
				h,
				t
			],
			[
				w / 2,
				h / 2,
				0,
				t,
				h,
				d
			],
			[
				-w / 2,
				h / 2,
				0,
				t,
				h,
				d
			]
		].map(([px, py, pz, sx, sy, sz], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				px,
				py,
				pz
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				sx,
				sy,
				sz
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#5a6874",
				roughness: .82
			})]
		}, i))]
	});
}
function Pipe({ a, b, r, color }) {
	const geo = (0, import_react.useMemo)(() => {
		const start = new Vector3(...a);
		const end = new Vector3(...b);
		const mid = start.clone().add(end).multiplyScalar(.5);
		const len = start.distanceTo(end);
		const g = new CylinderGeometry(r, r, len, 10);
		const m = new Matrix4();
		const q = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), end.clone().sub(start).normalize());
		m.compose(mid, q, new Vector3(1, 1, 1));
		g.applyMatrix4(m);
		return g;
	}, [
		a,
		b,
		r
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		geometry: geo,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color,
			metalness: .55,
			roughness: .35
		})
	});
}
function Rig({ view }) {
	const { camera, controls } = useThree();
	const started = (0, import_react.useRef)(0);
	const fromPos = (0, import_react.useRef)(new Vector3());
	const fromTarget = (0, import_react.useRef)(new Vector3(42, 2, 0));
	const active = (0, import_react.useRef)(true);
	const prev = (0, import_react.useRef)(null);
	const reduce = (0, import_react.useMemo)(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
	useFrame((_, dt) => {
		if (prev.current !== view) {
			prev.current = view;
			fromPos.current.copy(camera.position);
			const orbit = controls;
			if (orbit?.target) fromTarget.current.copy(orbit.target);
			started.current = 0;
			active.current = true;
		}
		if (!active.current) return;
		const g = VIEWS[view];
		const dest = new Vector3(...g.pos);
		const look = new Vector3(...g.target);
		const orbit = controls;
		if (reduce) {
			camera.position.copy(dest);
			if (orbit?.target) orbit.target.copy(look);
			camera.lookAt(look);
			active.current = false;
			return;
		}
		started.current += dt;
		const t = Math.min(1, started.current / 1.15);
		const ease = 1 - (1 - t) ** 3;
		camera.position.lerpVectors(fromPos.current, dest, ease);
		if (orbit?.target) orbit.target.lerpVectors(fromTarget.current, look, ease);
		camera.lookAt(orbit?.target ?? look);
		if (t >= 1) active.current = false;
	});
	return null;
}
function Plant({ selected, view, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rig, { view }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#0b1014"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#0b1014",
				70,
				180
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .38 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				40,
				55,
				28
			],
			intensity: 1.35,
			castShadow: true,
			"shadow-mapSize": [1024, 1024]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", {
			intensity: .28,
			color: "#c5d0da",
			groundColor: "#1a2229"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				42,
				0,
				2
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [150, 90] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#12181e",
				roughness: .96
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bund, {
			x: 22,
			z: 0,
			w: 26,
			d: 36
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bund, {
			x: 82,
			z: 0,
			w: 22,
			d: 24
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bund, {
			x: 62,
			z: 24,
			w: 12,
			d: 12
		}),
		EQUIPMENT.map((item) => {
			const on = selected === item.tag;
			if (item.kind === "pit") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pit, {
				selected: on,
				onSelect
			}, item.tag);
			if (item.kind === "settling") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settling, {
				item,
				selected: on,
				onSelect
			}, item.tag);
			if (item.kind === "separator") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
				item,
				selected: on,
				onSelect
			}, item.tag);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtmTank, {
				item,
				selected: on,
				onSelect
			}, item.tag);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipe, {
			a: [
				6,
				1.4,
				0
			],
			b: [
				16,
				2,
				-8
			],
			r: .16,
			color: OIL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipe, {
			a: [
				28,
				2.2,
				0
			],
			b: [
				46,
				3,
				0
			],
			r: .15,
			color: OIL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipe, {
			a: [
				56,
				3.5,
				0
			],
			b: [
				76,
				2.6,
				-7
			],
			r: .18,
			color: PRODUCT
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipe, {
			a: [
				56,
				3.5,
				0
			],
			b: [
				76,
				2.6,
				7
			],
			r: .18,
			color: PRODUCT
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				42,
				.02,
				2
			],
			opacity: .38,
			scale: 120,
			blur: 2.4,
			far: 22
		})
	] });
}
var STATUS_CLASS = {
	verified: "text-ok",
	approximate: "text-warn",
	assumed: "text-accent"
};
function FactoryView() {
	const [selected, setSelected] = (0, import_react.useState)("V-301");
	const [view, setView] = (0, import_react.useState)("overview");
	const item = EQUIPMENT.find((e) => e.tag === selected) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
					shadows: true,
					dpr: [1, 1.5],
					camera: {
						position: [
							36,
							52,
							88
						],
						fov: 40,
						near: .1,
						far: 500
					},
					onPointerMissed: () => setSelected(null),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: null,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plant, {
							selected,
							view,
							onSelect: setSelected
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
						makeDefault: true,
						enableDamping: true,
						dampingFactor: .08,
						maxPolarAngle: Math.PI / 2.05,
						minDistance: 8,
						maxDistance: 160,
						target: [
							42,
							2,
							0
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 p-4 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.18em] text-accent",
						children: "IFR · 200 t/day dry oil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-none font-semibold tracking-wide text-fg sm:text-5xl",
						children: "SEVERO WM OIL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-md text-sm text-muted",
						children: "Waste marine oil to cement-kiln fuel. Click a vessel. Dimensions follow the vessel schedule."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "absolute top-28 left-4 z-10 flex max-w-[calc(100%-2rem)] flex-wrap gap-2 sm:top-32 sm:left-6",
				children: Object.keys(VIEWS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView(id),
					className: "min-h-11 rounded-full border px-4 text-sm " + (view === id ? "border-accent bg-surface text-accent" : "border-border bg-surface/80 text-muted"),
					children: VIEWS[id].label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "absolute right-4 bottom-4 left-4 z-10 max-h-[42vh] overflow-auto rounded-xl border border-border bg-surface/92 p-4 sm:top-28 sm:right-6 sm:bottom-auto sm:left-auto sm:w-80 sm:max-h-[70vh]",
				children: [item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-wide text-accent",
							children: [
								item.unit,
								" · ",
								item.status
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl leading-none",
							children: item.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Service",
									v: item.service
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Type",
									v: item.type
								}),
								item.diameter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Diameter",
									v: `${item.diameter} m`
								}) : null,
								item.height ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Height",
									v: `${item.height} m`
								}) : null,
								item.volume ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Volume",
									v: `${item.volume} m³`
								}) : null,
								item.emptyWt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Empty steel",
									v: `${item.emptyWt} t`
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pt-1 text-sm font-medium " + STATUS_CLASS[item.dimStatus],
							children: ["Dimension status: ", item.dimStatus]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted",
							children: item.source
						}),
						item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-t border-border pt-2 text-sm text-muted",
							children: item.notes
						}) : null
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Select a vessel to read its schedule data."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid grid-cols-2 gap-1 border-t border-border pt-3",
					children: EQUIPMENT.map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSelected(eq.tag);
							if (eq.unit === "PS-01") setView("ps01");
							else if (eq.unit === "PS-02") setView("ps02");
							else if (eq.unit === "PS-03") setView("ps03");
							else if (eq.unit === "PS-06") setView("ps06");
						},
						className: "min-h-11 w-full rounded-md px-2 text-left font-mono text-xs " + (selected === eq.tag ? "bg-surface-2 text-accent" : "text-fg"),
						children: eq.tag
					}) }, eq.tag))
				})]
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "w-24 shrink-0 text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v })]
	});
}
//#endregion
export { FactoryView };
