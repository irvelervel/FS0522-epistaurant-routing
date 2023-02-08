// this will be the details component loading on /details/:pastaId

import { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import dishes from '../data/menu.json'

const Details = () => {
  const params = useParams()
  console.log('PARAMS ARE: ', params)

  console.log('the id of the chosen pasta is', params.pastaId)

  const [pastaToShow, setPastaToShow] = useState(null)

  useEffect(
    () => {
      // let's not use our params.pastaId to find the right element
      // in the JSON and load our card with the right data!
      let foundPastaObject = dishes.find(
        (dish) => dish.id.toString() === params.pastaId
      )
      console.log('PASTA DETAILS FOUND: ', foundPastaObject)
      // foundPastaObject should be the right pasta that meets our condition:
      // id of the pasta object matching the url param called :pastaId
      setPastaToShow(foundPastaObject)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // putting NOTHING here will make sure this operation will
      // happen just once
    ]
  )

  return (
    <>
      {pastaToShow ? (
        <>
          <h2>Details of {pastaToShow.name}</h2>
          <Card className="mb-3">
            <Card.Img variant="top" src={pastaToShow.image} />
            <Card.Body>
              <Card.Title>
                {pastaToShow.name} - {pastaToShow.category}
              </Card.Title>
              <Card.Text>{pastaToShow.description}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <Spinner variant="info" animation="border" />
        // this spinner simulates a loading process, for just the first render
      )}
    </>
  )
}

export default Details
