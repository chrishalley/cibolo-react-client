import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { isEmail, isEmpty, isLength } from 'validator'

import * as actions from '../../actions'
import { FormBuilder, Card } from '../common'

const LoginForm = (props) => {

  const [error, setError] = useState(null)

  const form = [
    {
      component: 'Fieldset',
      props: {
        type: 'text',
        name: 'email',
        label: 'Email', 
        placeholder: 'eg. test@test.com',
        validations: [
          {
            method: isEmpty,
            validWhen: false,
            errorMessage: 'Please enter something'
          },
          {
            method: isEmail,
            validWhen: true,
            errorMessage: 'Please enter a valid email address'
          }
        ]
      }
    },
    {
      component: 'Fieldset',
      props: {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'eg. password123',
        validations: [
          {
            method: isLength,
            methodOptions: { min: 6, max: undefined },
            validWhen: true,
            errorMessage: 'Please enter a minimum of 6 characters'
          }
        ]
      }
    },
    {
      component: 'Submit',
      props: {
        type: 'submit',
      },
      children: 'Sign in'
    }
  ]

  function login(state) {
    console.log('login')
    setError(null)
    const { email, password } = state
    props.changeAuth({ email: email.value, password: password.value })
      .then(result => {
        console.log('success')
        props.history.push('/dashboard')
      })
      .catch(e => {
        console.log('error')
        e.response && e.response.data && e.response.data.message ? setError(e.response.data.message) : console.log(e);
      })
  }


  return (
    <FormBuilder error={error} form={form} submitHandler={login}></FormBuilder>
  )
}

export default withRouter(connect(null, actions)(LoginForm))

// class LoginForm extends Component {

//   state = { errorMesasge: null }

//   loginDetails = { email: '', password: '', errorMessage: null }

//   handleInput = (stateProp, value) => {
//     this.setState({ [stateProp]: value })
//   }

//   loginSubmit = (state) => {
//     const { email, password } = state;
//     // console.log('this: ', this)
//     api.post('/auth/login', { email, password })
//       .then(res => {
//         const user = res.data
//         this.props.changeAuth(user)
//         console.log('this: ', this)
//       })
//       .catch(e => {
//         console.log(e)
//         console.log('this: ', this)
//         this.setState({ errorMessage: e.response.data.message })
//       })
//     // this.props.changeAuth({ email, password })
//     //   .then(function(res) {
//     //     console.log('then this: ', this)
//     //     console.log('promise resolve: ', res)
//     //   })
//     //   .catch(function(error) {
//     //     const { message } = error.response.data
//     //     console.log(this)
//     //   })
//   }

//   // loginCallback(error) {
//   //   console.log('loginCallback')
//   //   const { message } = error.response.data
//   //   this.loginDetails.errorMessage = message
//   // }

//   render() {
//     const { loginDetails, loginSubmit } = this
//     return (
//       <div className={styles['login-form']}>
//         <h3 className={styles['title']}>Login</h3>
//           <Form state={loginDetails} onSubmit={loginSubmit}>
//           {(updateFormState, formSubmit, initState) => (
//             <Fragment>
//               <Form.Fieldset label="Email" placeholder="eg. john.smith@example.com" name="email" updateFormState={updateFormState} initState={initState}>
//                 <Form.TextInput type="text" />
//               </Form.Fieldset>
//               <Form.Fieldset label="Password" placeholder="eg. password123" name="password" updateFormState={updateFormState} initState={initState}>
//                 <Form.TextInput type="password" />
//               </Form.Fieldset>
//               <Button clickHandler={formSubmit}>Log in</Button>
//             </Fragment>
//           )}
//           </Form>
//         <Toast type="error" content={this.state.errorMessage} />
//       </div>
//     )
//   }
// }

// export default connect(null, actions)(LoginForm);