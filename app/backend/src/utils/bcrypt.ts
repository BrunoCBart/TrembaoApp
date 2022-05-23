import * as bcrypt from 'bcrypt'

class BcryptUtils {
  static generateSalt = () => bcrypt.genSaltSync(10, 'a')
  static hash = (pw: string, salt = BcryptUtils.generateSalt()) => bcrypt.hashSync(pw, salt)
  static compare = (pw: string, hashPw: string) => bcrypt.compare(pw, hashPw)
}

export default BcryptUtils
