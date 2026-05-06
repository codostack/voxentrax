// WhatsAppButton.jsx
export default function WhatsAppButton({ phone = "+33756866331", message = "Hello, I need more info" }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-12 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform duration-200 hover:scale-110"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.27 1.964.66 2.854.93 2.135 2.91 3.93 5.1 4.81.39.15.83.302 1.245.347.216.028.433.028.65.028.81 0 1.776-.27 2.336-.945.171-.21.275-.405.34-.66.07-.27.155-.825.155-.945 0-.143-.06-.215-.187-.302-.265-.166-.5-.246-.788-.428z"/>
        <path d="M16.04 0C7.18 0 0 7.18 0 16.04c0 2.78.71 5.5 2.06 7.92L.1 31.34a.7.7 0 0 0 .87.87l7.5-1.93a16.04 16.04 0 0 0 23.61-14.24C32.08 7.18 24.9 0 16.04 0zm0 29.42c-2.49 0-4.92-.67-7.05-1.95l-.5-.3-5.2 1.34 1.4-5.05-.33-.52a13.4 13.4 0 1 1 11.68 6.48z"/>
      </svg>
    </a>
  );
}