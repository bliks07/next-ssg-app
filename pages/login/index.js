import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import useSWR from 'swr'
import Layout from '@/components/layout'

const fetcher = (url) => fetch(url).then((res) => res.json())

function LoginPage() {
    const router = useRouter()

    const { data, error, isLoading } = useSWR(
        "https://gorest.co.in/public/v2/users",
        fetcher
    )

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (error) return "An error has occurred."
    if (isLoading) return "Loading..."

    const handleSubmit = (event) => {
        event?.preventDefault()

        if (email && password) {
            router.push('/buyer/dashboard')
        }
    }

    return (
        <Layout>
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
        </Layout>

    )
}

export default LoginPage
