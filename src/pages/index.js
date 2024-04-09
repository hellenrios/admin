import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between p-10 list-disc`}
    >
      <ul className="list-disc">
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </main>
  );
}
