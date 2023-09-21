import { motion } from 'framer-motion'
import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 30,
      }}
    >
      {children}
    </motion.main>
  </>
)
export default Layout
