import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'



export default function InfoBox({ info }) {
     console.log(info.city)
    const coldUrl = "https://plus.unsplash.com/premium_photo-1671127302439-a05f49dd5171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    const rainurl = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hotUrl = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    return (<div className='InfoBox'>
            <Card sx={{ maxWidth: 500 }} className='InfoCard'>
      <CardMedia
        sx={{ height: 140 }}

                image={info.humidity > 80 ? rainurl : info.temp < 15 ? coldUrl : hotUrl}
                title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           
                    <b>  feels_like: {info.feels_like }</b>   <br /> <br />
                    <b> humidity: {info.humidity }</b>       <br /> <br />
                      <b> pressure: {info.pressure}</b>       <br /> <br />
                         <b>temp: {info.temp}</b> <br /> <br />
                    <b> temp_max: { info.temp_max}</b> <br /> <br />
                    <b> temp_min: {info.temp_min }</b> <br /> <br />
            

                    
        </Typography>
      </CardContent>
     
    </Card>
    </div>)
}