import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import './Home.page.css'
export function HomePage() {
  return (
    <>
        <iframe
          src="https://jupyterlite.readthedocs.io/en/latest/try/"
          width="100%"
          
          frameBorder="0"
          title="JupyterLite"
        ></iframe>
  </>
  );
}
