//Bài 1:Tính tiền lương nhân viên 
//Viết chương trình tính tiền lương nhân viên. Lương 1 ngày:100.000. Cho người dùng nhập vào số ngày làm. Công thức tính lương:Lương 1 ngày*số ngày làm.

document.getElementById('tinhLuong').onclick=function () {
    //Input; Lương 1 ngày(number), Số ngày làm (number), Chức vụ(str)
    let luong1Ngay=100000;
    let soNgayLam=document.getElementById('soNgayLam').value*1;
    let chucVu=document.getElementById('chucVu').value;
    //Process: Luong(number)
    let luong=0;
    luong=luong1Ngay*soNgayLam;
    //Output
    document.querySelector('.bg-primary').innerHTML=`${chucVu} có mức lương là:${luong.toLocaleString('vi-VN')} VNĐ`;
}

//Bài 2:Tính giá trị trung bình
//Viết chương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số này và xuất ra màn hình.
//Gợi ý: Giá trị trung bình là tổng của 5 số người dùng nhập vào chia cho 5.
document.getElementById('tinhTrungBinh').onclick=function () {
    //Input: Số thực(number)
    let soThuc1=document.getElementById('soThuc1').value*1;
    let soThuc2=document.getElementById('soThuc2').value*1;
    let soThuc3=document.getElementById('soThuc3').value*1;
    let soThuc4=document.getElementById('soThuc4').value*1;
    let soThuc5=document.getElementById('soThuc5').value*1;
    //Process: Trung bình(number)
    let tinhTrungBinh=0;
    tinhTrungBinh=(soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5;
    tinhTrungBinh=tinhTrungBinh.toFixed(2);
    //Output: 
    document.getElementById('outPut').innerHTML=`Trung bình của 5 số thực là:${tinhTrungBinh}`;
}

//Bài 3: Quy đổi tiền
//Giá USD hiện nay đang là 23.500 VNĐ. Viết chương trình quy đổi từ USD sang VND. Cho người dùng nhập vào số tiền USD. Tính và xuất ra số tiền sau quy đổi VNĐ
//Ví dụ: Người dùng nhập 2 USD => Xuất ra 47.000 VNĐ
document.getElementById('quyDoi').onclick=function () {
    //Input giá 1 USD(number), nhập số tiền USD (number)
    let gia1USD=23500;
    let inputUSD=document.getElementById('uSD').value*1;
    //Process quyDoi(number)
    let quyDoi=0;
    quyDoi=inputUSD*gia1USD;
    //Output
    document.getElementById('uSD').value=`${inputUSD.toLocaleString('en-US')} USD`;
    document.getElementById('vNĐ').value=`${quyDoi.toLocaleString('vi-VN')} VNĐ`;
}

//Bài 4:Tính diện tích, chu vi hình chữ nhật
//Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN(hình chữ nhật).Tính và xuất ra diện tích, chu vi HCN đó.
//Công thức:-Diện tích=dài*rộng,-Chu vi=(dài+rộng)*2
document.getElementById('ketQua').onclick=function () {
    //Input: Chiều dài(number), Chiều rộng(number)
    let chieuDai=document.getElementById('chieuDai').value*1;
    let chieuRong=document.getElementById('chieuRong').value*1;
    //Process Diện tích(number), Chu vi(number)
    let dienTich=0;
    let chuVi=0;
    dienTich=chieuDai*chieuRong;
    chuVi=(chieuDai+chieuRong)*2;
    //Output
    document.getElementById('inRa').innerHTML=`Diện tích HCN là: ${dienTich} và Chu vi HCN là: ${chuVi}`;
}

//Bài 5:Tính tổng 2 ký số
//Viết chương trình nhập vào 1 số có 2 chữ số(VD:12,44,83). Tính tổng 2 chữ số của số vừa nhập. Ví dụ:12 => Tổng 1 + 2 = 3, 44 => Tổng là 4 + 4 = 8 
document.getElementById('tinh').onclick=function () {
    //Input: Số Nguyên 2 chữ số(number)
    let soNguyen=document.getElementById('nhap1So').value*1;
    //Process: Hàng đơn vị(number), Hàng chuch(number), Tong(number) 
    let hangDonVi=0;
    let hangChuc=0;
    let tong=0;
    hangDonVi=Math.floor(soNguyen/10);
    hangChuc=soNguyen%10;
    tong=hangChuc+hangDonVi;
    //Output
    document.getElementById('xuatRa').innerHTML=`Kết quả tính ra là: ${tong}`
}