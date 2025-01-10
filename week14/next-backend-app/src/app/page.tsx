"use client";
import Link from "next/link";
import Button from "../../components/Button";
import Skeltons from "../../components/Skeltons";
import { useUser } from "./hook";

export default  function Home() {
  const { user, loading } = useUser();  

  if (loading) {
    return <Skeltons />;
  }
  return (
    <div className="min-w-screen-lg  bg-white-800">
      <div className="flex justify-between w-full bg-black text-white p-4">
        <h1>Vikash Sharma</h1>
        <Link href="/auth/login">
          <Button name="Login" />
        </Link>
      </div>

      <div className="flex justify-evenly items-center border-b-2 border-slate-500 ">
        <div className="p-4">
          <h1>hello world</h1>
          <p>this is home page of this website</p>
        </div>

        <div>
          <Link href="/auth/signup">
            <Button name="register/signup" />
          </Link>
        </div>
      </div>

      <div className="p-4 bg-gray-200  w-96 mt-10 m-auto rounded-lg">
        <div className="text-center text-2xl text-slate-700">
          <h1>{user?.name.toUpperCase()}</h1>
          <h1>({user?.id})</h1>
        </div>
        <div>
          <h1>age: {user?.age}</h1>
          <h1>Email: {user?.email}</h1>
        </div>
      </div>

     
    </div>
  );
}
