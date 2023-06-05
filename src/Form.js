// Form.js

// form was a stretch goal so I'm keeping this here so I can update the project in the future

const Form = (props) => {
    
    return(
        <form action="" onSubmit={(e) => {props.handleSubmit(e)}}>
            {/*using a form even though its just a button to allow for more options in the future */}
            <button>Generate</button>
        </form>
    )
}

export default Form;