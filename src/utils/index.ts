import { useState, useEffect } from "react"

//判断是否为Falsy（除了0）
export const isFalsy = (value: any) => value === 0 ? false : !value

//清空没用的属性并不改变传入的对象
export const cleanObject = (object: object) => {
    const result = { ...object }
    Object.keys(object).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = (value: any, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        //每次在value变化以后设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}