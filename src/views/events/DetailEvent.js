import { Image, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const { width: screenWidth } = Dimensions.get('window');
const DetailEvent = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Image source={{ uri: 'https://sansukien.com/wp-content/uploads/2023/03/vietnam-expo-hanoi-2023-april.jpg' }} style={{ width: '100%', height: 200 }} />
        <View style={{ margin: 5 }}>
          <View>
            <Text style={{ flex: 1, width: '100%', fontSize: 23, fontWeight: 'bold', color: '#330066' }}>VIETNAM EXPO HANOI 2023 - Hội chợ Thương mại Quốc tế Việt Nam</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5 }}>
            <View style={{ width: '45%', backgroundColor: '#330066', height: 35, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Số lượng: 200/350</Text>
            </View>
            <View style={{ width: '45%', backgroundColor: '#330066', height: 35, marginLeft: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Giá vé: 50.000đ</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image source={require('../../images/time.png')} style={{ height: 18, width: 18 }} />
            <Text style={{ fontSize: 16, color: 'black', marginLeft: 5 }}>09:00 | 05/04/2023</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../images/vitri.png')} style={{ height: 18, width: 18 }} />
            <Text style={{ fontSize: 16, color: 'black', marginLeft: 5 }}>Trung tâm Triển lãm Quốc tế I.C.E Hà Nội</Text>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: 10 }}>Thông tin chi tiết</Text>
          <View style={{ margin: 10}}>
            <Text style={styles.text}>Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương.</Text>
            <Text style={styles.text}>Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao.</Text>
            <Text style={styles.text}>Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems:'flex-end'}}>
          <TouchableOpacity style={styles.nhan}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nhan}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Bình luận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailEvent

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 5
  },
  nhan:{
    backgroundColor:'#330066',
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
})