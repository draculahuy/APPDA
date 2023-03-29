import React, { Component } from 'react'
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native'

const  Dkcs = ({navigation}) => {
    return(
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#0099FF', color: 'white', height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'white' }}>ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</Text>
            </View>
            <ScrollView>
                <View style={{marginTop:5,padding:10}}>
                    <Text style={{ fontSize: 20, marginTop: 15, color: 'black' }}>BẠN PHẢI ĐỌC NHỮNG ĐIỀU KHOẢN SỬ DỤNG DƯỚI ĐÂY TRƯỚC KHI SỬ DỤNG TRANG WEB NÀY. VIỆC SỬ DỤNG TRANG WEB NÀY XÁC NHẬN VIỆC CHẤP THUẬN VÀ TUÂN THỦ CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DƯỚI ĐÂY.</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>PHẠM VI CÁC DỊCH VỤ CỦA CHÚNG TÔI</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>Thông qua Trang Web, Traveloka cung cấp một nền công cụ trực tuyến, nơi bạn có thể duyệt tìm các hãng hàng không khác nhau, và/hoặc nơi lưu trú và phòng ở tạm thời (nếu có), và thực hiện việc đặt chỗ (“Dịch Vụ”). Người Dùng có thể đặt trên Trang Web các dịch vụ do các khách sạn, hãng hàng không và/hoặc bất kỳ nhà cung cấp dịch vụ khác (“Các Nhà Cung Cấp”) cung cấp. Bằng cách đưa ra một lệnh đặt chỗ thông qua Trang Web, bạn có thể đặt chỗ máy bay, phòng khách sạn, hoặc các dịch vụ khác trên Trang Web của chúng tôi. Chúng tôi sẽ gửi một xác nhận lệnh đặt chỗ qua email xác nhận. Chúng tôi bảo lưu quyền từ chối lệnh đặt chỗ của bạn theo quy định dưới đây.</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>Mặc dù chúng tôi sẽ sử dụng những kỹ năng chuyên môn với sự cẩn trọng của chúng tôi trong việc thực hiện dịch vụ, chúng tôi không xác nhận, và không đảm bảo rằng tất cả các thông tin được cung cấp là chính xác, đầy đủ, phù hợp hoặc hiện hành, và chúng tôi không chịu trách nhiệm cho bất kỳ sai sót nào (bao gồm cả các lỗi sắp xếp và đánh máy), trở ngại (cho dù do sự hư hỏng, sửa chữa hoặc nâng cấp tạm thời và/hoặc cục bộ đối với Trang Web hoặc lý do khác), không chính xác, nhầm lẫn hoặc thông tin sai lệch hoặc việc không thể chuyển thông tin. Điều này bao gồm tất cả thông tin trên Trang Web hoặc các nền tảng khác của chúng tôi trong đó liên quan đến loại máy bay, sơ đồ chỗ ngồi, khoảng cách ghế, hệ thống giải trí trên chuyến bay và WiFi, hoặc bất kỳ thông tin nào khác liên quan đến các tiện ích trên chuyến bay.</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>Xảy ra những thay đổi về điều kiện hoặc hoàn cảnh thị trường mà có thể dẫn đến những thay đổi trong một thời gian ngắn khiến thông tin được cung cấp không chính xác hoặc không hiện hành. Trong trường hợp có bất kỳ vấn đề gì, bộ phận dịch vụ khách hàng có thể liên hệ để hỗ trợ bạn và giải đáp cho các thắc mắc của bạn.</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>Trang Web này không đưa ra bất cứ tuyên bố nào và không được giải thích là đưa ra bất cứ đề nghị hoặc gợi ý nào về mức độ chất lượng dịch vụ hoặc đánh giá xếp hạng về các Nhà Cung Cấp được liệt kê trên Trang Web. Chúng tôi tuyên bố khước từ bất kỳ khiếu nại, tổn thất hoặc trách nhiệm nào đối với chất lượng hay tình trạng của Nhà Cung Cấp hiện hữu được liệt kê trên Trang Web (cung cấp các dịch vụ hàng không, khách sạn hoặc các dịch vụ khác). Các Nhà Cung Cấp có thể được giới thiệu ở hình thức phân loại thứ hạng khác nhau dựa trên các yếu tố bao gồm nhưng không giới hạn các đánh giá, xếp hạng hoặc các yếu tố khác của họ. Sự xếp hạng đưa ra được tính dựa trên các thuật toán tự động có thể được cập nhật và thay đổi tùy từng thời điểm, theo quyết định chỉ của riêng của chúng tôi.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Dkcs;