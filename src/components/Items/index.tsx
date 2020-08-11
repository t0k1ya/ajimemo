import React from 'react'
import styles from './styles/index.module.css'
import { testData } from '../../mock/testData'
import ItemTile from './itemTile'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
      <div className={styles.add_icon}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  )
  return items
}

export default Items