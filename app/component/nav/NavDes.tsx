"use client";

import Link from "next/link";

const NavDes = () => {
  return (
    <div className="w-full">
      <div className="px-6 py-3 text-gray-700 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <img src="/logo-family.png" className="w-30" alt="" />
          </Link>
        </div>

        <div className="flex justify-between items-center gap-6">
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
          <Link href="/lienHe" className="hover:text-gray-900">
          Liên Hê
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavDes;
