// Resume.js
export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <iframe src="/resume.pdf" className="w-full h-[600px] max-w-4xl mx-auto border rounded" title="Resume"></iframe>
      <a href="/resume.pdf" download="Muhammad_Saif_Ur_Rehman_Resume.pdf" className="mt-6 inline-block px-3 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
        Download Resume
      </a>
    </section>
  );
}
