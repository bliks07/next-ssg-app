import { useState, useEffect, useMemo, memo } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '@/components/contextLayout'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { setAuthState } from "@/redux/actions/Auth"
import ComponentOne from './component-one'
import ComponentTwo from './component-two'
import ComponentThree from './component-three'
import MContext from '@/components/contextProvider'

function TestContext() {
    console.log('Rendering Context Parent')

    const dispatch = useDispatch()

    const [currentUser, setCurrentUser] = useState(0)

    const updateContext = () => {
        setCurrentUser(currentUser + 1)
    }

    const updateRedux = () => {
        dispatch(setAuthState({ user: 'test' }))
    }

    const ComponentTwoWithMemo = useMemo(() => <ComponentTwo withMemo={true} />, [])

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <Stack direction="column" spacing={2}>
                    {/* <Paper>
                        <MenuList>
                            <MenuItem>
                                <Link href="/test-context/component-one">Component 1</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/test-context/component-two">Component 2</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/test-context/component-three">Component 3</Link>
                            </MenuItem>
                        </MenuList>
                    </Paper> */}

                    <MContext.Provider value={currentUser}>
                        <Paper>
                            <ComponentOne />
                        </Paper>

                        <Paper>
                            <ComponentTwo />
                            {ComponentTwoWithMemo}
                        </Paper>

                        <Paper>
                            <ComponentThree />
                        </Paper>
                    </MContext.Provider>

                    <Button variant="contained" onClick={updateContext}>Update Context</Button>

                    <Button variant="contained" onClick={updateRedux}>Update Redux</Button>
                </Stack>
            </div>
        </Layout>
    )
}

export default TestContext
