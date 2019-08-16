import validator from 'validator'

class FormValidator {
  constructor(validations) {
    this.validations = validations
  }

  validate(state) {
    let validation = this.valid()
    this.validations.forEach(rule => {

      const fetchFromObject = (obj, prop) => { // Returns value of state property from string, eg. 'client.firstName'
        if (typeof obj === 'undefined') {
          return false;
        }
        var _index = prop.indexOf('.')
        if (_index > -1) {
          return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
        }
        return obj[prop];
      }

      if (!validation[rule.field].isInvalid) {
        const field_value = fetchFromObject(state, rule.field)
        const args = rule.args || []
        const validation_method = typeof rule.method === 'string' ? validator[rule.method] : rule.method
        if (validation_method(field_value, args, state) !== rule.validWhen) {
          validation[rule.field] = {
            isInvalid: true,
            message: rule.message
          }
          validation.isValid = false
        }
      }
    })
    return validation
  }

  valid() {
    const validation = {}

    this.validations.map(rule => {
      return validation[rule.field] = { isInvalid: false, message: '' }
    })

    return { isValid: true, ...validation }
  }
}

export default FormValidator