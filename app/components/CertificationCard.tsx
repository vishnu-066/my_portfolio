import { FaCertificate } from "react-icons/fa"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  url?: string
}

const CertificationCard = ({ title, issuer, date, url }: CertificationCardProps) => {
  const content = (
    <>
      <FaCertificate className="text-pink-400 text-2xl mr-4 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-300">{issuer}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 flex items-start hover:border-pink-400 transition-colors"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="card bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 flex items-start">
      {content}
    </div>
  )
}

export default CertificationCard
