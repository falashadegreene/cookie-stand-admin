/* eslint-disable react/jsx-key */
export default function ReportTable({ stands }) {
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  if (stands.length === 0) {
    return <h2 className="text-2xl">No Cookie Stands Here</h2>
  } else {
    return (
      <table className='w-5/6 bg-orange-100  border-2 border-black'>
        <thead>
          <tr>
            <th className="border-2 border-black text-left px-1">Locations</th>
            {hours.map(hour => <th className=" ">{hour}</th>)}
            <th className="border-2 border-emerald-500 text-left px-1">Totals</th>
          </tr>
        </thead>
        <tbody className='border-2 border-emerald-500'>
          {stands.map(stand => (
            <tr key={stand.id} className='odd:bg-emerald-200 even:bg-emerald-300 '>
              <td className='pl-4 border-2 border-emerald-500 font-bold'>{stand.location}</td>
              {stand.hourlySales.map(sales => <td className='text-right px-2 border-2 border-emerald-500'>{sales}</td>)}
              <td className='text-right px-2 border-2 border-emerald-500'>516</td>
            </tr>
          ))}
        </tbody>
        <tfoot className='border-2 border-emerald-500'>
          <tr className='border-2 border-emerald-500'>
            <td className="px-1 font-bold">Totals</td>
            {stands[0].hourlySales.map(sales => <td className='text-right px-2 border-2 border-emerald-500'>{sales * stands.length}</td>)}
            <td className="text-right px-2">{516 * stands.length}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}