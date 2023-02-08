import dishes from '../data/menu.json'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      {dishes.map((d) => (
        <div key={d.id} className="mt-5">
          <Link to={'/details/' + d.id}>
            <img src={d.image} alt="pasta" className="w-100" />
          </Link>
          <h4 className="d-flex justify-content-center mt-2">
            <span>{d.name}</span>
            <Badge className="mx-2" variant="warning">
              {d.price}
            </Badge>
            <Badge variant="danger">{d.label}</Badge>
          </h4>
        </div>
      ))}
    </div>
  )
}

export default Menu
