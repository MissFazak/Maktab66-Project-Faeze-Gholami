import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsSelector } from "../redux/productSlice";
import { categorySelector } from "../redux/categorySlice";
import { Link, Outlet} from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

export default function ListOfBrands() {
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);

  return (
    <div className="brandsPage">
      <div className="sidebar">
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: "100vh",
            "& ul": { padding: 0 },
          }}
        >
          {category.map((item) => (
            <List
              sx={{
                direction: "ltr",
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              key={uuidv4()}
            >
              <ListItemButton>
                <Link to={{ pathname: "brands" }} state={item}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
              <Collapse>
                {items.map((el) => {
                  if (item.id == el.category) {
                    return (
                      <List component="div" disablePadding key={uuidv4()}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary={el.name} />
                        </ListItemButton>
                      </List>
                    );
                  }
                })}
              </Collapse>
            </List>
          ))}
        </Box>
      </div>
      <Outlet/>
    </div>
  );
}
