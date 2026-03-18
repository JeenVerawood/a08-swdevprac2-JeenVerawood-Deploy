import { TextField, MenuItem, Button , Select , FormGroup  } from '@mui/material';
import DateReserve from '@/components/DateReserve'; 
// import CardPanel from '@/components/CardPanel';
export default function BookingPage() {
  return (
    <main className="p-15 ">
      <h1 className="text-4xl font-bold mt-20">Booking Venue</h1>
      <FormGroup>
        {/* ชื่อและนามสกุล */}
        <TextField 
          name="Name-Lastname" 
          label="Name-Lastname" 
          variant="standard" 
          fullWidth 
        />
        
        {/* หมายเลขติดต่อ */}
        <TextField 
          name="Contact-Number" 
          label="Contact-Number" 
          variant="standard" 
          fullWidth 
        />

        {/* เลือกสถานที่ */}
  
        <Select variant='standard' id='venue' defaultValue={""}>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

        {/* Component สำหรับเลือกวันที่ */}
        <DateReserve />

        {/* ปุ่มกดส่ง */}
        <Button variant="contained" name="Book Venue">
          Book Venue
        </Button>
      </FormGroup>
      {/* <CardPanel /> */}
    </main>
  );
}