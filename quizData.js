// Kho câu hỏi theo từng chặng. Khóa là "id" của chặng trong lessons.json.
// Mỗi câu gồm: question (câu hỏi), options (đúng 3 đáp án A, B, C),
// answer (vị trí đáp án đúng: 0 = A, 1 = B, 2 = C), explanation (giải thích hiện sau khi trả lời).
// Mỗi lượt chơi game tự rút ngẫu nhiên 5 câu và xáo thứ tự đáp án.
const quizData = {
  // Chặng 1: Lịch sử tư tưởng
  1: [
    {
      question: "Trường phái nào coi vàng bạc là của cải thật sự?",
      options: ["Trọng nông", "Trọng thương", "Cổ điển Anh"],
      answer: 1,
      explanation: "Trọng thương muốn xuất siêu để thu về vàng bạc."
    },
    {
      question: "Quyển I bộ Tư bản của Marx xuất bản năm nào?",
      options: ["1848", "1917", "1867"],
      answer: 2,
      explanation: "Năm 1867. Quyển II và III do Engels hoàn thiện sau đó."
    },
    {
      question: "Phái trọng nông cho rằng ngành nào tạo ra sản phẩm ròng?",
      options: ["Công nghiệp", "Nông nghiệp", "Thương mại"],
      answer: 1,
      explanation: "Quesnay coi nông nghiệp là nguồn duy nhất của sản phẩm ròng."
    },
    {
      question: "Tác giả của Của cải của các quốc gia (1776) là ai?",
      options: ["Adam Smith", "David Ricardo", "Karl Marx"],
      answer: 0,
      explanation: "Adam Smith là đại biểu lớn của kinh tế chính trị cổ điển Anh."
    },
    {
      question: "Ai là đại biểu tiêu biểu của phái trọng nông Pháp?",
      options: ["William Petty", "François Quesnay", "Thomas Mun"],
      answer: 1,
      explanation: "Quesnay cho rằng nông nghiệp tạo ra sản phẩm ròng."
    },
    {
      question: "Phái cổ điển Anh gắn giá trị hàng hóa với yếu tố nào?",
      options: ["Lao động", "Vàng bạc", "Đất đai"],
      answer: 0,
      explanation: "Smith, Petty, Ricardo đều tìm nguồn gốc giá trị ở lao động."
    },
    {
      question: "Marx kế thừa trường phái nào khi xây dựng học thuyết giá trị thặng dư?",
      options: ["Trọng thương", "Cổ điển Anh", "Trọng nông"],
      answer: 1,
      explanation: "Marx kế thừa có phê phán những thành tựu của kinh tế chính trị cổ điển Anh."
    },
    {
      question: "Ai hoàn thiện và xuất bản quyển II và III bộ Tư bản sau khi Marx mất?",
      options: ["Lenin", "Ricardo", "Engels"],
      answer: 2,
      explanation: "Engels biên tập di cảo của Marx để xuất bản."
    },
    {
      question: "Karl Marx sinh năm nào?",
      options: ["1818", "1820", "1848"],
      answer: 0,
      explanation: "Marx sinh năm 1818 và mất năm 1883."
    },
    {
      question: "Phái nào cho rằng của cải của quốc gia là vàng bạc và đề cao xuất siêu?",
      options: ["Trọng nông", "Cổ điển Anh", "Trọng thương"],
      answer: 2,
      explanation: "Trọng thương coi tiền tệ, vàng bạc là của cải thật sự."
    }
  ],

  // Chặng 2: Hàng hóa và tiền
  2: [
    {
      question: "Rau trồng để tự ăn có phải hàng hóa không?",
      options: ["Có, vì ăn được", "Không, vì không làm ra để bán", "Có, vì do lao động tạo ra"],
      answer: 1,
      explanation: "Hàng hóa phải được làm ra để trao đổi, mua bán."
    },
    {
      question: "Giá cả là gì?",
      options: ["Giá trị biểu hiện bằng tiền", "Số tiền trong ví", "Chi phí vận chuyển"],
      answer: 0,
      explanation: "Giá cả là hình thức biểu hiện bằng tiền của giá trị."
    },
    {
      question: "Hàng hóa có hai thuộc tính nào?",
      options: ["Giá cả và lợi nhuận", "Cung và cầu", "Giá trị sử dụng và giá trị"],
      answer: 2,
      explanation: "Giá trị sử dụng là công dụng, giá trị là lao động xã hội kết tinh."
    },
    {
      question: "Lượng giá trị hàng hóa do yếu tố nào quyết định?",
      options: ["Thời gian lao động xã hội cần thiết", "Thời gian lao động cá biệt", "Giá bán trên thị trường"],
      answer: 0,
      explanation: "Đó là thời gian lao động xã hội cần thiết để sản xuất hàng hóa."
    },
    {
      question: "Chức năng đo giá trị của các hàng hóa khác là chức năng nào của tiền?",
      options: ["Thước đo giá trị", "Phương tiện cất trữ", "Phương tiện thanh toán"],
      answer: 0,
      explanation: "Tiền làm thước đo để biểu hiện giá trị của hàng hóa khác."
    },
    {
      question: "Giá trị sử dụng của hàng hóa là gì?",
      options: ["Lao động xã hội kết tinh", "Công dụng thỏa mãn nhu cầu", "Số tiền bán được"],
      answer: 1,
      explanation: "Giá trị sử dụng là công dụng của vật, thỏa mãn một nhu cầu của con người."
    },
    {
      question: "Lao động cụ thể tạo ra yếu tố nào của hàng hóa?",
      options: ["Giá trị", "Giá cả", "Giá trị sử dụng"],
      answer: 2,
      explanation: "Lao động cụ thể tạo giá trị sử dụng, lao động trừu tượng tạo giá trị."
    },
    {
      question: "Năng suất lao động tăng thì lượng giá trị của một đơn vị hàng hóa thay đổi thế nào?",
      options: ["Tăng", "Giảm", "Không đổi"],
      answer: 1,
      explanation: "Cùng thời gian làm ra nhiều hàng hóa hơn nên giá trị một đơn vị giảm."
    },
    {
      question: "Cất giữ tiền để dùng về sau là chức năng nào của tiền?",
      options: ["Tiền tệ thế giới", "Phương tiện lưu thông", "Phương tiện cất trữ"],
      answer: 2,
      explanation: "Tiền rút khỏi lưu thông để dành là phương tiện cất trữ."
    },
    {
      question: "Quy luật giá trị yêu cầu trao đổi hàng hóa dựa trên cơ sở nào?",
      options: ["Giá cao nhất", "Hao phí lao động xã hội cần thiết (ngang giá)", "Ý muốn của người bán"],
      answer: 1,
      explanation: "Trao đổi phải theo nguyên tắc ngang giá."
    }
  ],

  // Chặng 3: Giá trị thặng dư
  3: [
    {
      question: "Giá trị thặng dư là gì?",
      options: ["Phần giá trị mới dôi ra ngoài giá trị sức lao động, bị chủ chiếm", "Tiền lương của công nhân", "Chi phí mua máy móc"],
      answer: 0,
      explanation: "Đó là phần lao động không công của công nhân."
    },
    {
      question: "Làm 12 giờ, trong đó 6 giờ bù lương. Tỷ suất giá trị thặng dư là bao nhiêu?",
      options: ["50%", "200%", "100%"],
      answer: 2,
      explanation: "m chia v = 6 giờ chia 6 giờ = 100%."
    },
    {
      question: "Kéo dài ngày lao động để tăng giá trị thặng dư là phương pháp nào?",
      options: ["Tuyệt đối", "Tương đối", "Siêu ngạch"],
      answer: 0,
      explanation: "Tuyệt đối: kéo dài ngày làm. Tương đối: rút ngắn thời gian lao động tất yếu."
    },
    {
      question: "Tư bản bất biến (c) là phần tư bản nào?",
      options: ["Dùng để mua sức lao động", "Tồn tại dưới dạng tư liệu sản xuất, giá trị chuyển vào sản phẩm", "Dùng để trả lãi vay"],
      answer: 1,
      explanation: "Máy móc, nguyên liệu chỉ chuyển giá trị của chúng vào sản phẩm."
    },
    {
      question: "Tư bản khả biến (v) dùng để làm gì?",
      options: ["Mua máy móc", "Mua nguyên liệu", "Mua sức lao động"],
      answer: 2,
      explanation: "Phần này tăng lên về giá trị trong quá trình sản xuất."
    },
    {
      question: "Giá trị thặng dư do yếu tố nào tạo ra?",
      options: ["Lao động của công nhân làm thuê", "Máy móc", "Tiền vốn"],
      answer: 0,
      explanation: "Chỉ có sức lao động mới tạo ra giá trị lớn hơn giá trị của nó."
    },
    {
      question: "Công thức tính tỷ suất giá trị thặng dư là gì?",
      options: ["v chia m", "m chia c", "m chia v"],
      answer: 2,
      explanation: "m' = m/v x 100%."
    },
    {
      question: "Sản xuất giá trị thặng dư tương đối dựa vào điều gì?",
      options: ["Kéo dài ngày lao động", "Rút ngắn thời gian lao động tất yếu nhờ tăng năng suất", "Giảm lương xuống dưới giá trị sức lao động"],
      answer: 1,
      explanation: "Ngày lao động không đổi, nhưng phần lao động cho nhà tư bản dài ra."
    },
    {
      question: "Giá trị thặng dư siêu ngạch là gì?",
      options: ["Toàn bộ lợi nhuận", "Phần dôi ra ngoài thặng dư thông thường nhờ giá trị cá biệt thấp hơn giá trị xã hội", "Tiền thưởng của công nhân"],
      answer: 1,
      explanation: "Doanh nghiệp áp dụng kỹ thuật mới sớm sẽ thu được phần này."
    },
    {
      question: "Giá trị của hàng hóa gồm những bộ phận nào?",
      options: ["c + v", "c + v + m", "v + m"],
      answer: 1,
      explanation: "W = c + v + m."
    }
  ],

  // Chặng 4: Độc quyền
  4: [
    {
      question: "Hình thức độc quyền thống nhất cả sản xuất và lưu thông dưới một hội đồng quản trị là gì?",
      options: ["Cartel", "Syndicate", "Trust"],
      answer: 2,
      explanation: "Đó là Trust, như Standard Oil của Rockefeller."
    },
    {
      question: "Theo Lenin, tư bản tài chính là sự hợp nhất của gì?",
      options: ["Thương nhân và địa chủ", "Tư bản ngân hàng và tư bản công nghiệp", "Nhà nước và công đoàn"],
      answer: 1,
      explanation: "Tư bản ngân hàng độc quyền hợp nhất với tư bản của các liên minh công nghiệp độc quyền."
    },
    {
      question: "Độc quyền hình thành chủ yếu từ nguyên nhân nào?",
      options: ["Nhà nước cấm cạnh tranh", "Người tiêu dùng yêu cầu", "Lực lượng sản xuất phát triển, cạnh tranh và khủng hoảng"],
      answer: 2,
      explanation: "Cạnh tranh dẫn tới tập trung, khủng hoảng làm hãng nhỏ phá sản hoặc bị thâu tóm."
    },
    {
      question: "Cartel là hình thức độc quyền như thế nào?",
      options: ["Thỏa thuận về giá, sản lượng, thị trường nhưng các thành viên vẫn độc lập", "Sáp nhập hoàn toàn thành một công ty", "Liên kết nhiều ngành khác nhau"],
      answer: 0,
      explanation: "Thành viên vẫn độc lập về sản xuất và thương mại."
    },
    {
      question: "Lenin nêu bao nhiêu đặc điểm của chủ nghĩa đế quốc?",
      options: ["3", "5", "7"],
      answer: 1,
      explanation: "Có 5 đặc điểm cơ bản."
    },
    {
      question: "Xuất khẩu tư bản là gì?",
      options: ["Bán hàng hóa ra nước ngoài", "Cho nước ngoài vay hàng hóa", "Đưa tư bản ra nước ngoài đầu tư để thu lợi nhuận cao"],
      answer: 2,
      explanation: "Khác với xuất khẩu hàng hóa, đây là đưa chính tư bản ra ngoài."
    },
    {
      question: "Syndicate thống nhất khâu nào của các xí nghiệp thành viên?",
      options: ["Sản xuất", "Lưu thông (mua nguyên liệu, bán hàng)", "Nghiên cứu khoa học"],
      answer: 1,
      explanation: "Thành viên vẫn tự sản xuất nhưng mua bán qua ban quản trị chung."
    },
    {
      question: "Đặc điểm nào đúng với chủ nghĩa đế quốc theo Lenin?",
      options: ["Tự do cạnh tranh chiếm ưu thế tuyệt đối", "Các liên minh độc quyền quốc tế phân chia thị trường thế giới", "Tư bản tài chính biến mất"],
      answer: 1,
      explanation: "Các tổ chức độc quyền quốc tế chia nhau thị trường toàn cầu."
    },
    {
      question: "Lenin viết tác phẩm Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản vào năm nào?",
      options: ["1905", "1916", "1924"],
      answer: 1,
      explanation: "Tác phẩm hoàn thành năm 1916."
    },
    {
      question: "Hình thức độc quyền liên kết nhiều ngành khác nhau trong một tập đoàn lớn là gì?",
      options: ["Cartel", "Syndicate", "Conglomerate"],
      answer: 2,
      explanation: "Conglomerate là tập đoàn đa ngành."
    }
  ],

  // Chặng 5: Cung cầu và giá trị
  5: [
    {
      question: "Cầu lớn hơn cung thì giá thường thế nào?",
      options: ["Tăng", "Giảm", "Không đổi"],
      answer: 0,
      explanation: "Người mua tranh nhau nên giá bị đẩy lên."
    },
    {
      question: "Giá cao hơn giá trị kéo dài sẽ dẫn đến điều gì?",
      options: ["Cầu tăng mãi mãi", "Nhà nước phải ngừng bán", "Nhiều người đổ vào sản xuất, cung tăng"],
      answer: 2,
      explanation: "Sản xuất có lãi thu hút thêm người làm, cung tăng và kéo giá xuống."
    },
    {
      question: "Giá trị hàng hóa do yếu tố nào quyết định?",
      options: ["Số tiền người mua sẵn lòng trả", "Lao động xã hội cần thiết", "Chi phí vận chuyển"],
      answer: 1,
      explanation: "Lượng giá trị do thời gian lao động xã hội cần thiết quyết định."
    },
    {
      question: "Ricardo xuất bản Nguyên lý kinh tế chính trị và thuế khóa vào năm nào?",
      options: ["1776", "1817", "1867"],
      answer: 1,
      explanation: "Tác phẩm ra đời năm 1817."
    },
    {
      question: "Cung lớn hơn cầu thì giá cả thường thế nào?",
      options: ["Tăng", "Không đổi", "Giảm"],
      answer: 2,
      explanation: "Hàng nhiều hơn người mua nên người bán phải hạ giá."
    },
    {
      question: "Giá cả thị trường lên xuống xoay quanh yếu tố nào?",
      options: ["Chi phí vận chuyển", "Giá trị", "Lợi nhuận kỳ vọng"],
      answer: 1,
      explanation: "Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh nó."
    },
    {
      question: "Quy luật giá trị điều tiết lĩnh vực nào?",
      options: ["Chỉ phân phối thu nhập", "Sản xuất và lưu thông hàng hóa", "Chỉ tiền lương"],
      answer: 1,
      explanation: "Nó điều tiết việc phân bổ nguồn lực và trao đổi hàng hóa."
    },
    {
      question: "Khi cung bằng cầu thì giá cả thường như thế nào?",
      options: ["Phù hợp với giá trị", "Bằng không", "Tăng gấp đôi"],
      answer: 0,
      explanation: "Lúc đó giá cả phản ánh đúng giá trị hàng hóa."
    },
    {
      question: "Người có hao phí lao động cá biệt thấp hơn mức xã hội cần thiết sẽ ra sao?",
      options: ["Bị lỗ", "Hòa vốn", "Có lãi"],
      answer: 2,
      explanation: "Họ bán theo giá trị xã hội nhưng chi phí thấp hơn."
    },
    {
      question: "Ricardo thuộc trường phái kinh tế nào?",
      options: ["Trọng nông", "Trọng thương", "Cổ điển Anh"],
      answer: 2,
      explanation: "Ricardo là đại biểu xuất sắc của trường phái cổ điển Anh."
    }
  ],

  // Chặng 6: Kinh tế thị trường định hướng XHCN
  6: [
    {
      question: "Phân phối ở Việt Nam là chủ yếu theo cái gì?",
      options: ["Chia đều cho mọi người", "Kết quả lao động và hiệu quả kinh tế", "Tuổi tác"],
      answer: 1,
      explanation: "Đồng thời kết hợp với vốn, tài sản và phúc lợi xã hội."
    },
    {
      question: "Nhà nước điều hòa lợi ích bằng cách nào?",
      options: ["Cấm doanh nghiệp tư nhân", "Để mặc thị trường", "Thuế thu nhập lũy tiến và an sinh xã hội"],
      answer: 2,
      explanation: "Tăng trưởng phải gắn với tiến bộ và công bằng xã hội."
    },
    {
      question: "Thành phần kinh tế nào giữ vai trò chủ đạo?",
      options: ["Kinh tế nhà nước", "Kinh tế tư nhân", "Kinh tế có vốn nước ngoài"],
      answer: 0,
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần."
    },
    {
      question: "Đại hội VI của Đảng mở đường cho Đổi mới vào năm nào?",
      options: ["1976", "1986", "1991"],
      answer: 1,
      explanation: "Năm 1986."
    },
    {
      question: "Đổi mới chuyển nền kinh tế sang cơ chế nào?",
      options: ["Kế hoạch hóa tập trung", "Tự cung tự cấp", "Thị trường có sự quản lý của Nhà nước"],
      answer: 2,
      explanation: "Đó là cơ chế thị trường có sự quản lý của Nhà nước."
    },
    {
      question: "Kinh tế tư nhân được xác định là gì?",
      options: ["Thành phần bị loại bỏ", "Một động lực quan trọng của nền kinh tế", "Thành phần chủ đạo"],
      answer: 1,
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng."
    },
    {
      question: "Nền kinh tế nhiều thành phần nghĩa là gì?",
      options: ["Chỉ có một hình thức sở hữu", "Chỉ có nhà nước và nước ngoài", "Nhiều hình thức sở hữu cùng tồn tại và phát triển"],
      answer: 2,
      explanation: "Các thành phần cùng hoạt động theo pháp luật."
    },
    {
      question: "Nhà nước quản lý nền kinh tế chủ yếu bằng công cụ nào?",
      options: ["Pháp luật, kế hoạch, chính sách", "Chỉ mệnh lệnh hành chính", "Không can thiệp gì"],
      answer: 0,
      explanation: "Nhà nước quản lý bằng pháp luật, chiến lược, quy hoạch, chính sách."
    },
    {
      question: "Nguyễn Văn Linh giữ chức vụ nào khi khởi xướng Đổi mới?",
      options: ["Thủ tướng", "Tổng Bí thư", "Chủ tịch nước"],
      answer: 1,
      explanation: "Ông là Tổng Bí thư từ năm 1986 đến 1991."
    },
    {
      question: "Một mục tiêu quan trọng của Đổi mới là gì?",
      options: ["Xóa bỏ kinh tế thị trường", "Đóng cửa với thế giới", "Giải phóng và phát triển lực lượng sản xuất"],
      answer: 2,
      explanation: "Đổi mới nhằm giải phóng sức sản xuất để dân giàu, nước mạnh."
    }
  ],

  // Chặng 7: CNH-HĐH và hội nhập
  7: [
    {
      question: "Cách mạng công nghiệp lần thứ hai đặc trưng bởi điều gì?",
      options: ["Máy hơi nước", "Điện khí hóa", "Trí tuệ nhân tạo"],
      answer: 1,
      explanation: "Lần 2 là điện khí hóa và sản xuất hàng loạt, như dây chuyền của Ford."
    },
    {
      question: "Điều quan trọng để hội nhập hiệu quả là gì?",
      options: ["Nâng năng lực cạnh tranh, giữ độc lập tự chủ", "Mở cửa hết mức, bất kể điều kiện", "Đóng cửa thị trường"],
      answer: 0,
      explanation: "Hiệu quả hội nhập phụ thuộc vào năng lực cạnh tranh của nền kinh tế."
    },
    {
      question: "Hội nhập kinh tế quốc tế có tác động thế nào?",
      options: ["Chỉ có lợi", "Chỉ có hại", "Vừa có tác động tích cực vừa có tiêu cực"],
      answer: 2,
      explanation: "Hội nhập mang lại cơ hội nhưng cũng đặt ra thách thức cạnh tranh và phụ thuộc."
    },
    {
      question: "Cách mạng công nghiệp lần thứ nhất đặc trưng bởi điều gì?",
      options: ["Điện khí hóa", "Cơ giới hóa bằng máy hơi nước", "Internet vạn vật"],
      answer: 1,
      explanation: "Máy hơi nước thay sức người và sức vật."
    },
    {
      question: "Cách mạng công nghiệp lần thứ ba đặc trưng bởi điều gì?",
      options: ["Máy hơi nước", "Điện khí hóa", "Tự động hóa dựa trên điện tử, tin học"],
      answer: 2,
      explanation: "Máy tính và công nghệ thông tin đưa sản xuất vào tự động hóa."
    },
    {
      question: "Cách mạng công nghiệp lần thứ tư gắn với yếu tố nào?",
      options: ["Công nghệ số, trí tuệ nhân tạo", "Máy hơi nước", "Dây chuyền hàng loạt"],
      answer: 0,
      explanation: "Gồm AI, dữ liệu lớn, Internet vạn vật."
    },
    {
      question: "Năm nào Nguyễn Tất Thành rời bến cảng Sài Gòn đi tìm đường cứu nước?",
      options: ["1911", "1930", "1945"],
      answer: 0,
      explanation: "Năm 1911, trên con tàu Amiral Latouche-Tréville."
    },
    {
      question: "Công nghiệp hóa, hiện đại hóa ngày nay gắn với loại hình kinh tế nào?",
      options: ["Tự cấp tự túc", "Kinh tế tri thức", "Bao cấp"],
      answer: 1,
      explanation: "Gắn với kinh tế tri thức và hội nhập quốc tế."
    },
    {
      question: "Việt Nam trở thành thành viên chính thức của WTO năm nào?",
      options: ["2000", "2007", "2015"],
      answer: 1,
      explanation: "Việt Nam là thành viên thứ 150 của WTO từ năm 2007."
    },
    {
      question: "Việt Nam gia nhập ASEAN năm nào?",
      options: ["1995", "2001", "2010"],
      answer: 0,
      explanation: "Việt Nam trở thành thành viên ASEAN năm 1995."
    }
  ]

};
