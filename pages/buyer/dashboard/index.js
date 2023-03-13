import React, { useState, useEffect } from 'react'
import { injectIntl } from 'react-intl'
import { useQuery } from '@tanstack/react-query'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Layout from '@/components/buyerLayout'
import { usePersons } from '@/api'

function DashboardPage({ intl }) {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    //const fetchProjects = (page = 0) => fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`).then((res) => res.json())

    // const {
    //     isLoading,
    //     isError,
    //     error,
    //     data,
    //     isFetching,
    //     isPreviousData,
    // } = useQuery({
    //     queryKey: ['projects', page],
    //     queryFn: () => fetchProjects(page),
    //     keepPreviousData: true,
    //     staleTime: 10 * 1000,
    // })

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = usePersons({ page, pageSize })

    if (error) return 'An error has occurred: ' + error.message

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    return (
        <Layout>
            <Stack direction="column" spacing={3}>
                <Typography variant="h1" className="text-5xl font-bold">
                    {intl.formatMessage({ id: 'dashboard.heading' })}
                </Typography>

                <pre>
                    {intl.formatMessage({ id: 'dashboard.desc' })}
                </pre>

                <div className="flex flex-col items-start justify-center">
                    <Paper className="w-64 mb-8">
                        {
                            isLoading ?
                                <h3>Loading...</h3>
                                :
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    {
                                        data?.data?.map((item) => <>
                                            <ListItem alignItems="flex-start" key={item?._id}>
                                                <ListItemText
                                                    primary={item?.name}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                                {item?.trips}
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </>)
                                    }
                                </List>
                        }

                    </Paper>

                    <Pagination
                        className="flex-1"
                        count={pageSize}
                        page={page}
                        onChange={handlePageChange}
                        showFirstButton
                        showLastButton
                    />
                </div>


            </Stack>
        </Layout>
    )
}

export default injectIntl(DashboardPage)