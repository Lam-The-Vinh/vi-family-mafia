import { NextPage } from "next";
import Link from "next/link";

const lienHe: NextPage = () => {
  return (
    <div className="mt-50 container mx-auto mb-15">
        <h1 className="text-5xl font-bold text-center">Liên hệ với trùm Vi Family</h1>
        <div className="pt-5 text-xl">
            <p><span className="font-semibold">Số Điện Thoại:</span> 0778889530</p>
            <p><span className="font-semibold">Facebook:</span> <a target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer" href="https://www.facebook.com/hoangtungs03lolad">Lê Vi</a></p>
        </div>
    </div>
  );
};
export default lienHe;
