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
      className='stickyactions__button mx-2 lg:mx-5'
      onClick={handleDownload}
    >
      {icon}
      {titleButton}
    </button>
  )
}

export { ButtonPdf }
