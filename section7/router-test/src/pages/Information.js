import { useNavigate } from "react-router-dom"

const Information = () => {
  const navigate = useNavigate()
  const goToClick = () => navigate('/contact')
  return (
    <>
      <h2>Information です</h2>
      <button onClick={goToClick}>お問い合わせページ</button>
    </>
  )
}

export default Information
