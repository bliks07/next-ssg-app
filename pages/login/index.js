import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useRecoilState } from 'recoil'
import { currentUserState } from "@/recoil/recoil_state"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import useSWR from 'swr'
import Layout from '@/components/layout'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

function LoginPage() {
    const router = useRouter()

    // const { data, error, isLoading } = useSWR(
    //     "https://gorest.co.in/public/v2/users",
    //     fetcher
    // )

    const { token, user } = useSelector(({ auth }) => auth)

    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // if (error) return "An error has occurred."
    // if (isLoading) return "Loading..."

    const handleSubmit = (event) => {
        event?.preventDefault()

        if (formData?.email && formData?.password) {
            setCurrentUser(currentUser + 1)
            router.push('/buyer/dashboard')
        }
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <form className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-[350px]" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    
                    <TextField
                        className="w-full mb-4"
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={formData?.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    <TextField
                        className="w-full mb-4"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={formData?.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
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
