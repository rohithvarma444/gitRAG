import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center rounded border border-gray-200 bg-white p-4">
        <SignIn />
    </div>
  )
}