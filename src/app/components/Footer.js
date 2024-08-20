export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} FAYJOB. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-teal-500">
            LinkedIn
          </a>
          <a href="#" className="hover:text-teal-500">
            GitHub
          </a>
          <a href="#" className="hover:text-teal-500">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
