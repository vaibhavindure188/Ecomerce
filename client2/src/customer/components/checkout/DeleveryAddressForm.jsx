import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../addressCard/AddressCard'
import { useNavigate } from 'react-router-dom' 
function DeleveryAddressForm() {
    const [name, setName] = useState("")
    const [last, setLast] = useState("")
    const [add, setAdd] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [mob, setMob] = useState('')

    const [adds,setAdds] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            name:data.get('firstName'),
            lastName : data.get('lastName'),
            city : data.get('city'),
            state: data.get('state'),
            zip : data.get('zip'),
            phonNumber : data.get('phoneNumber'),
            address: data.get('address')
        }
        console.log(address)
        setAdds((pre) => [address,...pre]);
        console.log('address :', adds);
        setMob("")
        setAdd('')
        setCity('')
        setLast('')
        setZip('')
        setState('')
        setName('')

    }

    const handleClick = () =>{
        navigate(`/checkout?step=3`);
    }
  return (
    <div className='mx-20'>
      <Grid sx={{mt:2}} container spacing={4}  className="">
        <Grid xs={12} lg={5} item className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
            <div className='p-5 py-7 border-b cursor-pointer'>
                
                {
                    adds.map((item)=><AddressCard item= {item}/> )
                }
                <Button onClick={()=>handleClick()} variant="contained" color="primary" size='large' sx={{mt:2, bgcolor:'indigo',marginBottom:1}}>Use this address</Button>
               
            </div>
        </Grid>

        <Grid item lg={7} xs={12} sx={{}}>
            <Box className='border rounded-md shadow-sm p-5'>
             <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  id='firstName' name='firstName' label='First Name' value={name} onChange={(e)=>setName(e.target.value)}   fullWidth required autoComplete='given-name'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  id='lastName' name='lastName' label='Last Name' value={last} onChange={(e)=>setLast(e.target.value)}  fullWidth required autoComplete='given-name'/>
                    </Grid>
                    <Grid xs={12} sm={12} lg={12} sx={{paddingX:3, paddingTop:3}}>
                    <TextField  id='address' name='address' label='Address' value={add} onChange={(e)=>setAdd(e.target.value)}  multiline rows={3} fullWidth required autoComplete='given-name'/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField  id='city' name='city' label='City' value={city} onChange={(e)=>setCity(e.target.value)}    fullWidth required autoComplete='given-name'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  id='state' name='state' label='State' value={state} onChange={(e)=>setState(e.target.value)}  fullWidth required autoComplete='given-name'/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField  id='zip' name='zip' label='Zip-Postal code' value={zip} onChange={(e)=>setZip(e.target.value)}    fullWidth required autoComplete='given-name'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  id='phoneNumber' name='phoneNumber' label='Phone Number' value={mob} onChange={(e)=>setMob(e.target.value)}  fullWidth required autoComplete='given-name'/>
                    </Grid>
                    <Button type='submit' variant="contained" color="primary" size='large' sx={{mt:2, bgcolor:'primary', marginLeft:3}}>Delever Here</Button>
                </Grid>
                </form>
            </Box>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default DeleveryAddressForm
