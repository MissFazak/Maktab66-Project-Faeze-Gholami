import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import samsung from "../assets/img/kv_galaxy-s22-ultra_l.jpg"
import apple from "../assets/img/Apple_iphone13_design_09142021_big.jpg.slideshow-xlarge_2x.jpg"
import xiaomi from "../assets/img/2021_New_smartphone_Xiaomi_Mi_11_on_a_white_background_151006_.jpg"
import huawei from "../assets/img/huawei-nova-9-3.jpg"


export default function CarouselCom() {
  return (
    <>
      <div>
        <Carousel animation='slide' indicators={false} navButtonsAlwaysVisible={true}>
          <Item ><img src={samsung}/></Item>
          <Item><img src={apple}/></Item>
          <Item><img src={xiaomi}/></Item>
          <Item><img src={huawei}/></Item>
        </Carousel>
      </div>
    </>
  )
}
