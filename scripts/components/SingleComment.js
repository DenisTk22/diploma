class SingleComment extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <>
                <form className='comments-item'>
                    <div className='comments-item-delete'>&times;</div>
                    <input type='text' />
                    <input type='submit' hidden />
                </form>
            </>
        )
    }
}