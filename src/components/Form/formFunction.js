const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Romance",
  "Animation",
];

export function getStyles(g, genre, theme) {
  return {
    fontWeight:
      genre.indexOf(g) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    color:
      genre.indexOf(g) === -1
        ? theme.palette.text.primary // default text color
        : theme.palette.primary.main, // color when selected
  };
}





// const NumberInput = forwardRef(function CustomNumberInput(props, ref) {
//   return (
//     <BaseNumberInput
//       slots={{
//         root: StyledInputRoot,
//         input: StyledInputElement,
//         incrementButton: StyledButton,
//         decrementButton: StyledButton,
//       }}
//       slotProps={{
//         type: "number",
//         incrementButton: {
//           type: "button",
//           children: "▴",
//         },
//         decrementButton: {
//           children: "▾",
//           type: "button",
//         },
//       }}
//       {...props}
//       ref={ref}
//     />
//   );
// });

// const StyledInputRoot = styled("div")(
//   ({ theme }) => `
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-weight: 400;
//     border-radius: 8px;
//     color: ${
//       theme.palette.mode === "dark" ? "#fff" : "#000"
//     }; // Change text color
//     background: ${
//       theme.palette.mode === "dark" ? "#333" : "#fff"
//     }; // Change background color
//     border: 1px solid ${
//       theme.palette.mode === "dark" ? "#666" : "#ccc"
//     }; // Change border color
//     box-shadow: 0px 2px 2px ${
//       theme.palette.mode === "dark" ? "#666" : "#ddd"
//     }; // Change box shadow
//     display: grid;
//     grid-template-columns: 1fr 19px;
//     grid-template-rows: 1fr 1fr;
//     overflow: hidden;
//     column-gap: 8px;
//     padding: 4px;

//     &.${numberInputClasses.focused} {
//       border-color: #007FFF; // Change border color when focused
//       box-shadow: 0 0 0 3px ${
//         theme.palette.mode === "dark" ? "#0072E5" : "#007FFF"
//       }; // Change box shadow when focused
//     }

//     &:hover {
//       border-color: #007FFF; // Change border color on hover
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `
// );

// const StyledInputElement = styled("input")(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 2.2;
//   grid-column: 1/2;
//   grid-row: 1/3;
//   color: ${
//     theme.palette.mode === "dark" ? "#fff" : "#000"
//   }; // Change text color
//   background: inherit;
//   border: none;
//   border-radius: inherit;
//   padding: 8px 12px;
//   outline: 0;
// `
// );

// const StyledButton = styled("button")(
//   ({ theme }) => `
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: center;
//     align-items: center;
//     appearance: none;
//     padding: 0;
//     width: 19px;
//     height: 19px;
//     font-family: system-ui, sans-serif;
//     font-size: 0.875rem;
//     line-height: 1;
//     box-sizing: border-box;
//     background: ${
//       theme.palette.mode === "dark" ? "#333" : "#fff"
//     }; // Change background color
//     border: 1px solid ${
//       theme.palette.mode === "dark" ? "#666" : "#ccc"
//     }; // Change border color
//     color: ${
//       theme.palette.mode === "dark" ? "#fff" : "#000"
//     }; // Change text color
//     transition-property: all;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     transition-duration: 120ms;

//     &:hover {
//       background: #007FFF; // Change background color on hover
//       border-color: #007FFF; // Change border color on hover
//       cursor: pointer;
//     }

//     &.${numberInputClasses.incrementButton} {
//       grid-column: 2/3;
//       grid-row: 1/2;
//       border-top-left-radius: 4px;
//       border-top-right-radius: 4px;
//       border: 1px solid #ccc;
//       border-bottom: 0;
//       &:hover {
//         cursor: pointer;
//         background: #007FFF; // Change background color on hover
//         color: #fff; // Change text color on hover
//       }
//     }

//     &.${numberInputClasses.decrementButton} {
//       grid-column: 2/3;
//       grid-row: 2/3;
//       border-bottom-left-radius: 4px;
//       border-bottom-right-radius: 4px;
//       border: 1px solid #ccc;
//       &:hover {
//         cursor: pointer;
//         background: #007FFF; // Change background color on hover
//         color: #fff; // Change text color on hover
//       }
//     }

//     & .arrow {
//       transform: translateY(-1px);
//     }
//   `
// );
