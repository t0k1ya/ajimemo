import React, { useState } from 'react'
import Header from './../Header'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import StarRatingComponent from 'react-star-rating-component'

import styles from './styles/index.module.css'

const AddItemPage = () => {
  // const { rating, setRating } = useState(1)

  // const onStarClick = (nextValue: number, prevValue: number, name: string) => setRating(nextValue)

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.scrolling_wrapper} >
        <div className={styles.item}>
          <div className={`${styles.picture_num} ${styles.photoIcon}`}>
            <AddPhotoAlternateIcon fontSize="large" width="200%" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.picture_num}>2</div>
        </div>
        <div className={styles.item}>
          <div className={styles.picture_num}>3</div>
        </div>
        <div className={styles.item}>
          <div className={styles.picture_num}>4</div>
        </div>
        <div className={styles.item}>
          <div className={styles.picture_num}>5</div>
        </div>
      </div>

      <div className={styles.item_detail}>
        <div className={`${styles.input_field} ${styles.item_name}`}>
          <label>商品名</label>
        </div>
        <div className={`${styles.input_field} ${styles.item_category}`}>
          <label>カテゴリー</label>
        </div>
        <div className={`${styles.input_field}`}>
          <label>星いくつ？</label>
          <div className={styles.item_rating}>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={1}
              onStarClick={() => console.log('hello')}
            />
          </div>
        </div>
      </div>

      <div className={styles.comment}>
        <label>味メモ</label>
        
      </div>
    </div>
  )
}

export default AddItemPage
