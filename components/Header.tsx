import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-5">
      <a href="/">
        <img src="/logo.png" alt="Brendan Younger" width={184} height={150} />
      </a>
    </header>
  );
}
