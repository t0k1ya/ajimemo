import React, { useState, useEffect } from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import BarcodeReader from 'react-barcode-reader'

import styles from './styles/index.module.css'

export const ImageSection = () => {
  const [ result, setResult ] = useState('')

  const handleScan = (data: string) => {
    alert(data)
    setResult(data)
  }

  return (
    <div className={styles.scrolling_wrapper} >
      <div>
        カメラ
        <BarcodeReader
          onScan={handleScan}
        />
      </div>
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
  )
}