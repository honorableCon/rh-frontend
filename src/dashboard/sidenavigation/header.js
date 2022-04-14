import Link from "next/link";

export default function SidenavHeader() {
  return (
      <Link href={"/"}>
    <a className="bg-white flex items-center justify-center mb-6 pb-6 sticky top-0 z-10">
        <img src="/images/gmd.png" width={100} height={100} alt="gmd" />
    </a>
      </Link>
  );
}
