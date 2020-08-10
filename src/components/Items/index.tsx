import React from 'react'
import styles from './styles/index.module.css'
import { testData } from '../../mock/testData'
import ItemTile from './itemTile'

const Items: React.FC = () => {
  const items = (
    <div className={styles.wrapper}>
      {
        testData.map((e, i) => (
          <div key={i}>
            <ItemTile
              item_name={e.item_name}
              image_url={e.image_url}
              created_at={e.created_at}
              rating={e.rating}
              comment={e.comment}
            />
          </div>
        ))
      }
    </div>
  )
  return items
}

export default Items