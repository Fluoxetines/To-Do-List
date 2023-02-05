import { useEffect, useState } from "react";
const Footer = () => {
  const [year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <footer className="text-center py-6 font-medium uppercase">
      To-do list | Clone by Fluoxetine {year}
    </footer>
  );
};
export default Footer;
