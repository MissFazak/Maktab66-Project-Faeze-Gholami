import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { Link, Outlet} from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/material";

export default function ListOfBrands() {
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
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
          {Object.values(category).map((item) => (
            <List
              sx={{
                direction: "ltr",
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <Link to={{ pathname: "brands" }} state={item}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
              <Collapse unmountOnExit>
                {Object.values(items).map((el) => {
                  if (item.id == el.category) {
                    return (
                      <List component="div" disablePadding>
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
      <Outlet />
    </div>
  );
}
