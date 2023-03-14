const Underline = ({ children, color = "red", height = 20 }) => {
  return (
    <span
      style={{
        background: `linear-gradient(${color}, ${color}) 0 80% / 100% ${height}px no-repeat`,
      }}
    >
      {children}
    </span>
  )
}

export default Underline
