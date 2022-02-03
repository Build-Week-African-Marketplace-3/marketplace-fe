import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledContainer = styled.div`
margin-top: 0;

`

const StyledWrapper = styled.div`
    padding: 5%;
    margin: 3%;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;


`
const StyledCard = styled.div`
    
    cursor: pointer;
     
`
const StyledImg = styled.img`
    max-width: 65%;
    max-height: 65%;
    margin: 15px;
    border: 1px solid #555555;
    border-radius: 5px;
    box-sizing: border-box;
`

const StyledInput = styled.input`
    width: 20%;
    margin-left:40%;
    position: fixed;
    margin-top: 0.8vh;
    height: 4vh;
    text-align: center;
    font-size: 2vh;
`

const Marketplace = () => {
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get('https://marketplace-be-02.herokuapp.com/api/items')
        .then(resp => {
            setItems([
                ...items,
                ...resp.data
            ])
            console.log(resp)
        })
        .catch(err => {
            console.log({err})
        })
    }, [])

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setItems(items => items.filter((item) => item.name.includes(searchInput)))

    }

    

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <StyledInput
                type='text'
                name='search'
                placeholder="search"
                onChange={handleChange}
                />
            </form>
        </div>
        <StyledContainer>
            <StyledWrapper>
                {items.map(item => (
                    <StyledCard className="item-card" key={item.item_id}>
                        <StyledImg src={item.image} />
                        <p>{item.name}</p>
                        <p>$: {item.price}</p>
                        <p>{item.description}</p>
                    </StyledCard>
                ))}
            </StyledWrapper>
        </StyledContainer>
        </>
    )
}

export default Marketplace;