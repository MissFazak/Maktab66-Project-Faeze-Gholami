import { api } from "./api";
const token = localStorage.getItem('token')

const getProducts = () =>{
    return api.get('/products')
}
const getCategory = () =>{
    return api.get('/category')
}
const getUsers = () =>{
    return api.get('/users')
}
const getOrders = () =>{
    return api.get('/orders',{headers:{token:token}})
}
const getOrderStatus = () =>{
    return api.get('/orderStatus')
}

const creatProduct = data =>{
    return api.post('/products',data)
}

const creatOrder = data =>{
    return api.post('/orders',data)
}

const updateProduct = (id,data) =>{
    return api.patch(`/products/${id}`,data,{headers:{token:token}})
}

const removeProduct = id =>{
    return api.delete(`/products/${id}`)
}

const service = {
    getProducts,
    getCategory,
    getUsers,
    getOrders,
    getOrderStatus,
    creatProduct,
    creatOrder,
    updateProduct,
    removeProduct,
}

export default service