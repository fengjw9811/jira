import React, { useState, useEffect } from "react"
import qs from 'qs'
import { cleanObject } from '../../utils'

import SearchPanel from "./SearchPanel"
import List from './List'

const apiURL = process.env.REACT_APP_API_URL

export default function ProjectListScreen() {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])

    //获取users的数据
    useEffect(() => {
        fetch(`${apiURL}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])

    //获取projects的数据
    useEffect(() => {
        fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}