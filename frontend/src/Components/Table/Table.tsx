/* eslint-disable @typescript-eslint/no-explicit-any */


type TableProps ={
    configs: any,
    data: any
}

const Table = ({configs, data}: TableProps) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik }>
                {configs.map((val: any) => {
                  return <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                    {val.render(company)}
                </td> 
                })}
            </tr>
        )
    });
    const renderedHeaders = configs.map((config: any) => {
        return (
            <th 
                key={config.label} 
                className='p-4 text-left text-xs font-medium 
                text-gray-500 tracking-wider uppercase'
            >
                {config.label}
            </th>
        )
    })
  return (
    <div className='bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8'>
        <table>
            <thead className='min-w-full divide-y divide-gray-200 m-5'>
                {renderedHeaders}
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </div>
  )
}

export default Table