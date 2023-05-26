const Form = (props) => {

    return(
        <form action="" onSubmit={(e) => {props.handleSubmit(e)}}>
            {/*using a form even though its just a button to allow for more options in the future */}
            <button>Generate</button>
        </form>
    )
}

export default Form;