import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import { editUser } from '../actions/apiCalls';


let EditUserModalForm = (props) => {

    const { handleSubmit, handleClose, submitting, pristine, defaultValues } = props;

    const doSubmit = (values) => {
        props.editUser(defaultValues, values);
    }

    return (
        <form onSubmit={handleSubmit(doSubmit)}>
            <div className="form">
                <label>First Name</label>
                <Field name="firstName" component="input" placeholder={defaultValues.name} />
            </div>
            <div className="form">
                <label>Last Name</label>
                <Field name="lastName" component="input" placeholder={defaultValues.surname} />
            </div>
            <div className="form">
                <label>Current job</label>
                <Field name="job" component="input" placeholder={defaultValues.job} />
            </div>
            <div className="modalFormButtonArea">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" disabled={pristine || submitting} onClick={handleClose} >
                    Submit
                </Button>
            </div>
        </form>
    )
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ editUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'userForm'
})(EditUserModalForm));
