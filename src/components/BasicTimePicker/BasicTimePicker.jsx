import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicTimePicker({ label, updatedCallBack }) {
  const [value, setValue] = useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          updatedCallBack(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}


// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
// import { DatePicker } from "@mui/x-date-pickers"



// export default function DatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//   <TimePicker
//     label="Basic example"
//     value={value}
//     onChange={(newValue) => {
//       setValue(newValue);
//     }}
//     renderInput={(params) => <TextField {...params} />}
//   />
//     </LocalizationProvider>
//   )
// }
