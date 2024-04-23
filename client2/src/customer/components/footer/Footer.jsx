import { Button, Grid, Typography, colors } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black', color:"white" , py:3 }} 
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Contact</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>about</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>block</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>press</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>job</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>partner</Button>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Solution</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>marketing</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>analytics</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>commerce</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>insides</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>support</Button>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>Api status</Button>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>claim</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>privacy</Button>

            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom>terms</Button>
            </div>
        </Grid>

        <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component='p' align='center'>
                &copy; 2024 my company . All rights reserved
            </Typography>
            <Typography>
                Made with love and joy
            </Typography>
            <Typography>
                
            </Typography>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Footer
