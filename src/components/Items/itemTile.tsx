import React, { useState } from 'react'
import { Item } from '../../Types'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import StarRatingComponent from 'react-star-rating-component'
import styles from './styles/itemTile.module.css'

const ItemTile: React.FC<Item> = ({
  item_name, image_url, created_at, rating, comment
}) => {
  const [ ratingState, setRatingState ] = useState(null)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.date}>2020/10/1</div>
        <div className={styles.edit_btn}><MoreVertIcon /></div>
      </div>
      <img className={styles.image} src={image_url} alt="item_image" />
      <div className={styles.item_name}>{item_name}</div>
      <div className={styles.rating_icon}>
       <StarRatingComponent 
        name="rate1"
        editing={false}
        starCount={5}
        value={2}
       />
      </div>
      <div className={styles.comment}>{comment}</div>
    </div>
  )
}

export default ItemTile