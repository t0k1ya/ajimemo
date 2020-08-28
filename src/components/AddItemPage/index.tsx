import React, { useState } from 'react'
import Header from './../Header'
import { ImageSection } from './imageSection'
import StarRatingComponent from 'react-star-rating-component'

import styles from './styles/index.module.css'

const AddItemPage = () => {
  // const { rating, setRating } = useState(1)

  // const onStarClick = (nextValue: number, prevValue: number, name: string) => setRating(nextValue)

  return (
    <div className={styles.wrapper}>
      <Header />
      
      <ImageSection />
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
