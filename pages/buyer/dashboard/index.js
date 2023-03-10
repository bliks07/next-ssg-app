import { useState, useEffect } from 'react'
import { injectIntl } from 'react-intl'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Layout from '@/components/buyerLayout'

function DashboardPage({ intl }) {
    return (
        <Layout>
            <Stack direction="column" spacing={3}>
                <Typography variant="h1" className="text-5xl font-bold">
                    {intl.formatMessage({ id: 'dashboard.heading' })}
                </Typography>

                <pre>
                    {intl.formatMessage({ id: 'dashboard.desc' })}
                </pre>
            </Stack>
        </Layout>
    )
}

export default injectIntl(DashboardPage)