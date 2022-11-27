import Link from 'next/link';

export default function TopPage() {
  return (
    <article className="prose max-w-full break-words">
      <h1>h1: Welcome to Next.js!</h1>
      <h2>h2: This is a template project.</h2>
      <h3>h3: あいうえお</h3>
      <h4>h4: かきくけこ</h4>
      <p>p: Hello! こんにちは！</p>
      <p>It is l{[...new Array(150)].map(() => 'o')}ng sentence.</p>
      <p>
        Link is <Link href="/cat">here</Link>.
      </p>
      <ul>
        <li>Dog</li>
        <li>Cat</li>
        <ul>
          <li>Dog</li>
          <li>Cat</li>
        </ul>
      </ul>
      <ol>
        <li>A</li>
        <li>B</li>
        <ol>
          <li>A</li>
          <li>B</li>
        </ol>
      </ol>
    </article>
  );
}
