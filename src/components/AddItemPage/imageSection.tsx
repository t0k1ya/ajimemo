import React, { useState, useEffect } from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { Button, Input, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles/index.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export const ImageSection = () => {
  const [ hasImg, setHasImg ] = useState(false)

  const previewFile = () => {
    setHasImg(true)
    const preview = document.querySelector('img')
    const file = (document.getElementById('icon-button-file') as HTMLInputElement).files;
    console.log('file: ', file)
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      if (preview) preview.src = reader.result as string
    }, false)

    if (file) {
      reader.readAsDataURL(file[0])
    }
  }

  const classes = useStyles()

  return (
    <div className={styles.scrolling_wrapper} >

      {
        !hasImg ? (
          <>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={previewFile} />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <AddPhotoAlternateIcon style={{fontSize: '3em'}} width="200%" />
            </IconButton>
          </label>
          </>
        ) : <img src="" height="100" alt="" />
      }

      {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={previewFile} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddPhotoAlternateIcon style={{fontSize: '3em'}} width="200%" />
        </IconButton>
      </label>
      
      <img src="" height="100" alt="" /> */}
{/* 
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
      </div> */}
    </div>
  )
}