import { useState } from 'react'
import { Button, TextField } from '@mui/material'

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email && password) {
      
    }

  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-8">Login</h1>
        <TextField
          className="w-full mb-4"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className="w-full mb-4"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button className="w-full mt-4" variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
