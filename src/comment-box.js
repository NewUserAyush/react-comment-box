import React from 'react';
import ContentCommentBox from './content-comment-box';

function CommentBox(props){
    
    return(
        <div>
            {setData(props.data)}
        </div>
    )
}

function setData(data){
    let arr=[];
    debugger;
    findDdata(data,arr);
    return arr;
}

function findDdata(data,arr){
  
    for(let i=0;i<data.length;i++){
       
        if(data[i].reply){
            let newarr=[];
            let newRef=React.createRef();
            findDdata(data[i].reply,newarr);
            arr.push(<ContentCommentBox data={data[i]}><div className="reply" onClick={(e)=>toggleComment(newRef)}>reply</div> <div className="content" ref={newRef}>{newarr}</div></ContentCommentBox>);
        }
        else{
             //insertEle
            arr.push(<ContentCommentBox data={data[i]}/>);
        }
    }
}

function toggleComment(newRef){
    newRef.current.style.display=newRef.current.style.display=='none'?'block':'none';
}
export default CommentBox;