import { auth } from "../auth"
 
export async function UserInfo() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
      <img src={session.user.image} alt="User Avatar" />
    </div>
  )
}