import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className="bg-gray-50 flex flex-grow items-center justify-center">
      <form>
        <div className="flex flex-col space-y-4 bg-white rounded-md p-8">
          <div className="flex flex-col items-start space-y-2">
            <label className="text-gray-600" htmlFor="date">
              Username
            </label>
            <input
              className="p-2 w-full bg-gray-50 border-grey-300 border-b-2"
              type="text"
              id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label className="text-gray-600" htmlFor="date">
              Password
            </label>
            <input
              className="p-2 w-full bg-gray-50 border-grey-300 border-b-2"
              type="secure"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
          <button>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Login
