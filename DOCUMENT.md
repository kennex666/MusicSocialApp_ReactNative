# Hướng dẫn làm việc với dự án Music App - React Native

## Mục đích

Tài liệu này nhằm hướng dẫn thành viên trong nhóm làm việc trong dự án

## Các hướng dẫn

### Cấu trúc dự án

Về cầu trúc dự án: 

`assets`: Là nơi chứa những tài nguyên tĩnh như images, icon,...

`app`: Chứa những thành phần ứng dụng như code, hằng,...

`app/components`: Chứa các component của ứng dụng có thể tái sử dụng.

`app/constants`: Các hằng định nghĩa như tên màn hình, màu sắc, kích thước font,...

`app/navigation`: Navigate app

`app/screen`: Chứa các màn hình ứng dụng

`app/serivces`: Bao gồm các dịch vụ nếu có

`app/utils`: Các hàm dùng nhiều lần như format ngày tháng, xử lí mảng, Scale, responsive,...

### Các hàm được viết sãn

#### ViewpointEmulator (app/utils)

Sử dụng để mô phỏng đơn vị vw và vh trong css.

Hỗ trợ một số phương thức:

`vw(x)`: Trả về %x chiều rộng

`vh(x)`: Trả về %x chiều cao

`getHeight()`: Trả về chiều cao của màn hình thiết bị

`getWidth()`: Trả về chiều rộng của màn hình thiết bị

`getViewport()`: Trả về chiều rộng và chiều cao của màn hình thiết bị

Trong đó, vw và vh sẽ được thường xuyên trong việc responsive layout.

Ví dụ:
    
    Để một component có chiều rộng bằng 50% trên mọi màn hình, ta sẽ viết như sau: `width: vw(50)`

#### Scale (app/utils)
scale, verticalScale, moderateScale, scaledFontSize

`scale(size)`: Dùng cho chiều rộng, thay cho việc set cứng giá trị

Ví dụ: 
        
    Để component luôn hiển thị chính xác, thay vì viết `width: 100`, ta sẽ viết thành `width: scale(100)`

`verticalScale(size)`: Dùng cho chiều cao, thay cho việc set cứng giá trị tương tự như chiều rộng

    
**[KHÔNG KHUYẾN NGHỊ SỬ DỤNG TRỪ TH CẦN THIẾT]** 
    
`scaledFontSize(size)`: Dùng cho font-size, thay cho việc set cứng giá trị, tuy nhiên nên sử dụng const `FontSizeConstants` trong `app/constants` để đồng nhất font size.

#### DateTimeFormater (app/utils)

Dùng để định dạng thời gian

#### Array(app/utils)
    `mergeArrays`: Hợp nhất 2 mảng dựa vào id, truyền vào (array1, array2, id)

### Constants/Component viết sẵn

`app/constants` Gồm màu sắc, font size, screen (dùng thay cho việc truyền tên màn hình trong navigation)

`CText`: Text component này sẽ có thuộc tính size để set font size, mặc định là `FontSizeConstants.nm`

Sử dụng: `<CText size={FontSizeConstants.**FONTSIZE**)}>Text</CText>` với **FONTSIZE** là một trong các giá trị trong `app/constants/FontSizeConstants`

Component này ngoài việc set font size, còn có thể set thêm các thuộc tính khác của Text, dùng để tạo font chữ mặc định cho dự án khi cần tuỳ chỉnh.

### Hướng dẫn về viết màn hình mới

1. Tạo một folder trong `app/screens/` với tên màn hình, ví dụ folder `HomeScreen`

2. Tạo file `index.tsx` trong folder vừa tạo (HomeScreen): `app/screens/HomeScreen/index.tsx`

3. Vào file `app/screens/TestingScreen/index.tsx` vừa tạo, bạn hãy chú ý đoạn code sau:

```tsx
    export default function TestingScreen(): JSX.Element {
    return (
        // Comment 3 dòng dưới khi thực hiện viết màn hình mới
        <View style={styles.container}>
            <CText size={FontSizeConstants.nm}>Màn hình này sử dụng cho việc kiểm thử</CText>  
        </View>
        // Khi làm màn hình mới, thay thế screen bên dưới và bỏ dòng trên đi
        // Ví dụ đang làm màn hình homescreen, import HomeScreen từ "../HomeScreen" và thay thế <View> bằng <HomeScreen/>
        
        // <HomeScreen/>
    );
    }
```

Hãy xoá nội dung của return và thay thế bằng màn hình bạn đang viết.

4. Viết code ở `HomeScreen/index.tsx`

> [!WARNING]
> Đừng quên import các component cần thiết từ `app/components` và các hàm từ `app/utils`

> Viết những component nào không sử dụng nhiều bằng cách tạo thêm 1 folder trong `app/screens/` và viết component đó trong folder đó

> Component nào dùng nhiều thì viết tại `app/components`

> Đặt tên file theo chuẩn `PascalCase`
