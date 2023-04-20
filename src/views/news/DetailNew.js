import { StyleSheet, Text,Image, View,ScrollView } from 'react-native'
import React from 'react'

const DetailNew = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Image source={{ uri: 'https://sansukien.com/wp-content/uploads/2023/03/vietnam-expo-hanoi-2023-april.jpg' }} style={{ width: '100%', height: 200 }} />
        <View style={{ margin: 5 }}>
          <View>
            <Text style={{ flex: 1, width: '100%', fontSize: 23, fontWeight: 'bold', color: '#330066' }}>VIETNAM EXPO HANOI 2023 - Hội chợ Thương mại Quốc tế Việt Nam</Text>
          </View>
          
          <View style={{ margin: 10}}>
            <Text style={styles.text}>Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương.</Text>
            <Text style={styles.text}>Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao.</Text>
            <Text style={styles.text}>Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailNew

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 5
  },
})