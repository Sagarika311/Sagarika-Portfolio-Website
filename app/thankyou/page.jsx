export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-bounce">🎉 Thank You!</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Thank you for reaching out. <br />
          Your message has been sent successfully. <br />
          I’ll get back to you soon.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
