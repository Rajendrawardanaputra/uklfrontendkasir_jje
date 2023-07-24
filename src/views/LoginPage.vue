<template>
   <div class="login-box">
 
 <form @submit.prevent="login">
   <div class="user-box">
     <input type="text" name="" required="" v-model="email">
     <label>Username</label>
   </div>
   <div class="user-box">
     <input type="password" name="" required="" v-model="password">
     <label>Password</label>
   </div><center>
   <a href="#" @click="login">
          SEND
      <span></span>
   </a></center>
 </form>
</div>
</template>
    <script>
    import axios from 'axios';
    import swal from 'sweetalert'
    
    export default {
        data() {
            return {
                password: '',
                username: ''
            }
        },
        methods: {
            login() {
                let data = {
                    username: this.email,
                    password: this.password
                }
                axios.post('http://localhost:8000/api/login', data)
                    .then(
                        (response) => {
                            localStorage.setItem('token', response.data.token)
                            localStorage.setItem('role', response.data.role)
    
                            if (response.data.role === "admin") {
                                location.href = '/adminhome'
                            } else if (response.data.role === "manajer") {
                                location.href = '/managerhome'
                            } else if (response.data.role === 'kasir') {
                                location.href = '/kasirhome'
                            }
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error)
                            swal({
                                icon: 'error',
                                title: 'Password/email salah',
                                button: true
                            })
                        }
                    )
            }
        }
    }
    </script>
  <style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03f40f;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03f40f,
              0 0 25px #03f40f,
              0 0 50px #03f40f,
              0 0 100px #03f40f;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03f40f);
  animation: btn-anim1 2s linear infinite;
}
</style>