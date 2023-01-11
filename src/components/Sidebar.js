import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constant'


function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
        direction="row" 
        sx={{ 
            overflowY: "auto", 
            height: {sx: "auto", md: "95%"}, 
            flexDirection: {md: "column"} }}>

        {categories.map((category) => (
            <button className='category-btn' onClick={() => setSelectedCategory(category.name)}
                style={{ background: category.name === selectedCategory && "#fc1503", color: "white", fontSize: "11px"}}>

                <span style={{ 
                    color: category.name === selectedCategory ? "white" : "red",
                    marginRight: "10px" }}>
                        {category.icon}
                </span>
                <span style={{ 
                    opacity: category.name === selectedCategory ? "1" : ".8" }}>
                        {category.name}
                </span>
            </button>
        ))}

    </Stack>
  )
}

export default Sidebar