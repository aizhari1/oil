import * as THREE from "three";

function paint(draw: (g: CanvasRenderingContext2D, w: number, h: number) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  if (!g) return null;
  draw(g, 512, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

let clad: THREE.CanvasTexture | null = null;
let conc: THREE.CanvasTexture | null = null;

export function cladMap() {
  if (typeof document === "undefined") return null;
  if (!clad) {
    clad = paint((g, w, h) => {
      g.fillStyle = "#d7dee3";
      g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 3) {
        const shade = 220 + ((y * 13) % 18);
        g.fillStyle = `rgb(${shade},${shade + 2},${shade + 6})`;
        g.fillRect(0, y, w, 2);
      }
      for (let y = 8; y < h; y += 64) {
        g.fillStyle = "rgba(55,68,78,0.55)";
        g.fillRect(0, y, w, 4);
        g.fillStyle = "rgba(255,255,255,0.45)";
        g.fillRect(0, y + 4, w, 1);
      }
      for (let x = 20; x < w; x += 86) {
        g.fillStyle = "rgba(50,62,72,0.22)";
        g.fillRect(x, 0, 2, h);
      }
    });
  }
  return clad;
}

export function concMap() {
  if (typeof document === "undefined") return null;
  if (!conc) {
    conc = paint((g, w, h) => {
      g.fillStyle = "#c9cdc4";
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1800; i++) {
        const x = (i * 97) % w;
        const y = (i * 57) % h;
        const v = 170 + (i % 40);
        g.fillStyle = `rgba(${v},${v - 2},${v - 8},0.35)`;
        g.fillRect(x, y, 2, 2);
      }
      g.strokeStyle = "rgba(120,124,112,0.35)";
      g.lineWidth = 2;
      for (let x = 0; x < w; x += 128) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x, h);
        g.stroke();
      }
      for (let y = 0; y < h; y += 128) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(w, y);
        g.stroke();
      }
    });
  }
  return conc;
}
