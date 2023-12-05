import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div>
        <p>ErrorPage</p>
        <Link to="/">
            <button>Retourner vers la page d'accueil</button>
        </Link>
    </div>
  )
}
