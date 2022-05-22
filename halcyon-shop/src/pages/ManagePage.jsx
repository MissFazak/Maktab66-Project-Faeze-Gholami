import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector,updateItems,deleteItem } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ItemModal from '../components/ItemModal'
import service from "../redux/http";

export default function CustomizedTables(props) {
  const initialState = {
    id: null,
    name:"",
    category:"",
    price: "",
    count:"",
    description:"",
    images:[],
    thumbnail:"",
  }
  const [currentState,setCurrentState] = useState(initialState)
  const [message,setMessage] = useState('')
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);
  const getService = id =>{
    service.get(id).then(res => setCurrentState(res.data))
  }
  // useEffect(()=>{
  //   getService(props.match.id)
  // },[props.match.id])

  const handleInputChange = event =>{
    const {name,value} = event.target
    setCurrentState({...currentState,[name]:value})
  }

  const updateStatus = status =>{
    const data = {
      id: currentState.id,
      name:currentState.name,
      category:currentState.category,
      price:currentState.price,
      description:currentState.description,
      images:currentState.images,
      thumbnail:currentState.thumbnail,
    }
    dispatch(updateItems({id:currentState.id,data})).unwrap().then(res=>{
      console.log(res);
      setCurrentState({...currentState})
      setMessage('the status was update')
    })
  }
  const updateContent = () =>{
    dispatch(updateItems({id:currentState.id,data:currentState})).unwrap().
    then(res =>{
      console.log(res);
      setMessage('the status was update')
    })
  }



  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 10 
  },
    {
      field: "thumbnail",
      headerName: "تصویر",
      width: 50,
     renderCell: (params)=>{
        return (
          <div>
            <img style={{width:'30px'}} src={params.row.thumbnail} alt='' />
          </div>
        )
      }
    },
    {
      field: "name",
      headerName: "نام کالا",
      width: 150,
    },
    {
      field: "category",
      headerName: "دسته‌بندی",
      width: 110,
    },
    {
      field: "action",
      headerName: "",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const handleEdit = (e) => {
          e.stopPropagation();
          updateStatus()
        };
        const handleDelete = (e) => {
          e.stopPropagation();
          console.log(params.row.id);
          
        }
        return (
          <>
            <Button onClick={handleEdit}>ویرایش</Button>
            <Button onClick={handleDelete}>حذف</Button>
          </>
        );
      },
    },
  ];
  const rows = items.map((item) => {
    return {
      id: item.id,
      thumbnail: `http://localhost:3002/files/${item.thumbnail}`,
      name: item.name,
      category: category.map(el=>{if(el.id==item.category){return el.name}}),
    };
  });
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <ItemModal/>
      </div>
      <DataGrid rows={rows} columns={columns} autoHeight pageSize={5}/>
    </div>
  );
}
