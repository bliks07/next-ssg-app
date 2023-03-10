import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRecoilState } from 'recoil'
import { currentUserState } from "@/recoil/recoil_state"
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import useSWR from 'swr'
import Layout from '@/components/authLayout'
import Link from 'next/link'
import { getCurrentUser } from "@/redux/actions/Auth"


const fetcher = (url) => fetch(url).then((res) => res.json())

function LoginPage() {
    const dispatch = useDispatch()

    // const { data, error, isLoading } = useSWR(
    //     "https://gorest.co.in/public/v2/users",
    //     fetcher
    // )

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .required('Password is required'),
    })

    const { token } = useSelector(({ auth }) => auth)
    const { loading } = useSelector(({ common }) => common)

    //const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const formik = useFormik({
        initialValues: formData,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            //setCurrentUser(currentUser + 1)
            dispatch(getCurrentUser(token))
        },
    })

    // if (error) return "An error has occurred."
    // if (isLoading) return "Loading..."

    const handleChange = (value, field) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }

    // const handleSubmit = (event) => {
    //     event?.preventDefault()

    //     if (formData?.email && formData?.password) {
    //         setCurrentUser(currentUser + 1)
    //         dispatch(getCurrentUser(token))
    //     }
    // }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <form
                    className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-[350px]"
                    noValidate
                    onSubmit={formik.handleSubmit}
                >
                    <h1 className="text-2xl font-bold mb-8">Login</h1>

                    <TextField
                        className="w-full mb-4"
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={formik.values.email}
                        onChange={(e) => handleChange(e?.target?.value, 'email')}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        className="w-full mb-4"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={formik.values.password}
                        onChange={(e) => handleChange(e?.target?.value, 'password')}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button className="w-full mt-4" variant="contained" type="submit" disabled={loading}>
                        Login
                    </Button>
                </form>
            </div>
        </Layout>

    )
}

export default LoginPage
