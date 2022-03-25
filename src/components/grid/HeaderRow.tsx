export const HeaderRow = () => {
  const headerCells = ['A','B','C','D','E']

  return (
    <div className="flex justify-center mb-1">
      {headerCells.map((header, i) => (
        <div key={i} className="w-14 h-8 flex items-center justify-center mx-0.5 text-2xl font-bold dark:text-white correct shadowed">
            <div className="letter-container">
              {header}
            </div>
        </div>
      ))}
    </div>
  )
}
