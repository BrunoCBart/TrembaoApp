
class OrderErrors {
  constructor () {
    this.errors = {
      name: '',
      phone: '',
      district: '',
      street: '',
      number: ''
    }
  }

  getErrors (userData) {
    this.validate(userData)
    return this.errors
  }

  validate (userData) {
    const { name, phone, district, street, number } = userData

    if (!name) {
      this.errors.name = 'Nome precisa ser preenchido'
    } else if (name.length <= 2) {
      this.errors.name = 'Nome precisa ter mais de 2 caracteres'
    } else {
      this.errors.name = ''
    }

    if (!phone.match(/^[0-9]{11}$/)) {
      this.errors.phone = 'Telefone precisa ter 9 dígitos'
    } else {
      this.errors.phone = ''
    }

    if (!district) {
      this.errors.district = 'Bairro precisa ser preenchido'
    } else {
      this.errors.district = ''
    }

    if (!street) {
      this.errors.street = 'Rua precisa ser preenchida'
    } else {
      this.errors.street = ''
    }

    if (!number) {
      this.errors.number = 'Número precisa ser preenchido'
    } else {
      this.errors.number = ''
    }
  }
}

export default new OrderErrors()
