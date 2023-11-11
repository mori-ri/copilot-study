import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function SelectComponent() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  const handleClick = () => {
    alert(`You selected: ${selectedValue}`);
  };

  const options = ["選択１", "選択２", "選択３"];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          onChange={handleChange}
          label="Options"
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Build
      </Button>
    </Box>
  );
}
