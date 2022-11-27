import Link from 'next/link';
import { MdExpandMore, MdSearch } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="sticky top-0 bg-base-200">
      <div className="navbar mx-auto max-w-6xl justify-between p-2">
        <div>
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            Next.js
          </Link>
        </div>
        <div>
          <ul className="menu rounded-box menu-horizontal p-1">
            <li>
              <Link href="/cat">Cat</Link>
            </li>

            <li tabIndex={0}>
              <Link href="/form">
                Form
                <MdExpandMore />
              </Link>
              <ul className="bg-base-200 p-2 shadow-xl">
                <li>
                  <Link href="/form">React Hook Form</Link>
                </li>
                <li>
                  <Link href="/form/zod">With Zod</Link>
                </li>
                <li>
                  <Link href="/form/examples">Examples</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/auth">Next Auth</Link>
            </li>
          </ul>
        </div>
        <form className="form-control hidden md:flex">
          <div className="input-group">
            <button className="btn-square btn">
              <MdSearch className="h-4 w-4" />
            </button>
            <input
              type="seach"
              placeholder="Search…"
              className="input-bordered input bg-base-200"
            />
          </div>
        </form>
      </div>
    </header>
  );
};
