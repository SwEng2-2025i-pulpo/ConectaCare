import '../../../style.css'

function ButtonPdf ({ titleButton, icon, patientId }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8001/api/pdf/patient/${patientId}`)
      if (!response.ok) throw new Error('No se pudo generar el PDF')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'patient_dashboard.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <button
      className='w-full h-12 flex flex-row justify-center items-center gap-1 p-2 text-secondary text-xs font-extrabold border-1 border-solid border-secondary rounded-xl'
      onClick={handleDownload}
    >
      {icon}
      {titleButton}
    </button>
  )
}

export { ButtonPdf }
