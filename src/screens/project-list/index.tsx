import React, { useState, useEffect } from "react"
import { cleanObject, useMount, useDebounce } from '../../utils'

import { SearchPanel } from "./SearchPanel"
import List from './List'
import { useHttp } from "../../utils/http"

export default function ProjectListScreen() {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const debouncedParam = useDebounce(param, 500)
    const client = useHttp()
    //获取users的数据
    useMount(() => {
        client('users').then(setUsers)
    })

    //获取projects的数据
    useEffect(() => {
        client('projects', { data: cleanObject(debouncedParam) }).then(setList)
    }, [debouncedParam])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}