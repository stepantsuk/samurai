import React from 'react'
import { Field, ErrorMessage, useField, getFieldMeta } from 'formik'
import TextError from './TextError'
import style from './Style.module.css'

export let Input = (props) => {
  
  const { label, name, type } = props
  // console.log('first props',{ label, name, type });
  // console.log('type',type);

  let CustomInputComponent = (props) => {
    const {field, form , meta } = props
    console.log('field props',{field, form , meta });
    const error = meta.touched && meta.error;
    return(
      <div  >
        <input type = {type} {...field} {...meta} className= { error && style.inputError || style.inputDefault}/>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
  };

  return (
    <div className='form-control'>
      <div><label htmlFor={name}>{label}</label></div>
      {/* <Field id={name} name={name} /> */}
      <Field id={name} name={name} type={type} children={CustomInputComponent} />
      
      
    </div>
  )
}

// component={CustomInputComponent}
// let CustomInputComponent = (props) => {
//   console.log(props);
//   return(
//     <div >
//       <input {...props} />
//     </div>
//   )
// };

// let CustomComponent = (props) => {
//   console.log('CustomComponent props',props);
//   //const { field, form, meta, } = props
//   return (
//     <div>
//       <input {...props} />
//     </div>
//   )
// }

// export let Input = (props) => {
//   console.log(props)
//   const { label, name, ...rest } = props
//   return (
//     <div className='form-control'>
//       <div><label htmlFor={name}>{label}</label></div>
//       <Field id={name} name={name} {...rest}/>
//       <ErrorMessage component={TextError} name={name} />
//     </div>
//   )
// }

// let FieldComponent = (props) => {
//   const { field, form, meta, ...rest } = props
  
//   return (
//     <div>
//       <div >
//         <input {...field} {...form} {...meta} {...rest}/>
//       </div>
//     </div>
//   )
// }

// <ErrorMessage component={TextError} name={field.name} />  className={meta.touched && meta.error && style.borderError}



// вариант 1

