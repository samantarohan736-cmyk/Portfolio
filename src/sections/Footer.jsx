const Footer = () => {
  return (
    <footer className="py-8 text-center glass border-t border-white/10 mt-20 relative z-10">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Rohan Samanta . Built with React & Tailwind.
      </p>
    </footer>
  );
};
export default Footer;
