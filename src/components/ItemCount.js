import React from 'react'


export const ItemCount = ( {cantidad, modify, max} ) => {

    const handleRestar = () => {
        if (cantidad > 0)  {
            modify(cantidad - 1)
        }
    }

    const handleSumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1)
        }
    }

    return (
        <div className="btnMasMenos">
            <button 
                onClick={handleRestar}
        
            >
                -
            </button>

            <span >{cantidad}</span>

            <button
                onClick={handleSumar}
               
            >
                +
            </button>
        </div>
    )
}