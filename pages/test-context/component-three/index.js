import { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '@/components/contextLayout'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import MContext from '@/components/contextProvider'

function ComponentThree() {
    console.log('Rendering Context Component 3')

    const router = useRouter()

    const { user } = useSelector(({ auth }) => auth)

    const currentUser = useContext(MContext)

    const goBack = () => {
        router.push('/test-context')
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center bg-gray-100 p-8">
                <Stack direction="column" spacing={2}>
                    <Typography variant="h3" noWrap component="div" sx={{ flexGrow: 1 }}>
                        This is Component 3
                    </Typography>

                    {/* <Button variant="contained" onClick={goBack}>Go Back</Button> */}
                </Stack>
            </div>
        </Layout>
    )
}

export default ComponentThree
