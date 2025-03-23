"use client";
import Link from "next/link";

const NavMobile = () => {
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="flex flex-col space-y-3 p-4 text-gray-700">
        <Link href="/tieuSu" className="hover:text-gray-900">
          Tiểu sử
        </Link>
        <Link href="/family" className="hover:text-gray-900">
          Thành viên
        </Link>
        <Link href="/suTroiDay" className="hover:text-gray-900">
          Sự trỗi dậy
        </Link>
        <Link href="/quyTac" className="hover:text-gray-900">
          Qui tắc
        </Link>
      </div>
    </div>
  );
};

export default NavMobile;
