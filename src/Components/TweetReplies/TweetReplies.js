import React, { useState } from 'react'
import style from './TweetReplies.module.css'
import Image from "../../Assest/Image/Profile.png"
import { useParams } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import RetweetButton from '../../Atom/RetweetButton/RetweetButton'
import LikeButton from '../../Atom/LikeButton/LikeButton'

function TweetReplies() {
    const tweetData=useRecoilValue(IspostAtom)



  
    const id = useParams();
    const uid=id.id
    // console.log(uid)
  
    const data= tweetData.filter((item)=>{
      return uid==item.id
    })
      

    // console.log(data)

  //   const newTweet={
  //     name : 'Kirti',
  //     handlerName : '@Kirti567',
  //     tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing'
  // }

    let newData=data[0].tweets[0].TweetReplies.push()
    console.log(newData)
    
  return (
    <div className={style.main}>
      {data.map((elem)=>
      <>
      <div className={style.firstdiv}>
      <div className={style.body}>
        <img  className={style.img} src={Image} alt="Profile" />
        <div className={style.userDetails}>
        <h4>{`${elem.tweets[0].TweetReplies[0].name}  ${elem.tweets[0].TweetReplies[0].handlerName}`}</h4>
        <h5>Replying to <span className={style.handlerName}>{elem.handlerName}</span></h5>
        </div>
       
      </div>
        <div className={style.para}>{elem.tweets[0].TweetReplies[0].tweetReplyText}</div>

        <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>
      </div>




       <div className={style.secondDiv}>

       </div>
      <div className={style.body}>
        <img  className={style.img} src={Image} alt="Profile" />
        <div className={style.userDetails}>
        <h4>{`${elem.tweets[0].TweetReplies[1].name}  ${elem.tweets[0].TweetReplies[1].handlerName}`}</h4>
        <h5>Replying to <span className={style.handlerName}>{elem.handlerName}</span></h5>
        </div>
       
      </div>
        <div className={style.para}>{elem.tweets[0].TweetReplies[1].tweetReplyText}</div>
        <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>
      </>
      )}
    </div>
  )
}

export default TweetReplies