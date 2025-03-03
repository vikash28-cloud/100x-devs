"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const Appbar = () => {
    const session = useSession();
    const router = useRouter();
    return (
        <>
            <div className="mt-4 m-auto">
                <button className="border border-white rounded-md px-4 py-2" onClick={() => {
                    signIn();
                }}>
                    Signin
                </button>
            </div>
            <div className="mt-4 m-auto">
                <button className="border border-white rounded-md px-4 py-2" onClick={() => {
                    signOut();
                }}>
                    Logout
                </button>
                {JSON.stringify(session)}
            </div>

            <div>
                <img src={session.data?.user?.image||""} alt="" />
            </div>
        </>
    )
}