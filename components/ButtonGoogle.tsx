"use client"

import { signIn } from "next-auth/react"
 
export default function ButtonGoogle() {
  return <button onClick={() => signIn("google")}> HOLA </button>
}
