import React from 'react'
import { Item } from '../../Types'
import styles from './styles/itemTile.module.css'

const ItemTile: React.FC<Item> = ({
  item_name, image_url, created_at, rating, comment
}) => {
  return (
    <div className={styles.wrapper}>
      {/* <div>{created_at}</div> */}
      <img src={image_url} alt="item_image" />
      <div className={styles.item_name}>{item_name}</div>
      <div>{rating}</div>
      <div>{comment}</div>
    </div>
  )
}

export default ItemTile