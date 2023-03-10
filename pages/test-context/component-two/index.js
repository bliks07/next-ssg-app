import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/contextLayout'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

function ComponentTwo({ withMemo = false }) {
    if(withMemo) {
        console.log('Rendering Context Component 2 with Memo')
    } else {
        console.log('Rendering Context Component 2')

    }

    const router = useRouter()

    const goBack = () => {
        router.push('/test-context')
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center bg-gray-100 p-8">
                <Stack direction="column" spacing={2}>
                    <Typography variant="h3" noWrap component="div" sx={{ flexGrow: 1 }}>
                        This is Component 2
                    </Typography>

                    {/* <Button variant="contained" onClick={goBack}>Go Back</Button> */}
                </Stack>
            </div>
        </Layout>
    )
}

export default ComponentTwo
