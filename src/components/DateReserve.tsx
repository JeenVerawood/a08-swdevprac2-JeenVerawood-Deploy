'use client' // ต้องระบุว่าเป็น Client Component 
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label="Select Booking Date" 
        value={reserveDate}
        onChange={(newValue) => setReserveDate(newValue)}
        slotProps={{ textField: { fullWidth: true, variant: 'standard' } }}
      />
    </LocalizationProvider>
  );
}