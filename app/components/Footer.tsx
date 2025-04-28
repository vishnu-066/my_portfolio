const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-80 text-gray-800 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
