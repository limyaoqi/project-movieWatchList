import { IconButton } from "@mui/material";

import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

export function SwapButton({ swapMode }) {
  return(
  <IconButton onClick={swapMode}>
    <SwapVerticalCircleIcon
      sx={{
        color: "black",
        fontSize: "40px",
        "@media (max-width: 336px)": {
          fontSize: "30px",
        },
      }}
    />
  </IconButton>
  )
}
