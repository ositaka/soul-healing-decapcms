import { motion } from "framer-motion";

const Layout = ({ children }) => (
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
    {children}
  </motion.main>
);
export default Layout;
