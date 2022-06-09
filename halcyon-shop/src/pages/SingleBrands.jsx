import React, { useMemo } from "react";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { itemsSelector } from "../redux/productSlice";
import CardComponent from "../components/CardComponent";
import { useFetch } from "../redux/useFetch";
import { Box } from "@mui/system";


export default function SingleBrands() {
  const { items } = useSelector(itemsSelector);
  let state = useLocation();
  const map = state.state;
  const limit = useMemo(() => 6, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `http://localhost:3002/products?category=${map.id}&_page=${activePage}&_limit=${limit}`
  );
  

  return (
    <Box className='singleBrands' sx={{display:"flex",flexDirection:'column'}}>
      <div className="cardWrapper">
        {data?.data?.map((item) => {
          if (item.category == map.id) {
            return <div className="brandCardStyle">
              <CardComponent item={item}></CardComponent>
            </div>;
          }
        })}
      </div>
        <Pagination
          variant="outlined"
          sx={{marginTop:'10px', display:'flex', justifyContent:'center'}}
          defaultPage={1}
          color="primary"
          page={activePage}
          count={Math.ceil(data?.headers['x-total-count'] / limit)}
          onChange={(_, page) => {
            console.log("page:", page);
            setActivePage(page);
          }}
        />
    </Box>
  );
}
