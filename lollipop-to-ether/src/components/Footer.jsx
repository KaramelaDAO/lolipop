const Footer = () => {
  return (
    <footer className="px-5 py-8 mt-10 2xl:absolute bottom-0 inset-x-0 text-center">
      <a href="!#" className="font-semibold">
        Legal and Terms
      </a>
      <p className="text-white font-medium mt-2">
        &copy; {new Date().getFullYear()} Karamela DAO, LLC
      </p>
    </footer>
  );
};

export default Footer;
