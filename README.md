# React Monorepo: Video Chat + E‑commerce
A production-ready monorepo that contains **two React apps** and an optional **Node/Express signaling server**:

* `apps/video-chat` – WebRTC-based 1:1 video chat with chat, mute/camera controls, and call links.
* `apps/ecommerce` – Storefront with product listing, cart, checkout, and admin-ready structure.
* `apps/server` – Socket.io signaling server for WebRTC (dev-friendly, deployable).
> Use this as a jumpstart for interview demos, portfolio pieces, or to extend into a full product.
---
## 🔥 Features
### Video Chat
* Peer-to-peer **WebRTC** calls (camera + mic)
* **Socket.io** signaling (create/join room)
* Toggle **mute/camera**, screen share (optional)
* In-call **text chat**
* Basic call **stats** (bitrate/latency) via `getStats` (optional toggle)

### E‑commerce

* Home, Product list, Product details
* **Cart** (Redux Toolkit), **Checkout** flow (mock or Stripe)
* Search, filters, sorting
* Responsive UI (Tailwind), reusable components
* API-ready data layer; swap mock API with real backend easily

### DX / Monorepo

* **Vite** for fast dev/build
* **pnpm** workspaces (supports npm/yarn too)
* TypeScript-ready (can run JS only if preferred)
* ESLint + Prettier
* Git hooks with lint-staged (optional)
* Ready for **Vercel/Netlify/Render** deploys

---
## 🧱 Tech Stack

* React 18, Vite, React Router
* State: Redux Toolkit (ecommerce), Zustand (video UI) – both shown
* Styling: Tailwind CSS + Headless UI (or Radix)
* Realtime: WebRTC, Socket.io (server & client)
* Payments (optional): Stripe Checkout
* Testing: Vitest + React Testing Library
* Lint/Format: ESLint, Prettier

---

## 📦 Repository Structure

```
.
├─ apps/
│  ├─ ecommerce/
│  │  ├─ src/
│  │  │  ├─ components/
│  │  │  ├─ features/ (cart, products)
│  │  │  ├─ pages/ (Home, Product, Cart, Checkout)
│  │  │  ├─ hooks/ utils/
│  │  │  └─ main.tsx
│  │  └─ index.html
│  ├─ video-chat/
│  │  ├─ src/
│  │  │  ├─ components/ (LocalVideo, RemoteVideo, Controls)
│  │  │  ├─ pages/ (Lobby, Room)
│  │  │  ├─ webrtc/ (peer.ts, signaling.ts)
│  │  │  └─ main.tsx
│  │  └─ index.html
│  └─ server/
│     ├─ src/index.ts
│     └─ package.json
├─ package.json
├─ pnpm-workspace.yaml
└─ README.md
```

---

## 🚀 Getting Started

### 1) Clone & install

```bash
# clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# install deps (choose one)
pnpm install
# or
npm install
# or
yarn install
```

### 2) Environment variables

Create `.env` files in each app.

**apps/video-chat/.env**
```
VITE_SOCKET_URL=http://localhost:5174
# Optional TURN/STUN (default Google STUN if omitted)
VITE_ICE_SERVERS=[{"urls":"stun:stun.l.google.com:19302"}]
```
**apps/ecommerce/.env**

```
VITE_API_BASE_URL=http://localhost:5175/api
# Optional Stripe public key (if enabling live checkout)
VITE_STRIPE_PK=pk_test_XXXXXXXXXXXXXXXXXXXXXXXX
```

**apps/server/.env** (optional)

```
PORT=5174
CORS_ORIGIN=http://localhost:5173
```

### 3) Run development

```bash
# run server (signaling)
pnpm --filter @app/server dev
# in another terminal: run video chat app
pnpm --filter @app/video-chat dev
# in another terminal: run ecommerce app
pnpm --filter @app/ecommerce dev
```

> Defaults: ecommerce at `http://localhost:5173`, video-chat at `http://localhost:5174` or `5176` depending on your Vite ports; server at `http://localhost:5174` (configurable).

### 4) Build

```bash
pnpm --filter @app/ecommerce build
pnpm --filter @app/video-chat build
pnpm --filter @app/server build   # if you compiled TS
```

---

## 🧪 Scripts (root `package.json` example)

```json
{
  "name": "react-monorepo",
  "private": true,
  "scripts": {
    "dev:shop": "pnpm --filter @app/ecommerce dev",
    "dev:video": "pnpm --filter @app/video-chat dev",
    "dev:server": "pnpm --filter @app/server dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "lint": "pnpm -r lint",
    "format": "pnpm -r format"
  }
}
```

**`pnpm-workspace.yaml`**

```yaml
packages:
  - "apps/*"
```

---

## 🛰️ Minimal Signaling Server (Socket.io + Express)

> Use this for local dev or deploy to Render/railway.

```ts
// apps/server/src/index.ts
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: process.env.CORS_ORIGIN || "*" } });

io.on("connection", (socket) => {
  socket.on("join", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit("peer:joined", socket.id);
  });

  socket.on("signal", ({ roomId, data }) => {
    socket.to(roomId).emit("signal", { from: socket.id, data });
  });

  socket.on("disconnecting", () => {
    [...socket.rooms].forEach((roomId) => {
      if (roomId !== socket.id) socket.to(roomId).emit("peer:left", socket.id);
    });
  });
});

app.get("/health", (_, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 5174);
httpServer.listen(port, () => console.log(`Signaling on :${port}`));
```

Client emits:

* `join` with `roomId`
* `signal` with `{ roomId, data }` (SDP offers/answers & ICE candidates)

---

## 🔗 Example Routes and Pages

### Ecommerce

* `/` – Home (hero, featured products)
* `/products` – Grid + filters
* `/products/:id` – Details, add to cart
* `/cart` – Cart drawer/page
* `/checkout` – Address → Payment → Review (mock or Stripe)

### Video Chat

* `/` – Lobby (enter/create room)
* `/room/:roomId` – Call UI (local/remote video, controls, chat)

---

## 🧰 Common Commands (per app)

```bash
# inside an app folder
pnpm dev     # start dev server
pnpm build   # build
pnpm preview # preview build
pnpm test    # unit tests
pnpm lint    # lint
```

---

## 🧩 Folder Highlights

* `src/webrtc/peer.ts` – Creates RTCPeerConnection, handles tracks & ICE
* `src/webrtc/signaling.ts` – Socket.io glue (join, signal)
* `src/features/cart/` – Redux slice, selectors, persistence to localStorage
* `src/components/ui/` – Buttons, inputs, modals (reusable)

---

## 🪪 Testing

* Unit tests with **Vitest**
* Component tests with **Testing Library**
* Example: `apps/ecommerce/src/features/cart/cart.slice.test.ts`

---

## 🧹 Linting & Formatting

* ESLint: `pnpm lint`
* Prettier: `pnpm format`
* Recommend pre-commit: Husky + lint-staged

---

## ☁️ Deployment

* **Vercel/Netlify** for the React apps (`dist` output from Vite)
* **Render/Railway/Fly.io** for the signaling server
* Set environment variables in the hosting dashboard (mirror `.env`)

---

## 🔒 Notes on TURN/STUN

* Public STUN: `stun:stun.l.google.com:19302` works for most cases
* For NAT-restricted networks, configure a **TURN** service (e.g., Twilio, Xirsys, or coturn)

---

## 🗺️ Roadmap

* [ ] Group calls (multi-peer) with mesh
* [ ] Record calls (client-side MediaRecorder)
* [ ] Admin dashboard for products & orders
* [ ] Real backend (Nest/Express) + Postgres
* [ ] E2E tests (Playwright)

---

## 🤝 Contributing

PRs welcome! Please open an issue to discuss major changes. Run lint/tests before pushing.

---

## 📜 License

MIT © <your-name>
