export const H2Heading = ({ id, children }) => {
  return (
    <h2 id={id}>
      <a href={`#${id}`}>{children}</a>
      <style jsx>{`
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </h2>
  )
}
