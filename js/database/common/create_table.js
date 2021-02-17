export default (table, columns, extra) => {
  const _tmp = []
  for (const key in columns) {
    const column = columns[key]
    _tmp.push(`${column.key} ${column.type} ${column.attrs && column.attrs.join(' ')}`)
  }
  extra && _tmp.push(extra)
  return `CREATE TABLE IF NOT EXISTS ${table} (${_tmp.join(', ')})`
}
