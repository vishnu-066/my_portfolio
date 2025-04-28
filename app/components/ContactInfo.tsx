import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const ContactInfo = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-center text-gray-300">Kadapa, Andhra Pradesh</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhone className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-300">9110752349</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-pink-400 text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-300">somulavishnu6@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
