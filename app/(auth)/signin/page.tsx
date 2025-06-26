
export default function Signin() {

    return (
      
        
        <div className="flex flex-col w-screen h-screen justify-center items-center">
          <input
            className="bg-white text-slate-950 p-1 m-2"
            type="text"
            placeholder="username"
          />
          <input
            className="bg-white text-slate-950 p-1 m-2"
            type="password"
            placeholder="password"
          />

          <button className="bg-blue-500 text-white p-2 m-2 rounded-md px-7">Sign In</button>
        </div>
    )
}