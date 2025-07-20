

![Video Chat](https://i.ibb.co/7WZRLD1/122.jpg)

📹 React Video Chat App
A real-time video chat application built with React.js and WebRTC, allowing two users to connect via video and audio in the browser. It demonstrates peer-to-peer communication without the need for third-party services.

🚀 Features
🔁 One-on-one video calling

📞 Real-time audio/video communication

👥 Peer-to-peer connection using WebRTC

🧠 React Hooks for clean and functional components

💬 Optional: Chat box for text messages (if included)

📱 Responsive and minimal UI

🧪 Tech Stack
Frontend: React.js, JSX, CSS3

WebRTC: Peer-to-peer media streaming

Socket.io: Real-time signaling server

Backend: Node.js + Express (for signaling)

Styling: CSS / Tailwind / Bootstrap (mention what you used)

![Video Chat](https://i.ibb.co/7WZRLD1/122.jpg)

⚙️ Installation & Usage
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/react-video-chat.git
cd react-video-chat
Install frontend dependencies

bash
Copy
Edit
cd client
npm install
npm start
Install backend dependencies

bash
Copy
Edit
cd server
npm install
node index.js
📝 Make sure to run both frontend (localhost:3000) and backend (localhost:5000)

📁 Folder Structure
pgsql
Copy
Edit
react-video-chat/
├── client/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
├── server/        # Node + Express signaling server
│   └── index.js
