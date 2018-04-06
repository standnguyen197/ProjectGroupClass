<template>
  <div class="layout">
        <Layout style="height:600px;background: url('https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38aa2668d92a8e5362eb6f550e3c71bf&auto=format&fit=crop&w=1949&q=80') no-repeat;background-size:cover">
            <Row>
            <Col span="12" offset="6">
            <Content style="padding:0 20px;margin:200px 0;text-align:center">
                <h1 style="color: rgb(255, 255, 255);font-size: 35px;text-shadow: 1px 2px 1px #000;margin-bottom:10px">TÌM CÁC CỬA HÀNG BÁN GIÀY</h1>
                <Input v-model="valueInput" placeholder="Nhập tên shop bạn cần tìm" style="width: 300px;margin-right:3px" size="large"></Input><Button type="primary" size="large" @click="searchShop">TÌM NGAY</Button>
                  <Modal  v-model="modal2" width="360">
                        <p slot="header" style="color:#f60;text-align:center">
                            <Icon type="information-circled"></Icon>
                            <span>THÔNG BÁO</span>
                        </p>
                        <div style="text-align:center">
                            <p>KHÔNG TÌM THẤY SHOP GIÀY BẠN CẦN</p>
                            
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" :loading="modal_loading" @click="del">Thôi</Button>
                        </div>
                        
                    </Modal>
             <Modal v-model="modal3" width="360">
                        <p slot="header" style="color:rgb(73, 192, 26);text-align:center">
                            <Icon type="checkmark-circled"></Icon>
                            <span>THÔNG BÁO</span>
                        </p>
                        <div style="text-align:left;color:rgb(73, 192, 26);">
                            <p><b>TÊN SHOP:</b> {{ nameShop }}</p>
                            <p><b>ĐỊA CHỈ SHOP:</b> {{ addressShop }}</p>
                        </div>
                        <div slot="footer">
                            <Button type="success" size="large" :loading="modal_loading" @click="del1">OK</Button>
                        </div>
                    </Modal>
            </Content>
            </Col>
            </Row>
           
        </Layout>
         <Footer class="layout-footer-center">SẢN PHẨM CỦA NHÓM 10</Footer>
         <Row>
            <Col span="8" offset="8">
                <h1 style="text-align:center;margin-top:10px">THÀNH VIÊN NHÓM GỒM</h1>
                <Card style="padding:20px;font-size:20px">
                <ul>
                        <li>Tao Văn Trái</li>
                        <li>Đăng Văn Thao</li>
                        <li>Hoàng Tiến Đạt</li>
                        <li>Nguyễn Đức Tú</li>
                </ul>
                </Card>
            </Col>
         </Row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'posts',
  data () {
    return {
      valueInput: '',
      modal2: false,
      modal3: false,
      modal_loading: false,
      isActive: 0,
      nameShop: '',
      addressShop: ''

    }
  },
  methods:{
      del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                }, 100);
            },
    del1 () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal3 = false;
                    
                }, 100);
            },
    searchShop(event){
        event.preventDefault();
        var valueInput = this.valueInput;
        var _this = this;
        axios.post(`http://api.j8apps.com/api/getMap`,{nameValue: valueInput})
        .then((response) => {
            console.log(response.data);
            var statusCode = response.data.statusCode;
            if(statusCode == 0){
                _this.isActive = 1;
                _this.modal2 = true;
                
            }else{
                _this.nameShop = response.data.resultData.structured_formatting.main_text;
                _this.addressShop = response.data.resultData.description;

                _this.isActive = 2;
                _this.modal3 = true;
               
            }
        });
        
      }
  }
}
</script>
<style scoped>
.demo-carousel {
    height: 600px;
    line-height: 400px;
    text-align: center;
    color: #fff;
    font-size: 20px;

}
.layout{
    border: 1px solid #d7dde4;
    background:#FFF;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
