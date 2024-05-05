

import React, { useState } from 'react'
import { CalculateRoofPanels } from './CalculateRoofPanels'

// esta es la form para poder probar más visual
export const FormRuuf = () => {
    // estados para poder manejar los valores en la form
    const [widthPanel, setWidthPanel] = useState(0)
    const [heigthPanel, setHeigthPanel] = useState(0)
    const [widthRoof, setWidthRoof] = useState(0)
    const [heigthRoof, setHeigthRoof] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <>
            <h2>FormRuuf</h2>
            <form onSubmit={handleSubmit}>
                <h4> Size Panel</h4>
                <label >
                    Width panel:
                    <input type='number' value={widthPanel} onChange={(e) => setWidthPanel(parseFloat(e.target.value))} />
                </label>
                <br />
                <label>
                    Heigth panel:
                    <input type='number' value={heigthPanel} onChange={(e) => setHeigthPanel(parseFloat(e.target.value))} />
                </label>
                <br />
                <h4> Size Roof</h4>
                <label>
                    Width Roof:
                    <input type='number' value={widthRoof} onChange={(e) => setWidthRoof(parseFloat(e.target.value))} />
                </label>
                <br />
                <label>
                    Heigth Roof:
                    <input type='number' value={heigthRoof} onChange={(e) => setHeigthRoof(parseFloat(e.target.value))} />
                </label>

                <br />
                <button type='submit'> Calculate</button>
            </form>
            <CalculateRoofPanels widthPanel={widthPanel} heigthPanel={heigthPanel} widthRoof={widthRoof} heithgRoof={heigthRoof} />

        </>
    )
}
