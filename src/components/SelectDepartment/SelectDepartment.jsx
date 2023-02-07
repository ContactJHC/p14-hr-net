import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";


export default function SelectDepartment({ updatedCallBack }) {

    const [department, setDepartment] = useState('')

    const handleChange = (event) => {
      setDepartment(event.target.value)
      updatedCallBack(event.target.value)
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
        <InputLabel id="department-select-label">Department</InputLabel>
        <Select
            labelId="department-select-label"
            id="department-select"
            value={department}
            label="department"
            onChange={handleChange}
        >
            {departments.map(department => <MenuItem value={department} key={Math.random()*1000}>{department}</MenuItem>)}
        </Select>
        </FormControl>
        </Box>
  )
}