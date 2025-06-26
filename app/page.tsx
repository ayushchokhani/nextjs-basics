

// import { useRouter } from "next/navigation"

export default function Home() {

  // const router = useRouter()


  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col text-center w-80 items-center">
        Todo Application
        <button
          className="rounded-md bg-blue-500 text-white p-2 m-3 w-full"
          
        >
          Sign In
        </button>
        <button
          className="rounded-md bg-blue-500 text-white p-2 w-full m-3"
          
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
