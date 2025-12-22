import { Link } from 'react-router-dom';
import { ExternalLink } from '@/components';

const Navbar = () => {
  return (
    <header className="mb-22 flex items-center justify-between">
      <div className="flex flex-col">
        <Link to="/" className="font-semibold text-neutral-50">
          TinyPage
        </Link>
        <span className="text-sm text-neutral-500 md:text-base">
          By <ExternalLink href="https://javierlo.com">Javier Lo</ExternalLink>
        </span>
      </div>
      <nav className="flex gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
