import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {FormControl} from "../../../Common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type='textarea'
                   component={FormControl}
                   validate={[requiredField, maxLength10]}
                   placeholder='messageText'
                   name='onDiaChange'
            />
        </div>
        <div>
            <button>add Dia</button>
        </div>

    </form>
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);