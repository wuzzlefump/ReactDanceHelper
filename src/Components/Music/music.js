import React from 'react'

function MusicBox({music, name}){

    return(<>{(name.includes("Country")=== true)? <p>Paul Doesn't Listen to Country Music</p> :<> <iframe src={music.src} width="300" height="250" style={{border: "0px none"}}></iframe><p className="_8t_embed_p" style={{fontSize: "11px", lineHeight: "12px"}}><a href={music.ref}>{name}</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p></>}</>)
}
export default MusicBox;