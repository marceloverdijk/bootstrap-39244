import Link from 'next/link'
import Container from 'react-bootstrap/Container'

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <hr className="mt-5 mb-4" />
        <p className="text-muted">
          Created and open sourced by the Bootstrap team. Licensed MIT.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
