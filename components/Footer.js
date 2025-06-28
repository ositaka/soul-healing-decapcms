import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; 2020-{new Date().getFullYear().toLocaleString().slice(3)}</p>
    </footer>
  )
}