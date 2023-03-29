import React, { Component } from 'react'
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native'

const  Csrt = ({navigation}) => {
    return(
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#0099FF', color: 'white', height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'white' }}>CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ</Text>
            </View>
            <ScrollView>
                <View style={{ marginTop: 5, padding: 10 }}>
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Sửa đổi lần cuối vào ngày 20/03/2023</Text>
                    <Text style={{ fontSize: 18, marginTop: 15, color: 'black' }}>Công ty tin rằng quý khách hàng có quyền được biết về các loại dữ liệu cá nhân mà chúng tôi thu thập cũng như mục đích sử dụng chúng trên hệ thống, cả trên trang web và/hoặc trên ứng dụng của Traveloka ("Hệ thống"). Sau khi đọc Chính sách Quyền riêng tư này, quý khách hàng sẽ có thể mình tự quyết định việc chia sẻ dữ liệu cá nhân với chúng tôi. Dữ liệu cá nhân ở đây đề cập đến mọi thông tin liên quan đến một thể nhân có thể định danh/ nhận dạng được ("Dữ liệu cá nhân"). Khi nhấp chọn "đồng ý", quý khách hàng thừa nhận rằng quý khách hàng đã đọc Chính sách Quyền riêng tư này và các Điều khoản Sử dụng (liên kết) của Traveloka cũng như đã hiểu toàn bộ nội dung & hậu quả của chúng; quý khách hàng đồng ý và chấp thuận cho chúng tôi thu thập, sử dụng, tiết lộ và xử lý Dữ liệu cá nhân theo Chính sách Quyền riêng tư này và/hoặc các Điều khoản Sử dụng. Hơn nữa, quý khách hàng cũng thừa nhận rằng toàn bộ Dữ liệu cá nhân mà quý khách hàng đã cung cấp hoặc sẽ cung cấp là dữ liệu chính chủ, đúng và chính xác.</Text>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}>Tùy từng thời điểm, Traveloka có thể sửa đổi Chính sách Quyền riêng tư này để phản ánh các thay đổi về luật pháp và quy định, thông lệ sử dụng của Công ty, các tính năng Hệ thống và/hoặc các tiến bộ công nghệ. Nếu có phiên bản sửa đổi về chính sách thu thập hoặc sử dụng Dữ liệu cá nhân của quý khách hàng thì những nội dung thay đổi sẽ được cập nhật vào Chính sách Quyền riêng tư này và ngày hiệu lực sẽ được ghi chú vào phần đầu văn bản. Do đó, quý khách hàng nên định kỳ xem lại Chính sách Quyền riêng tư này để cập nhật các chính sách và thông lệ mới nhất từ chúng tôi. Nếu quý khách hàng không đồng ý với bất kỳ thay đổi hoặc sửa đổi nào đối với Chính sách Quyền riêng tư, quý khách hàng có quyền ngừng sử dụng Hệ thống. Nếu quý khách hàng tiếp tục sử dụng Hệ thống sau ngày sửa đổi có hiệu lực, quý khách hàng sẽ được xem là đã đồng ý và chấp nhận (các) sửa đổi của Chính sách Quyền riêng tư.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default Csrt;