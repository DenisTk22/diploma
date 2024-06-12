class Comments extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='card-commnets'>
                <form className='comments-item-create'>
                    <input type='text'/>
                    <input type='submit' hidden />
                </form>
                <SingleComment/>
            </div>
        )
    }
}