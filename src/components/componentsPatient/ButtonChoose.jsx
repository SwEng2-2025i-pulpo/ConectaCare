function ButtonChoose ({ type, text }) {
  return (
    <div className='w-[90%] h-auto flex justify-center items-center'>
      <button
        className='w-full h-8 text-normal
      font-medium rounded-md bg-white mt-3
       text-secondary border-1 border-gray-300 hover:bg-gray-100 hover:shadow-2xl cursor-pointer lg:text-sm'
        type={type}
      >{text}
      </button>
    </div>
  )
}

export { ButtonChoose }
