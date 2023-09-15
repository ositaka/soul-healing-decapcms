import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";

const Layout = ({ children, criteria, heroImage }) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 30,
    }}
  >
    {criteria ? //ternary operator
      <>
        <Header />
        <div className='hero-image'>
          <Image fill priority src={heroImage} alt="..." />
        </div>
      </>
      : <Header />
    }
    {children}
  </motion.main>
);
export default Layout;
