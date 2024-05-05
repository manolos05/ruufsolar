

import React from 'react'


//este componente será el que recibe los parametros de las medidas del panel y techo para poder realizar nuestros calculos
export const CalculateRoofPanels = ({ widthPanel, heigthPanel, widthRoof, heithgRoof }) => {

    const calculateRoofPanel = (widthPanel, heigthPanel, widthRoof, heithgRoof) => {
        // lo primero que haremos es evitar que nuestros parametros sean distintos a 0.
        if (widthPanel <= 0 || heigthPanel <= 0 || widthRoof <= 0 || heithgRoof <= 0) {
            return 0
        }

        // Calculos necesarios para poder realizar otras evaluaciones 

        const areaPanel = widthPanel * heigthPanel
        const areaRoof = widthRoof * heithgRoof
        const panelPerRow = Math.floor(widthRoof / widthPanel) // estos deben ser !== 0
        const panelPerColumn = Math.floor(heithgRoof / heigthPanel) // estos deben ser !== 0

        //2*3 = 6 3*2= 6

        if (areaPanel === areaRoof) {
            return areaRoof / areaPanel
        }

        // establecemos 

        if ((widthPanel < widthRoof && panelPerRow > 1) && (heigthPanel < heithgRoof && panelPerColumn > 1)) {
            return Math.floor(areaRoof / areaPanel)
        }

        if ((widthPanel <= heithgRoof && panelPerRow > 1) && (heigthPanel <= widthRoof && panelPerColumn > 1)) {
            return Math.floor(areaRoof / areaPanel)
        }

        if (panelPerRow === 0 && panelPerColumn > 0) {
            return Math.floor(widthRoof / widthPanel) * panelPerColumn
        }

        if (panelPerColumn === 0 && panelPerRow > 0) {
            return Math.floor(heithgRoof / heigthPanel) * panelPerRow
        }

        return panelPerColumn * panelPerRow
    }

    const totalPanels = calculateRoofPanel(widthPanel, heigthPanel, widthRoof, heithgRoof)

    // console.log(calculateRoofPanel(1, 2, 2, 4), "test 1"); 
    // console.log(calculateRoofPanel(1, 2, 3, 5), "test 2");
    // console.log(calculateRoofPanel(2, 2, 1, 10), "test 3");
    //console.log(calculateRoofPanel(2, 3, 3, 2), "test 4");
    // console.log(calculateRoofPanel(2, 2, 2, 13), "test 4") // 6?
    return (
        <div>Cantidad de paneles: {totalPanels}</div>
    )
}
