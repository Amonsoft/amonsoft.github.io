//we are building a simple, comment box

//The comment box
var CommentBox = React.createClass({
    getInitialState : function (){
        return {data:[]};
    },
    //server Ajax Function
   loadCommentsFromServer:function(){
      $.ajax({
          url:this.props.url,
          dataType: 'json',
          cache: false,
          success :function(data){
              this.setState({data:data});
          }.bind(this),
          error: function(xhr,status,err){
              console.error(this.props.url,status,err.toString());
          }.bind(this)
      })  ;
    },
    
    componentDidMount:function(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer,this.props.pollInterval);
    },
    render : function(){
        return (
        <div className="commentBox"> 
            Hello world, I am a comment box.
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
            <CommentForm />
            </div>
        );
    }
});

//the commentList

var CommentList = React.createClass({
    render : function (){
        var commentNodes = this.props.data.map(function(comment){
            
       
        return(
            
            <Comment author={comment.author} key={comment.id} >{comment.text} </Comment>            
        );
             });
        return(
        <div className="commentList" >
            {commentNodes}
            </div>
        );
        
    }
});

// the comment
var Comment = React.createClass({
    render: function(){
        return(
        <div className="comment">
            <h2 className="commentAuthor" >
            {this.props.author}
            </h2>
            {this.props.children}
        </div>
        );
    }
});


//Sample json Data
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
//the comment Form
var CommentForm = React.createClass({
    render :function (){
        return(
        <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
        );
    }
});
//the render box

ReactDOM.render(<CommentBox /*data={data}*/ url="/api/comments" pollInterval = {2000}/>, document.getElementById('content'));