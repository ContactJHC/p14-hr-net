import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";


export default function SelectCountry() {

    const [country, setCountry] = useState('')

    const handleChange = (event) => {
      setCountry(event.target.value)
    }

    const departments = [
        "Sales",
        "Marketing",
        "Engineering",
        "Human Resources",
        "Legal"
    ]

  return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="country-select-label">State</InputLabel>
        <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            label="country"
            onChange={handleChange}
        >
            {departments.map(department => <MenuItem value={department}>{department}</MenuItem>)}
        </Select>
        </FormControl>
        </Box>
  )
}