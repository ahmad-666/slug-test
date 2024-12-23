"use client";

import Link from "next/link";

export default function TestPage() {
  const normalId = "sven göth";
  const encode = encodeURIComponent(normalId);
  const decode = decodeURIComponent("sven%20g%C3%B6th");

  return (
    <div className="mt-section-lg">
      <div className="flex flex-col gap-10">
        <Link href="/test/a-b">server page a-b</Link>
        <Link href="/test/client/a-b">client page a-b</Link>
        <Link href="/test/a b">server page a b</Link>
        <Link href="/test/client/a b">client page a b</Link>
        <Link href="/test/a%20b">server page a%20b</Link>
        <Link href="/test/client/a%20b">client page a%20b</Link>
        <Link href={`/test/${normalId}`}>server page {normalId}</Link>
        <Link href={`/test/client/${normalId}`}>client page {normalId}</Link>
        <Link href={`/test/${encode}`}>server page {encode}</Link>
        <Link href={`/test/client/${encode}`}>client page {encode}</Link>
        <Link href={`/test/${decode}`}>server page {decode}</Link>
        <Link href={`/test/client/${decode}`}>client page {decode}</Link>
      </div>
    </div>
  );
}
