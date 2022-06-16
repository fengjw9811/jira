//判断是否为Falsy（除了0）
export const isFalsy = (value) => value === 0 ? false : !value

//清空没用的属性并不改变传入的对象
export const cleanObject = (object) => {
    const result = { ...object }
    Object.keys(object).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}