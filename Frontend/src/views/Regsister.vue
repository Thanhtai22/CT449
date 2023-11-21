  
  <template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white; padding-bottom: 10px;">
			<div style="width: 70%; padding-top: 7px;">
				<router-link to="/" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Thông Tin Chi Tiết</span>
			</div>
		</div>
		<div class='container'>
            <div class="register">
                <form style="width: 40%" @submit.prevent="handleSubmit">
                    <h1 style="font-size: 60px; margin-bottom: 30px; display: flex; justify-content: center; font-weight: 600">Register</h1>
					<span class="error" style="color: red;">{{ error }}</span>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Tài Khoản</label>
                        <input type="text" id="form1Example1" class="form-control" v-model="email" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Mật Khẩu</label>
                        <input type="password" id="form1Example2" class="form-control" v-model="password" required/>
                    </div>

                   
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Số Điện Thoại</label>
                        <input type="text" id="form1Example4" class="form-control" v-model="phone" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example5">Thành Phố</label>
                        <input type="text" id="form1Example5" class="form-control" v-model="city" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example6">Địa chỉ</label>
                        <input type="text" id="form1Example6" class="form-control" v-model="address" required/>
                    </div>

                    <div class="row mb-4 d-flex justify-content-between">
                        <div class="col ">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="form1Example7" checked />
								<label class="form-check-label" for="form1Example7"> Remember me </label>
							</div>
                        </div>

                        <div class="col d-flex justify-content-end">
                            <router-link to='/login'>Đăng Nhập</router-link>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Đăng ký</button>
                </form>
            </div>
        </div>
		<Footer />
	</div>
</template>
  
  <script>
  import webService from '../services/web.service';
  import axios from 'axios';
  
  export default {
	data() {
		return {
			email: '',
			password: '',
			phone: '',
			image: '',
			city: '',
			address: '',
			doman: 'http://localhost:3002/',
			error: '',
		}
	},
      
      methods: {
		handleSubmit() {
			let data = {
				email: this.email,
				password: this.password,
				city: this.city,
				address: this.address,
				phone: this.phone,
			}

			axios.post('http://localhost:3002/api/user',
					data
			)
			.then(res => {
				if(res.data.message == false) {
					this.error = 'Xác nhận mật khẩu không khớp!'
				}else{
					console.log('ok')
					this.$router.push('/login');
				}
			})
			.catch(error => {
				console.log(error)
			})

		}
	},
    };
    </script>
<!--     
    <style>
    .card {
      opacity: 0.9;
    }
    
    form {
      margin-top: 20px;
    }
  
    input[type="email"], input[type="password"]{
      border: 1px solid #ccc;
      padding: 10px;
      margin: 5px 0 20px 0;
      border-radius: 5px;
      width: calc(100% - 22px);
      background-color: #f8f8f8;
    }
    input[type="email"]:focus, input[type="password"]:focus {
      border-color: #5cb3fd;
      box-shadow: 0 0 5px rgba(92, 179, 253, 0.5);
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      border-radius: 5px;
    }
    button:hover {
      opacity: 0.8;
    }
  
    button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  label {
    display: inline-block;
    text-align: left;
    width: 100%;
  }
  
  input {
    width: calc(100% - 2px);
    box-sizing: border-box;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
    </style>  -->

    <style>
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
	padding-bottom: 20px;
}
</style>