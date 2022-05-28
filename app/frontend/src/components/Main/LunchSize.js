import React, { useContext } from 'react'
import trembaoAppContext from '../../Context/TrembaoAppContext'

function LunchSize () {
  const { setPrice } = useContext(trembaoAppContext)

  const handlePrice = (e) => {
    setPrice(Number(e.target.value))
  }

  return (
    <div className="foodOptionsForm__lunch-size">
        <div className="form-group">
          <label htmlFor="lunch-small">
            <input
              onChange={handlePrice}
              name="size"
              type="radio"
              id="lunch-small"
              value="15"/>
            <span>Pq.</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lunch-medium">
            <input
              onChange={handlePrice}
              name="size"
              type="radio"
              id="lunch-medium"
              value="17"/>
            <span>Med.</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lunch-big">
            <input
              onChange={handlePrice}
              name="size"
              type="radio"
              id="lunch-big"
              value="20"/>
            <span>Gd.</span>
          </label>
      </div>
    </div>
  )
}

export default LunchSize
