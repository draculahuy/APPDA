import React, { Component, useState } from 'react'
import{
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import HomeItem from './homeItem';
const {width: screenWidth} = Dimensions.get('window'); 
const  Home1 = ({navigation}) => {
    const [events, setEvent] = useState([
        {
            url: 'https://sansukien.com/wp-content/uploads/2023/03/vietnam-expo-hanoi-2023-april.jpg',
            title: 'VIETNAM EXPO HANOI 2023 – Hội chợ Thương mại Quốc tế Việt Nam',
            total: '300',
            count: '250',
            price: '20.000',
            time:'09:00 | 05/04/2023',
            address: 'Trung tâm Triển lãm Quốc tế I.C.E Hà Nội',
            detail: 'Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương. Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2022/12/lich-vietbuild-2023-1.jpg',
            title: 'VIETBUILD HCM 2023 – Triển lãm quốc tế chuyên ngành xây dựng',
            total: '300',
            count: '250',
            price: '20.000',
            time:'08:30 | 12/04/2023',
            address: 'Nhà thi đấu Phú Thọ – Trung tâm huấn luyện và thi đấu TDTT Phú Thọ',
            detail: 'Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương. Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-tan-binh-2023-april.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Tân Bình 2023',
            total: '300',
            count: '250',
            price: '20.000',
            time:'09:00 | 19/04/2023',
            address: 'Trung tâm Triễn Lãm và Hội chợ Tân Bình (TBECC)',
            detail: 'Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương. Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-nguyen-du-2023.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Nguyễn Du 2023',
            total: '300',
            count: '250',
            price: '20.000',
            time:'09:00 | 10/05/2023',
            address: 'CLB Văn Hóa TDTT Nguyễn Du',
            detail: 'Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương. Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2022/12/vietbaby-fair-hcm-2023.jpg',
            title: 'VIETBABY FAIR HCM 2023 – Triển lãm sản phẩm dịch vụ cho Mẹ bầu, Mẹ & em bé tại TP. HCM',
            total: '300',
            count: '250',
            price: '20.000',
            time:'10:00 | 01/06/2023',
            address: 'Trung tâm Triển lãm và Hội nghị Sài Gòn (SECC)',
            detail: 'Vietnam Telefilm 2023 nền tảng trực tuyến được tổ chức từ ngày 08 – 10/06/2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn SECC số 799 Nguyễn Văn Linh, Quận 7, TP.HCM. Telefilm được tổ chức thường niên bởi Công ty cổ phần Adpex (ADPEX JSC), Hiệp hội Internet Việt Nam (VIA) và Hội Tin học Việt Nam (VAIP)… phối hợp tổ chức dưới sự chủ trì của Bộ Thông tin và Truyền thông, Bộ Khoa học và Công nghệ, Bộ Công Thương. Vietnam Telefilm là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. Các sản phẩm trưng bày tại triển lãm tập trung vào lĩnh vực trong chuyên ngành phát thanh, truyền hình, phim ảnh trong đó tiếp tục tập trung vào các lĩnh vực chính như phát triển chuyên kênh đặc sắc, đa dạng. Cùng đó, các đơn vị tham dự có thể trao đổi kịch bản, nội dung phát thanh truyền hình, tổ chức sản xuất, bản quyền với các kênh quốc tế và xuất nhập khẩu nội dung cũng như cơ hội quảng bá sản phẩm của các hãng thiết bị nổi tiếng thế giới, tạo điều kiện cho các đài phát thanh và truyền hình tại Việt Nam tiếp cận với công nghệ phát thanh và truyền hình hiện đại của thế giới.'
        }
    ])
    return(
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#0099FF', color: 'white', height: 50, width: '100%', justifyContent:'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../../images/search1.png')} style={{ height: 25, width: 25, marginLeft:10 }} />
                </TouchableOpacity>
                <TextInput placeholder="Nhập để tìm kiếm" style={{ height: 40, width:'80%', fontSize: 18, marginTop: 10, color: 'white', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 10 }} autoCapitalize='none'></TextInput>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Setting');
                }}>
                    <Image source={require('../../images/setting1.png')} style={{ height: 30, width: 30}} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}></Text>
            </View>
            <ScrollView style={{backgroundColor:'#DDDDDD'}}>
                {events.map(eachEvents => <HomeItem event = {eachEvents}/>)}
            </ScrollView>
        </View>
    );
};

export default Home1;