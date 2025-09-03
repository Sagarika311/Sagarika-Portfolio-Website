"use client";

export default function Footer() {
  return (
    <footer className="py-4 px-6 text-white bg-black/40 backdrop-blur-md mt-10">
      <div className="flex justify-center items-center">
        <span className="text-center text-lg font-semibold">
          Made with{" "}
          <span className="text-red-500 mx-1 animate-throb">❤️</span> by Sagarika
        </span>
      </div>

      <style jsx>{`
        @keyframes throb {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        .animate-throb {
          display: inline-block;
          animation: throb 1s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
