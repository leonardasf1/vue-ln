import { Rest } from "./rest"

export function loginFormHandler(e) {

    e.preventDefault()
    let email = e.target[0]
    let password = e.target[1]

    if (isValidAuth(email.value, 'email') &&
        isValidAuth(password.value, 'password')) {

      const btn = e.target[2]
      btn.disabled = true

      Rest.auth(email.value, password.value, 'signInWithPassword')
      .then(data => {
        btn.disabled = false

        if (data.error) {
          if (data.error.message === 'EMAIL_NOT_FOUND') {
            errorHandler(email, 'Такого аккаунта нет')
          } else if (data.error.message === 'INVALID_PASSWORD') {
            errorHandler(password, 'Неверный пароль')
          } else { errorHandler(email, data.error.message) }
        }
        else if (data.registered) {
          Rest.getUser(data.email, data.idToken)
          .then(json => {
            let user = jsonToArr(json)[0]
            let authObj = {
              "id": user.id,
              "name": user.name,
              "tel": user.tel,
              "status": user.status,
              "idToken": data.idToken,
              "email": data.email,
              "timer": Date.now() + data.expiresIn * 1000
            }
            sessionStorage.setItem("auth",
                  JSON.stringify(authObj)
            )
            // dispatch(authAction(authObj))
            // window.location.hash = '#home'
          })
        }
      })
    }
}

function errorHandler(item, text) {
    item.previousElementSibling.innerText = text
    item.addEventListener('focus', () => {
      item.previousElementSibling.innerText = ''
    })
}

export function signupFormHandler(e, dispatch) {
    e.preventDefault()
    let name = e.target[0]
    let email = e.target[1]
    let pas = e.target[2]
    let pas2 = e.target[3]
    let tel = e.target[4]
    if (isValidAuth(email.value, 'email') &&
        isValidAuth(pas.value, 'pas') &&
        isValidAuth(pas2.value, 'pas2') &&
        isValidAuth(tel.value, 'tel') &&
        isValidAuth(name.value, 'name'))

    // dispatch(showLoader())
    Rest.auth( email.value, pas.value, 'signUp')
    .then(data => {
        if (data.error) {
          if (data.error.message === 'EMAIL_EXISTS') {
              errorHandler(email, 'Email уже используется!')
          } else if (data.error.message === 'OPERATION_NOT_ALLOWED') {
              errorHandler(pas, data.error.message)
          } else { errorHandler(email, data.error.message) }
      } else {

        // dispatch(hideLoader())
        // window.location.hash = "#login"
        Rest.newUser(
          name.value,
          email.value,
          tel.value
        )
      }
    })
  }

function isValidAuth(value, form) {
	if (
		value.includes('<') ||
		value.includes('>') ||
		value.includes('=') ||
		value.includes("'")) {
        return false
	} else if (form === 'pas' &&
		(value.length < 9 || value.length > 25)) {
		return false
	} else if (form === 'tel' && value.length > 18) {
		return false
	} else return true
}

export function validAuth(e) {
    if (!e.target.value && e.target.name !== 'tel') {
      errorHandler(e.target, 'Заполните поле')
    } else if (e.target.name === 'password_2') {
      if (e.target.value !== document.getElementById('pas').value) {
        errorHandler(e.target, 'Пароль не совпадает')
      }
    } else if (
        e.target.value.includes('<') ||
        e.target.value.includes('>') ||
        e.target.value.includes('=') ||
        e.target.value.includes("'")) {
        errorHandler(e.target, 'Некорректные символы')
    } else if (e.target.name === 'tel' &&
        e.target.value.length > 18) {
        errorHandler(e.target, 'Ограничение 18 символов')
        //для международных вызовов на коммутаторах ограничение 18
    } else if (
        e.target.name === 'password' &&
        (e.target.value.length < 9 ||
        e.target.value.length > 29)) {
        errorHandler(e.target, 'Ограничение 9-29 символов')
    }
  }

  function jsonToArr(json) {
      return Object.keys(json)
      .map( key => ({ ...json[key], id: key }))
  }
